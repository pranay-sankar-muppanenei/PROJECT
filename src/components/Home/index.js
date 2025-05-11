import './index.css';
import { FaPhotoVideo } from "react-icons/fa";
import { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      imageUrl: null // Store the image URL
    };
  }

  // Handler to capture file input change and update the state
  handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file (if any)
    if (file) {
      // Update the file name
      this.setState({ fileName: file.name });

      // Use FileReader to read the image and display it
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ imageUrl: reader.result }); // Store the image URL (data URL)
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  render() {
    return (
      <div className="background">
        <div className="alignment">
          <h1 className="heading">POD t-shirt store : </h1>
          <p className="heading2" id="cap"></p>
        </div>
        {/* Display the uploaded image if available */}
        {this.state.imageUrl && (
              <img 
                src={this.state.imageUrl} 
                alt="Uploaded Preview" 
                id="imageId" 
                className="image-styling"
              />
            )}
        <div className='mon'>
          <div className="input-container">
            
            <div>
              <FaPhotoVideo className="ink" />
              <p className='drop'>Drop an image here or</p>
              <input 
                type="file" 
                id="file" 
                className='none' 
                onChange={this.handleFileChange}  // Add onChange handler
              />
              <div className="Align-row">
                <label htmlFor="file" className="label">Select file</label>
              </div>
              <p className='drop dr'>Max file upload 10mb</p>
              {this.state.fileName && (  // Conditionally render the file name
                <p className="file-name">Selected file: {this.state.fileName}</p>
              )}
            </div>
          </div>

          <div>
            <form className="custom-form">
              <label htmlFor="height">Height:</label>
              <input type="text" id="height" name="height" placeholder="180cm" />

              <label htmlFor="weight">Weight:</label>
              <input type="text" id="weight" name="weight" placeholder="80kg" />

              <label htmlFor="build">Build:</label>
              <select id="build" name="build">
                <option value="lean">Lean</option>
                <option value="reg">Regular</option>
                <option value="athletic">Athletic</option>
                <option value="big">Big</option>
              </select>
            </form>
          </div>
        </div>

        <br />
        <div className='mad'>
          <textarea
            className="text-input"
            placeholder="Type up to 3 lines for your t-shirt..."
            rows={3}
            cols={70}
          />
        </div>
      </div>
    );
  }
}

export default Home;