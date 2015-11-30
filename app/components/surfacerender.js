var React = require('react');
var ReactART = require('react-art');
var Surface = ReactART.Surface;
var Shape = ReactART.Shape;
var GroupRender = require('./grouprender.js');
var ShapeRender = require('./shaperender.js');

var SurfaceRender = React.createClass({

  render() {
    return (
      <Surface height={this.props.data.size.y} width={this.props.data.size.x} style={{marginTop: 10,}}>
        {this.renderChildren(this.props.data)}
      </Surface>
    );
  },
  renderChildren(data){
    var children = data.layers
    var x = 0;
    return children.map(function (child) {
      x++;
      if (child.name === 'g') {
        return <GroupRender key={'group' + x} art={data} data={child}/>
      }
      if (child.name === 'path') {
        return <ShapeRender key={'shape' + x} art={data} data={child}/>
      }
    });
  }


})

module.exports = SurfaceRender;
