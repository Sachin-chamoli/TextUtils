import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }

  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
  const copytext = () =>{
    const textarea = document.createElement("textarea");

    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    props.showAlert("Copied to clipboard", "success");

    // const text = document.getElementById('myBox');
    // text.select();
    // navigator.clipboard.writeText(text.value);
    
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }
  const handleOnChange = (event) =>{
    // console.log("Onchange");
    setText(event.target.value);
  }
  const [text, setText] = useState("");          //bydefault value of text
  // text = " dwucecbucb";        //wrong way to change the text
  // setText("new text");           //correct way to change the text
  return (
    <>
    <div className = " container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'? 'rgb(37 34 60)': 'white', color: props.mode ==='light'? 'black': 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={copytext}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> character</p>
      <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
