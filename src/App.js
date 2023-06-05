
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
  
// }from "react-router-dom";

 
 



function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
   const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     type:type
    })
    setTimeout(()=>{
setAlert(null);
    },3000);
   }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert('Dark mode','success');
    document.title='TextUtils-Dark Mode'

  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Dark mode','success');
  }
 }
  return (
   <>
  {/* <Router> */}
<Navbar title="TextUtils" about="About Us"mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-5">
{/* <Routes>
<Route path='/about' element={<About/>} />
            
          

          <Route path='/' element={}*/}

          <TextForm heading="Enter the text here to analyze" mode={mode} showAlert={showAlert}/>
          
          
    {/*    </Routes> */}
        </div>
{/* </></Router> */}




   </>
  );
}

export default App;
