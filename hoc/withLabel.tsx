import * as React from 'react';

function ComponentLabel(WrapperComponent) {
  return (props) => {
    return (
      <div className="container-label">
        <label>HOC Wrapper</label>
        <WrapperComponent {...props} />
      </div>
    );
  };
}

export default ComponentLabel;
