import React from "react";
const ProgressBar = (props) => {
  const { bgcolor, completed, total } = props;

  const ProcentProgressBar = Math.round((completed/total)*100);
  const containerStyles = {
    height: 25,
    width: `100%`,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 30
  }

  const fillerStyles = {
    height: '100%',
    width: `${ProcentProgressBar}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    margin: 'auto'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${ProcentProgressBar}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;