import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("handleUpClick was Clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert('Convertaed to UpperCase!', 'sucess');
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Convertaed to LowerCase!', 'sucess');
    }

    const clrText = () => {
        setText(' ')
        props.showAlert('Text cleared', 'sucess');
    }

    const speakBtn = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
      

    const copyBtn = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied!', 'sucess')
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");
   
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'grey': 'white'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',
            color: props.mode === 'dark'? 'white': 'grey'
        }} rows='8' id="myBox"></textarea>
        </div>

        <button className="btn btn-primary" style= {{backgroundColor: props.mode === 'dark'? 'white': 'green',
            color: props.mode === 'dark'? 'green': 'white'
        }} onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary4" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clrText}>Clear</button>
        <button className="btn btn-primary4" onClick={copyBtn}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={speakBtn}>Speak</button>
        
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'? 'grey': 'white'}}>
        <h1>Your Text Summery</h1>
        {/* <p>{text.split(' ').length-1} words and {1000-text.length-1} characters</p> */}
        <p>{text.split(" ").filter(word => word.trim() !== "").length}: words and { 1000-text.length-1} Characters</p>
        <p>{ 0.008* text.split(' ').length} minutes readTime</p>
        <h2>Preview</h2>
        <p>{text? text:'Enter text to preview'}</p>
    </div>
    </>
  )
}
