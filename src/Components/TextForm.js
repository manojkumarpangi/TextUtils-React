import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handlUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handlClearClick = ()=> {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const handlLowClick = () => {
        let lText = text.toLowerCase();
        setText(lText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(65 65 65)': 'white ', color: props.mode === 'dark' ? 'white': 'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handlUpClick}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handlLowClick}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handlClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>Can be read in {0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes </p>
    </div>
    </>
  )
}
