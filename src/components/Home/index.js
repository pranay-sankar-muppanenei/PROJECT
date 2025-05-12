import './index.css';
import { FaPhotoVideo } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Home() {
  const { register, handleSubmit } = useForm();
  const [fileName, setFileName] = useState('');
  const [imageUrl, setImageUrl] = useState(' ');
  const [themeIndex, setThemeIndex] = useState(0); // Start with theme1
  const themes = ['theme1', 'theme2', 'theme3'];

  // Handler to capture file input change and update the state
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 'q') {
        setThemeIndex((prev) => (prev + 1) % themes.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`background ${themes[themeIndex]}`}>
      <p className='p'>Alt+q to change theme</p>
      <h1 className="heading">POD t-shirt store :</h1>
      {/* Display the uploaded image if available */}
      <div className='mon'>
        <div className="size">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt="T-shirt mockup" 
              id="imageId" 
              className="image-styling"
            />
          )}
        
          <div className="input-container">
            <div>
              <FaPhotoVideo className="ink" />
              <p className='drop'>Drop an image here or</p>
              <input 
                type="file" 
                id="file" 
                className='none' 
                onChange={handleFileChange}  // Add onChange handler
              />
              <div className="Align-row">
                <label htmlFor="file" className="lab">Select file</label>
              </div>
              <p className='drop dr'>Max file upload 10mb</p>
              {fileName && (  // Conditionally render the file name
                <p className="file-name">Selected file: {fileName}</p>
              )}
            </div>
          </div>
        </div>
        <div className='mon2'>
          <form className="custom-form">
            <div className="mind">
              <div className='kd'>
                <label htmlFor="height">Height(cm)</label>
                <input
                  {...register('height')} 
                  type="text" 
                  id="height" 
                  name="height" 
                  placeholder="180cm" 
                  className='inp'
                />
              </div>
              <div className='kd'>
                <label htmlFor="weight">Weight(kg)</label>
                <input
                  {...register('weight')} 
                  type="text" 
                  id="weight" 
                  name="weight" 
                  placeholder="80kg" 
                  className='inp'
                />
              </div>
              <div className='kd'>
                <label htmlFor="build">Build:</label>
                <select {...register('build')} id="build" name="build">
                  <option value="lean">Lean</option>
                  <option value="reg">Regular</option>
                  <option value="athletic">Athletic</option>
                  <option value="big">Big</option>
                </select>
              </div>
            </div>  
            <div className='mad'>
              <label>Custom Text (max 3 lines)</label>
              <textarea
                {...register('customText')}
                className="text-input"
                placeholder="Type up to 3 lines for your t-shirt..."
                rows={3}
                cols={70}
              />
            </div>
            <button className="button">Place Order</button>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;
