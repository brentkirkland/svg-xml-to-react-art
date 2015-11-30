var React = require('react');

var Code = React.createClass( {
  render() {
    return (
      <div style={style.topBarDiv}>
        <pre>
          <code>
            {this.props.text}
          </code>
        </pre>
      </div>
    )
  }
});

var style = {
  topBarDiv: {
    marginTop: 10,
    width: 667,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    backgroundColor: '#fbfbfb',
    marginBottom: 10,
  }
}

module.exports = Code;
