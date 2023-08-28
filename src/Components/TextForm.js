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
        console.log("Changed")
        setText(event.target.value)
    }
    const handlLowClick = () => {
        let lText = text.toLowerCase();
        setText(lText)
        props.showAlert("Converted to lowercase!", "success")
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#2B2F30': 'white ', color: props.mode === 'dark' ? 'white': 'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handlUpClick}>Upper Case</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handlLowClick}>Lower Case</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handlClearClick}>Clear Text</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Can be read in {0.008 * text.split(" ").length} minutes </p>
    </div>
    </>
  )
}
