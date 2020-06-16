import React from 'react';
import './styles.css';

const Mark = (props) => {
    const { color, name } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
      
    );
  };

  export default Mark;









