import React from 'react';
import './style.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function ProductSlide(props) {
  const { fadeImages } = props;
  return (
    <div className="slide-container">
        <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img alt={ index } src={fadeImage.img} />
            </div>
          </div>
        ))}
      </Fade>
      </div>
  )
}
