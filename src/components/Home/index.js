import './index.css';
import { FaPhotoVideo } from "react-icons/fa";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [currentStyle, setCurrentStyle] = useState(0); // State for switching styles

  const styles = [
    {
      background: '#1E1E1E',
      color: '#fff',
      inputBackground: 'white',
      labelColor: '#FFD700',
      headingColor: '#FFD700',  // Heading color for this style
    },
    {
      background: "green",
      color: '#333',
      inputBackground: '#FFF',
      labelColor: '#FF6347',
      headingColor: '#FF6347',  // Heading color for this style
    },
    {
      background: '#FF4081',
      color: '#fff',
      inputBackground: '#F48FB1',
      labelColor: '#FFD54F',
      headingColor: '#FFD54F',  // Heading color for this style
    }
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey && e.key === "q") {
        setCurrentStyle((prevStyle) => (prevStyle + 1) % styles.length);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container">
      <div className="textbook-container">
        <div className="textbook"
          style={{
            backgroundColor: styles[currentStyle].background,
            color: styles[currentStyle].color,
          }}>
          <h1 className="heading" style={{ color: styles[currentStyle].headingColor }}>
            POD T-shirt Store
          </h1>
          {/* Form with scrollable container */}
          <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <FaPhotoVideo className="ink" style={{ color: styles[currentStyle].color }} />
              <p className="drop" style={{ color: styles[currentStyle].color }}>
                Drop an image here or
              </p>
              <input 
                type="file" 
                id="file" 
                className="none" 
                onChange={(e) => console.log(e.target.files[0].name)} 
              />
              <div className="Align-row">
                <label
                  htmlFor="file"
                  className="label"
                  style={{
                    backgroundColor: styles[currentStyle].inputBackground,
                    color: styles[currentStyle].labelColor
                  }}
                >
                  Select file
                </label>
              </div>
              <p className="drop dr" style={{ color: styles[currentStyle].color }}>
                Max file upload 10mb
              </p>
            </div>

            {/* Form inputs */}
            <label htmlFor="height" style={{ color: styles[currentStyle].color }}>
              Height:
            </label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="180cm"
              style={{ backgroundColor: styles[currentStyle].inputBackground }}
              {...register('height')}
            />

            <label htmlFor="weight" style={{ color: styles[currentStyle].color }}>
              Weight:
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="80kg"
              style={{ backgroundColor: styles[currentStyle].inputBackground }}
              {...register('weight')}
            />

            <label htmlFor="build" style={{ color: styles[currentStyle].color }}>
              Build:
            </label>
            <select
              id="build"
              name="build"
              style={{ backgroundColor: styles[currentStyle].inputBackground }}
              {...register('build')}
            >
              <option value="lean">Lean</option>
              <option value="regular">Regular</option>
              <option value="athletic">Athletic</option>
              <option value="big">Big</option>
            </select>

            <textarea
              className="text-input"
              placeholder="Type up to 3 lines for your t-shirt..."
              rows={3}
              cols={70}
              style={{ backgroundColor: styles[currentStyle].inputBackground }}
              {...register('text')}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

