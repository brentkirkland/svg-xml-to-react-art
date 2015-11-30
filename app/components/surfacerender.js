var React = require('react');
var ReactART = require('react-art');
var Surface = ReactART.Surface;
var Shape = ReactART.Shape;

var SurfaceRender = React.createClass({

  render() {
    return (
    <Surface height={10} width={10}>
      <Shape d={'M36.7,8.1c-3.2,0-3.2-5,0-5C39.9,3.1,39.9,8.1,36.7,8.1L36.7,8.1z'} fill={'#123123'} />
    </Surface>
  );
  }

})

module.exports = SurfaceRender;
