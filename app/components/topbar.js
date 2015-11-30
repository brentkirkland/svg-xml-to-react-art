var React = require('react');

var TopBar = React.createClass( {
  render() {
    return (
      <div style={style.topBarDiv}>
        <h1 style={style.h1}>SVG XML Converter</h1>
        <p style={style.p}>Paste SVG XML code from Illustrator and get React Art javascript.</p>
      </div>
    )
  }
});

var style = {
  h1: {
    fontFamily: ['brandon-grotesque', "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", "freesans", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol",],
    color: '#231f20',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 40,
  },
  p: {
    fontFamily: ['brandon-grotesque', "Helvetica Neue", "Helvetica", "Segoe UI", "Arial", "freesans", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol",],
    fontSize: 16,
    textAlign: 'center',
    color: '#231f20',
  },
  topBarDiv: {
    marginTop: 10,
    paddingTop: 100,
    paddingBottom: 100,
    width: 700,
    borderRadius: 2,
    backgroundColor: 'white'
  }
}

module.exports = TopBar;
