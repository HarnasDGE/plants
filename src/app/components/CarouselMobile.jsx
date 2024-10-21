"use client";
import React, { useEffect, useRef, useState } from "react";

export const CarouselMobile = ({ children, pagination = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0); // Nowa zmienna na szerokość slajdu
  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    // Ten efekt uruchomi się tylko po stronie klienta
    setSlideWidth(window.innerWidth);
  }, []);

  const slideCount = React.Children.count(children);
  const gap = 16; // Odstęp między slajdami w pikselach (1rem = 16px)

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - startX.current;
    setTranslateX(deltaX);
  };

  const handleEnd = () => {
    isDragging.current = false;
    const threshold = slideWidth / 4; // Używamy zmiennej slideWidth zamiast window.innerWidth
    if (translateX < -threshold && currentIndex < slideCount - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  // Obliczenia dla szerokości slajdów i przesunięcia
  const totalGap = gap * (slideCount - 1); // Całkowity odstęp między slajdami
  const totalWidth = slideWidth * slideCount + totalGap; // Całkowita szerokość karuzeli

  const carouselStyle = {
    transform: `translateX(${
      -currentIndex * (slideWidth + gap) + translateX
    }px)`,
    transition: isDragging.current ? "none" : "transform 0.3s ease-out",
  };

  return (
    <div
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      className="overflow-hidden lg:hidden"
    >
      <div
        className="flex items-center"
        style={{
          ...carouselStyle,
          gap: `${gap}px`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="flex-shrink-0" style={{ width: `${slideWidth}px` }}>
            {child}
          </div>
        ))}
      </div>
      {/* Paginacja */}
      {pagination && (
        <div className="flex justify-center mt-4">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`h-2 bg-main rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex ? "w-5" : "w-2"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
