import React from 'react';
import Land from 'components/Land/Land';
import Panel from 'components/Panel/Panel';
import './app.css';

const App = () => {
  return (
    <>
      <div className="app">
        <Panel />
        <Land />
      </div>
    </>
  );
};

export default App;
