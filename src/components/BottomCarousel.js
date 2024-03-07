import React, { useState } from "react";
import "../styles/BottomCarousel.css"; 

const BottomCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="carousel">
      {currentImageIndex > 0 && (
        <button
          onClick={prevSlide}
          className="carousel__arrow carousel__arrow--left"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <div className="carousel__track-container">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${currentImageIndex * 90}%)` }}
        >
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              className={`carousel__image ${
                index === currentImageIndex ? "carousel__image--current" : ""
              }`}
              key={index}
            />
          ))}
        </div>
      </div>

      {currentImageIndex < images.length - 1 && (
        <button
          onClick={nextSlide}
          className="carousel__arrow carousel__arrow--right"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

      <div className="carousel__indicators">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={
              index === currentImageIndex
                ? "carousel__indicator carousel__indicator--active"
                : "carousel__indicator"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BottomCarousel;
