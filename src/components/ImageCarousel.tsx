"use client";

// import React, { useState, useCallback, useEffect } from "react";
import React, { useState, useCallback, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
import { cn } from "../lib/utils"; // adjust path if needed

export interface ImageSlide {
  id: string;
  image: string;
  alt?: string;
}

export interface ImageCarouselProps {
  slides: ImageSlide[];
  background?: string;
  cardWidth?: number;
  cardHeight?: number;
  cardRadius?: number;
  showArrows?: boolean;
  showDots?: boolean;
  keyboardNavigation?: boolean;
  touchNavigation?: boolean;
  animationDuration?: number;
  autoPlay?: number;
  pauseOnHover?: boolean;
  visibleCards?: number;        // how many side cards each side (0–2)
  sideCardScale?: number;
  sideCardOpacity?: number;
  grayscaleEffect?: boolean;
  className?: string;
  cardClassName?: string;
  dotColor?: string;
}

// how far side cards offset from center (as % of width)
const SIDE_OFFSET_FACTOR = 0.18;

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  background,
  cardWidth = 380,
  cardHeight = 250,
  cardRadius = 28,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 4500,
  pauseOnHover = true,
  visibleCards = 1,
  sideCardScale = 0.9,
  sideCardOpacity = 0.7,
  grayscaleEffect = true,
  className,
  cardClassName,
  dotColor = "#38bdf8",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: idle, 1: next, -1: prev

  const totalSlides = slides.length;
  const sideOffset = cardWidth * SIDE_OFFSET_FACTOR;
  const trackWidth = cardWidth + sideOffset * 2; // exactly fits main + side peeks

  const paginate = useCallback(
    (newDirection: 1 | -1) => {
      if (totalSlides === 0) return;
      setDirection(newDirection);
      setCurrentIndex((prev) => (prev + newDirection + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  // --- positioning logic (center + side cards) ---
  const calculatePosition = (index: number) => {
    if (totalSlides === 0) return "hidden";

    const rawOffset = index - currentIndex;
    const half = Math.floor(totalSlides / 2);

    // normalize into [-half, half]
    let offset = rawOffset;
    if (rawOffset > half) offset = rawOffset - totalSlides;
    if (rawOffset < -half) offset = rawOffset + totalSlides;

    if (offset === 0) return "center";

    if (offset > 0 && offset <= visibleCards) return `right-${offset}`;
    if (offset < 0 && -offset <= visibleCards) return `left-${-offset}`;

    return "hidden";
  };

  const getVariantStyles = (position: string): TargetAndTransition => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    switch (position) {
      case "center":
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.06,
          x: 0,
          filter: "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-1":
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: sideOffset,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-2":
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.5,
          scale: sideCardScale * 0.9,
          x: sideOffset * 2,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "left-1":
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: -sideOffset,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "left-2":
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.5,
          scale: sideCardScale * 0.9,
          x: -sideOffset * 2,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      default:
        // HIDDEN: fade/scale in place – no big horizontal travel
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.85,
          x: 0,
          pointerEvents: "none",
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          transition,
        };
    }
  };

  // --- autoplay ---
 // --- autoplay (robust + React-controlled hover pause) ---
// const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

const [isPaused, setIsPaused] = useState(false);

const stopAutoPlay = useCallback(() => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
}, []);

const startAutoPlay = useCallback(() => {
  stopAutoPlay();
  if (autoPlay <= 0 || totalSlides <= 1) return;
  intervalRef.current = setInterval(() => paginate(1), autoPlay);
}, [autoPlay, paginate, stopAutoPlay, totalSlides]);

useEffect(() => {
  if (isPaused) stopAutoPlay();
  else startAutoPlay();

  return () => stopAutoPlay();
}, [isPaused, startAutoPlay, stopAutoPlay]);


  // --- keyboard nav ---
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyboardNavigation, paginate]);

  // --- touch nav ---
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchNavigation) return;

    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) paginate(1);
      else paginate(-1);
    }
  };

  return (
      <div
  id="image-carousel-container"
  className={cn(
    "flex flex-col items-center justify-center relative pb-6",
    className
  )}
  style={{ background }}
  onMouseEnter={() => pauseOnHover && setIsPaused(true)}
  onMouseLeave={() => pauseOnHover && setIsPaused(false)}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>

      {/* Track container – fixed width & overflow-hidden so nothing leaks into week card */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: trackWidth,
          height: cardHeight + 60,
        }}
      >
        {/* Arrows */}
        {showArrows && totalSlides > 1 && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-md transition hover:bg-black/80"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-md transition hover:bg-black/80"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </>
        )}

        {/* Cards track */}
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {slides.map((slide, index) => {
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;

              if (position === "hidden" && !isCurrent) return null;

              return (
                <motion.div
                  key={slide.id}
                  className={cn(
                    "absolute bg-white overflow-hidden shadow-2xl cursor-pointer border border-white/10",
                    cardClassName
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    top: "50%",
                    left: "50%",
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                  }}
                  initial={getVariantStyles("hidden")}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles("hidden")}
                  onClick={() => {
                    if (!isCurrent) {
                      const newDirection: 1 | -1 =
                        index > currentIndex ? 1 : -1;
                      paginate(newDirection);
                    }
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt || `Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      {showDots && totalSlides > 1 && (
        <div className="mt-4 flex justify-center gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              // onClick={() => setCurrentIndex(index)}
              onClick={() => {
  setDirection(index > currentIndex ? 1 : -1);
  setCurrentIndex(index);
}}

              className={cn(
                "h-2.5 w-2.5 rounded-full transition-transform duration-200",
                index === currentIndex ? "scale-125" : "hover:scale-110"
              )}
              style={{
                background:
                  index === currentIndex ? dotColor : `${dotColor}33`,
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
