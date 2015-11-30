var React = require('react');
var ReactART = require('react-art');
var Group = ReactART.Group;

var ShapeRender = require('./shaperender.js');

var gr;
var GroupRender = React.createClass({

  render() {
    return (
      <Group>
        {this.renderChildren(this.props.data.children)}
      </Group>
    );
  },
  renderChildren(children){
    gr = this;
    var x = 0;
    return children.map(function(child) {
      x++;
      if (child.name === 'g') {
        return <GroupRender key={'group' + x} art={gr.props.art} data={child}/>
      } else if (child.name === 'path') {
        return <ShapeRender key={'shape' + x} art={gr.props.art} data={child}/>
      }
    })
  }


})

module.exports = GroupRender;
