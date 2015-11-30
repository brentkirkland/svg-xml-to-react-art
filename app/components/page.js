var React = require('react');
var ReactDOM = require( 'react-dom');
var TopBar =  require('./topbar.js');
var Paste = require('./paste.js');
var Store = require('../stores/store');
//var SurfaceRender = require('./surfacerender.js');

import ReactART from 'react-art';

//var ReactART = require('react-art/lib/ReactART.js');
//var ReactFAST = require('react-art/node_modules/art/modes/canvas.js');
var Surface = ReactART.Surface;
var Shape = ReactART.Shape;
var Group = ReactART.Group;

function getData() {
  return{
    data: Store.getAll()
  };
}

var Page = React.createClass({

  getInitialState: function() {
    return getData();
  },
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  render() {
    return (
        <div style={style.window}>
          <div id={'page'} style={style.page}>
            <TopBar/>
            {this.renderSurface()}
            <Paste/>
          </div>
        </div>
      )
  },
  _onChange: function() {
    this.setState(getData());
  },
  renderSurface(){
    if (this.state.data === undefined) {
      return;
    } else {
      return (
        <Surface height={42} width={70}>
          <Group>
            <Group>
              <Shape d={"M12.1,9.7c0.5,8.3-0.3,16.6-0.9,24.9c-0.2,2.8,4.4,3.4,4.9,0.7c0.4-2.1,0.8-4.2,1.5-6.2c0.4-1.3,0.9-2.6,1.6-3.7c0.5-0.7,0.9-1.4,1.4-2.1c-0.5,0.2-1,0.4-1.4,0.6c-0.3,2.4,1.2,6.5,3.4,7.7c5.3,2.9,9.6-6.4,10.9-10.1c-1.6-0.2-3.3-0.4-4.9-0.7C28,25,26.7,31.9,32.1,33.3c4.3,1.2,8-2.1,8.7-6.1c0.5-3.1-4.3-4.5-4.8-1.3c-0.9,0.7-1.9,1.5-2.8,2.2c-0.1-0.9-0.1-1.8,0-2.7c0-1.5,0.2-3,0.4-4.6c0.4-2.9-4.1-3.2-4.9-0.7c-0.3,0.8-2.6,6.7-3.7,6.3c-0.5-0.2-0.7-3-0.9-3.9c-0.6-2.1-1.6-4.2-4-4.2c-5.9,0.1-7.8,11.5-8.6,15.6c1.6,0.2,3.3,0.4,4.9,0.7c0.6-8.3,1.4-16.6,0.9-24.9C16.9,6.5,11.9,6.5,12.1,9.7L12.1,9.7z"} fill={'#231F20'}>
              </Shape>
            </Group>
          </Group>
          <Group>
            <Group>
              <Shape d={"M31.8,17.2c3.2,0,3.2-5,0-5C28.5,12.2,28.5,17.2,31.8,17.2L31.8,17.2z"} fill={'#231F20'}>
              </Shape>
            </Group>
          </Group>
        </Surface >
      )
    }
  }
});

var style = {
  page: {
    backgroundColor: 'white'
  },
  window: {
    display: '-webkit-flex',
    WebkitAlignItems: 'center',
    margin: 0,
    WebkitJustifyContent: 'center',
  }
};

module.exports = Page;
