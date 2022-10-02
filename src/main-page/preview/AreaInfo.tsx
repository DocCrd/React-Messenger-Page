import * as React from 'react';

function AreaInfo(props) {
  return (
    <div style={{ marginBottom: '0.625rem' }}>
      <div style={{ color: '#5F6164' }}>
        <p>{props.type}</p>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default AreaInfo;
