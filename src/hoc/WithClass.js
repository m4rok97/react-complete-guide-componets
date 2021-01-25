import React from 'react';

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

// High Order Component with Normal Component Style
// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );

export default withClass;
