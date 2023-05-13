import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';

// Example function for onWidthChange prop
const handleWidthChange = (value: number) => {
  console.log('Width changed:', value);
};

ReactDOM.render(
  <React.StrictMode>
    <Panel onWidthChange={handleWidthChange} initialEnabled={true} />
  </React.StrictMode>,
  document.getElementById('root')
);
