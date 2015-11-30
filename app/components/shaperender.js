var React = require('react');
var ReactART = require('react-art');
var Shape = ReactART.Shape;

var GroupRender = require('./grouprender.js');

var sr;
var ShapeRender = React.createClass({

  render() {
    return (
      <Shape d={this.props.data.attributes.d} fill={this.getColor(this.props.art, this.props.data.attributes.class)}>
        {this.renderChildren(this.props.data.children)}
      </Shape>
    );
  },
  renderChildren(children){
    sr = this;
    var x = 0;
    return children.map(function(child) {
      if (child.name === 'g') {
        return <GroupRender key={'group' + x} art={sr.props.art} data={child}/>
      } else if (child.name === 'path') {
        return <ShapeRender key={'shape' + x} art={sr.props.art} data={child}/>
      }
    })
  },
  getColor: function(art, className){
    for(var i = 0; i < art.classInfo.length; i++){
      if (className === art.classInfo[i].name) {
        return art.classInfo[i].color;
      }
    }
  },


})

module.exports = ShapeRender;
