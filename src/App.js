
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() { 
  const [mode, setMode] = useState('light');
  const[alert, setAlert] =useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(37 34 60)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - dark Mode";
      
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
    {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
    {/* <Navbar /> */}
    <Navbar title = "TextUtils" mode ={mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">      
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
         
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze " mode ={mode} showAlert ={showAlert}/>
          {/* </Route> */}
    {/* </Switch>    */}
    </div>
    {/* </Router> */}
    </>
  
  );
}

export default App;

//conatiner  a class in bootstarp
//my-3 is a class for margin in y