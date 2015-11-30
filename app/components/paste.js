var React = require('react');
var Actions = require('../actions/actions.js');

var Paste = React.createClass({
  getInitialState: function() {
    return {
      svgcode: ""
    }
  },
  render: function() {
    return (
      <div style={style.topBarDiv}>
        <textarea
          ref="svgcodepaste"
          onChange={this.change}
          style={style.textarea}
          value={this.state.svgcode}
          placeholder='Paste your XML SVG Code here'/>
      </div>
    )
  },
  change: function(text){
    //sanitize
    var actualText = text.target.value.replace(/(\r\n|\n|\r|\t)/gm,"");

    this.setState({svgcode: actualText});
    this.extractXML(actualText);
  },
  extractXML: function(text) {
    var parseXml;

    if (window.DOMParser) {
      parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
      };
    } else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
      parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
      };
    } else {
      parseXml = function() { return null; }
    }
    var xmlDoc = parseXml(text);
    if (xmlDoc) {
      var sizearray = this.getSize(xmlDoc.getElementsByTagName("svg")[0].attributes["viewBox"].textContent);
      var art = {
        size:
        {
            x: sizearray[2],
            y: sizearray[3],
        },
        classInfo:  this.getClassInfo(xmlDoc.getElementsByTagName("style")[0].textContent),
        layers: this.getPaths(xmlDoc),
      }


      //get the text
      art.text = this.getCompleteText(art);
      Actions.convert(art);
      //pass to stores
    }
  },
  getCompleteText: function(art){
    var text = "";

    text = "<Surface height={" + art.size.y + "} width={" + art.size.x + "}>\n";
    text = text + this.getChildrenText(art, art.layers, 1)
    text = text + "</Surface>";
    return text;

  },
  getChildrenText: function(art, children, indentcount){
    var text = this.indents(indentcount);
    for (var i = 0; i < children.length; i++){
      if (children[i].name === 'path') {
        text = text + "<Shape d={\'" + children[i].attributes.d + "\'} fill={\'" + this.getColor(art, children[i].attributes.class) + "\'}>\n";
      }
      if (children[i].name === 'g') {
        text = text + "<Group>\n"
      }


      if(children[i].children.length > 0){
        text = text + this.getChildrenText(art, children[i].children, indentcount + 1);
      }
      text = text + this.indents(indentcount);

      if (children[i].name === 'path') {
        text = text + "</Shape>\n";
      }
      if (children[i].name === 'g') {
        text = text + "</Group>\n"
      }
      if (i < children.length - 1) {
        text = text + this.indents(indentcount);
      }
    }
    return text;
  },
  getColor: function(art, className){
    for(var i = 0; i < art.classInfo.length; i++){
      if (className === art.classInfo[i].name) {
        return art.classInfo[i].color;
      }
    }
  },
  indents: function(indentcount){
    var text = "";
    for (var i = 0; i < indentcount; i++){
      text = text + '  ';
    }
    return text;
  },
  getClassInfo: function(text) {
    //loop through once, for linear time and
    //to remove the garbage text like new lines

    var data = [];
    //1 = stx, 2 = attribute, 3 = color
    var x = 0;
    var capturedtext = "";

    for(var i = 0; i < text.length; i++){

      if (text[i] === '.') {
        x = 1;
        data.push({
          name: "",
          color: "#",
          attribute: "",
        })
        continue;
      } else if (text[i] === '{'){
        x = 2;
        continue;
      } else if (text[i] === '#') {
        x = 3;
        continue;
      } else if (text[i] === ':' || text[i] === ';' || text[i] === ':'){
        x = 0;
      }
      if(x === 1){
        data[data.length - 1].name = data[data.length - 1].name + text[i];
      } else if (x === 2){
        data[data.length - 1].attribute = data[data.length - 1].attribute + text[i];
      } else if (x === 3){
        data[data.length - 1].color = data[data.length - 1].color + text[i];
      }
    }
    return data;
  },
  getSize: function (text){
    var sizearray = text.split(" ");
    return sizearray;
  },
  getPaths: function (xmlDoc){
    var nodes = []
    for (var i = 1; i < xmlDoc.getElementsByTagName('svg')[0].childElementCount; i++){
        nodes.push({
          name: xmlDoc.getElementsByTagName('svg')[0].children[i].nodeName,
          attributes: this.getAttributes(xmlDoc.getElementsByTagName('svg')[0].children[i].attributes),
          children: this.getChildren(xmlDoc.getElementsByTagName('svg')[0].children[i]),
        })
    }
    return nodes;

  },
  getAttributes: function(node){
    var attribute;
    for (var i = 0; i < node.length; i++) {
      if (attribute === undefined){
        attribute = new Object();
      }
      if(node[i].name === 'class'){
        attribute.class = node[i].textContent;
      } else if(node[i].name === 'd'){
        attribute.d = node[i].textContent;
      }
    }
    return attribute;
  },
  getChildren: function(children){
    var nodes = [];
    for(var i = 0; i < children.children.length; i++){
      nodes.push({
        name: children.children[i].localName,
        children: this.getChildren(children.children[i]),
        attributes: this.getAttributes(children.children[i].attributes),
      });
    }
    return nodes;
  }
});

var style = {
  h1: {
    fontFamily: ['brandon-grotesque', "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", "freesans", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol",],
    color: '#231f20',
    paddingLeft: 20,
    textTransform: 'uppercase',
    fontSize: 18,
  },
  p: {
    fontFamily: ['brandon-grotesque', "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", "freesans", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol",],
    fontSize: 16,
    textAlign: 'center',
    color: '#231f20',
  },
  topBarDiv: {
    marginTop: 10,
    width: 700,
    borderRadius: 2,
  },
  textarea: {
    fontFamily: ['brandon-grotesque', "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", "freesans", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol",],
    fontSize: 16,
    borderRadius: 2,
    marginTop: 10,
    width: 700,
    height: 150,
  }
}

module.exports = Paste;
