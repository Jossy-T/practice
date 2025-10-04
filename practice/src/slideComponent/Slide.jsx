import React, { useEffect, useRef, useState } from 'react';
import sampleVideo from "../image/15997382-hd_1920_1080_60fps.mp4";
import sampleVideo1 from "../image/pinterest_1759335270374320099.mp4";
import sampleVideo2 from "../image/pinterest_1759336355968865215.mp4";
import myImage1 from "../image/car1.jpg";
import myImage2 from "../image/car2.webp";
import myImage3 from "../image/car3.webp";
import myImage4 from "../image/car5.jpeg";
import myImage5 from "../image/Orange sky drama with drifting sand plume….jpeg";
import myImage6 from "../image/download (2).jpeg";
import myImage7 from "../image/Classic combo power.jpeg";
import "../App.css";

export default function Slide() {
  const slides = [
    { type: "video", src: sampleVideo, title: "Slider 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "video", src: sampleVideo1, title: "Slider 06", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "video", src: sampleVideo2, title: "Slider 07", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage1, title: "Slider 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage2, title: "Slider 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage3, title: "Slider 04", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage4, title: "Slider 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage5, title: "Slider 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage6, title: "Slider 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
    { type: "image", src: myImage7, title: "Slider 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-play
  useEffect(() => {
    if (slides.length === 0) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const currentSlide = slides[activeIndex];

  return (
    <div>
      <header>
        <div className="logo">Lundev</div>
        <ul className="menu">
          <li>Home</li>
          <li>Blog</li>
          <li>Info</li>
        </ul>
        <div className="search">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </header>

      {/* Slider */}
      <div className="slider">

        {/* Main Slide Display */}
        <div className="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              style={{ display: index === activeIndex ? "block" : "none" }}
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={slide.src} alt={slide.title} />
              )}

              <div className="content">
                <p>design</p>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button id="prev" onClick={handlePrev} aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
              <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z" />
            </svg>
          </button>

          <button id="next" onClick={handleNext} aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16m-7-7l7 7l-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={slide.type === "image" ? slide.src : slide.src}
                alt={slide.title}
                width="300"
                // For video thumbnails, you might want a poster image instead
                // But for simplicity, we reuse the video src (won't show preview)
                // Consider using a poster image for videos in real apps
              />
              {/*<div className="content">{slide.title}</div>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}