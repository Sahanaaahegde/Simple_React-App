import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText]=useState("");
    const handleUpClick1=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        //props.showAlert("Converted to uppercase","success");
    }
    const handleUpClick2=()=>{
        let newText=text.toLowerCase();
        setText(newText);
       // props.showAlert("Converted to lowercase","success");
    }
  
   const change=(event)=>{
    setText(event.target.value)
    
 }
 const clearText=(event)=>{
    let newText="";
    setText(newText);
 }
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
    <div className="mb-3">
   
    <textarea className="form-control"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" onChange={change} rows="10"></textarea>
    </div>
    <button className="btn btn-success my-5 mx-2" onClick={handleUpClick1}>
        Convert to UPPERCASE
    </button>
    <button className="btn btn-success my-5 mx-5" onClick={handleUpClick2}>
        Convert to lowercase
    </button>
    <button className="btn btn-success my-3 mx-2" onClick={clearText}>
       Clear Text
    </button>
    </div>
    <div className="container my-2">
<h2>Your text summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length},{text.length} characters.</p>
<p>{0.008*text.split(" ").length} minutes read</p>
    </div>
    </>
  )
}
