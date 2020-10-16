import React from 'react';
import greet from './components/object.jsx';
import Tags from './components/tags.jsx';

function App() {
  return (
    <React.StrictMode>
    
    <div className="design" style={{backgroundColor:greet().color}}>
      
        <Tags name="Aditya"/>
        <Tags name="Everyone"/>
      
    </div>




  </React.StrictMode>
  );
}

export default App;
