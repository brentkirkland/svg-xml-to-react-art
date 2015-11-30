var React = require('react');
var ReactDOM = require( 'react-dom');
var TopBar =  require('./topbar.js');
var Code =  require('./code.js');
var Paste = require('./paste.js');
var Store = require('../stores/store');
var SurfaceRender = require('./surfacerender.js');

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

            {this.renderSurface()}
            <Paste/>
            {this.renderCode()}
          </div>
        </div>
      )
  },
  _onChange: function() {
    this.setState(getData());
  },
  renderCode(){
    if (this.state.data === undefined) {
      return;
    } else {
      return (
        <Code text={this.state.data.text} />
      )
    }
  },
  renderSurface(){
    if (this.state.data === undefined) {
      return <TopBar/>
    } else {
      return (
        <SurfaceRender key={'surface'} data={this.state.data} />
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
