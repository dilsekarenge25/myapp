import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


let greet={};
let time=new Date();
//let time=new Date(2018,9,9,12);
time=time.getHours();

if(time<12)
{
  greet.wish="Good Morning";
  greet.color="green";

}else if(time<18)
{
  greet.wish="Good AfterNoon";
  greet.color="orange";
}else
{
  greet.wish="Good Night";
  greet.color="black";
}

ReactDOM.render(

  <React.StrictMode>
    
    <div className="design" style={{backgroundColor:greet.color}}>
      
        <h1>Hello Sir.</h1>
        <h2>{greet.wish}!</h2>
      
    </div>




  </React.StrictMode>,
  document.getElementById('root')
);

