import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import styled from "styled-components";

interface ImgSliderProps {
  images: string[];
};

const ImgSlider = ({ images }: ImgSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    e.preventDefault();
    const currentX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <SliderWrapper>
      <SlideContainer
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {images.map((img, index) => (
          <Slide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} draggable="false" />
          </Slide>
        ))}
      </SlideContainer>
      <PrevButton onClick={prevImage}><LeftArrowIcon /></PrevButton>
      <NextButton onClick={nextImage}><RightArrowIcon /></NextButton>
    </SliderWrapper>
  );
};

export default ImgSlider;

const SliderWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  border-radius: 24px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  aspect-ratio: 3 / 5;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  padding: 0;
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: 10px;
`;

const LeftArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" transform="rotate(-180 16 16)" fill="white" fill-opacity="0.8"/>
    <path d="M11.2051 18.1424C9.87175 17.3726 9.87175 15.4481 11.2051 14.6783L17.5128 11.0366C18.8461 10.2668 20.5128 11.229 20.5128 12.7686L20.5128 20.0521C20.5128 21.5917 18.8461 22.554 17.5128 21.7842L11.2051 18.1424Z" fill="#B179F8" fill-opacity="0.8"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.8"/>
    <path d="M20.7949 13.8576C22.1283 14.6274 22.1283 16.5519 20.7949 17.3217L14.4872 20.9634C13.1539 21.7332 11.4872 20.771 11.4872 19.2314L11.4872 11.9479C11.4872 10.4083 13.1539 9.44605 14.4872 10.2159L20.7949 13.8576Z" fill="#B179F8" fill-opacity="0.8"/>
  </svg>
);
