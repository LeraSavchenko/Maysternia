import React from 'react';


const blockstyle = {
  width: '100%',
  color: 'white',
  height: '600px',
};
const center = {
  margin: 'auto 0',
  textAlign: 'center',
  paddingTop: '10%',
};

class Logo extends React.Component {
  render() {
    return (
      <div style={blockstyle}>
        <div style={center}>
          <img src="./logo.png" alt="logo.png" />
        </div>
      </div>
    );
  }
}

export default(Logo);
