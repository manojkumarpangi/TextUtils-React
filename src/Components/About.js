import React from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(65 65 65)':'white', 
  }

  return (
    <div className="container my-3">
    <h1 style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
               <strong>Welcome to TextUtils</strong>

            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Your Ultimate Text Processing Toolbox! </strong>
            At TextUtils, we understand the power of words and the importance of efficient text processing. Whether you're a writer, student, programmer, or professional, our suite of text processing tools is designed to streamline your tasks and enhance your productivity. With a wide range of features and functionalities, TextUtils is your go-to resource for all things related to text manipulation and analysis.
            <br/>
            <strong>Our Mission:</strong>
            At the core of TextUtils is the mission to simplify complex text operations, making them accessible to everyone. We believe that working with text should be effortless and enjoyable, regardless of your level of expertise. Our tools are crafted to empower both beginners and experts, allowing them to accomplish tasks with speed and precision.
          </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Key Features:</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <strong>Character and Word Count: </strong>
            Need to know how many characters or words are in your text? Our tool provides accurate counts in an instant.
            <br/><strong>Case Conversion: </strong> 
            Transform text between uppercase, lowercase, title case, and more. Perfect for adjusting text appearance as needed.
            <br/><strong>Copy Text: </strong> 
            Copy the etxt into the clipboard and use it as needed.
            <br/><strong>Remove Extra Spaces:</strong> 
            You can use this tool to remove any extra spaces from the textarea 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Why Choose TextUtils?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>User-Friendly: </strong>Our interface is intuitive and easy to use, catering to individuals with varying technical backgrounds.
              <br/><strong>Efficiency: </strong>Save time and effort by automating repetitive text-related tasks. Focus on what truly matters – your content.
              <br/><strong>Accuracy: </strong>Enjoy precise results that help you maintain the integrity of your text during processing.
              <br/><strong>Privacy: </strong>We prioritize your data privacy and security. Your uploaded text is never stored or accessed beyond the scope of your current session.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
