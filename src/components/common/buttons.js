import React from 'react';

export default (props) => {
  return (
    <div className='control-btns'>
      <button className='btn btn-danger' onClick={() => props.resetApp()}>Reset</button>
      <button className='btn btn-lg btn-success' onClick={() => props.startKitti()}>START</button>
      <button className='btn btn-lg btn-danger hidden' onClick={() => props.startKitti()}>STOP</button>
    </div>
  );
};
