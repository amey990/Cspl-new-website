// "use client";

// import React, { useState, useCallback, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
// import { cn } from "../lib/utils"; // adjust path if needed

// export interface ImageSlide {
//   id: string;
//   image: string;
//   alt?: string;
// }

// export interface ImageCarouselProps {
//   /** Array of images */
//   slides: ImageSlide[];
//   /** Background color or gradient */
//   background?: string;
//   /** Card width in pixels */
//   cardWidth?: number;
//   /** Card height in pixels */
//   cardHeight?: number;
//   /** Card border radius */
//   cardRadius?: number;
//   /** Enable/disable navigation arrows */
//   showArrows?: boolean;
//   /** Enable/disable dots indicator */
//   showDots?: boolean;
//   /** Enable/disable keyboard navigation */
//   keyboardNavigation?: boolean;
//   /** Enable/disable touch/swipe navigation */
//   touchNavigation?: boolean;
//   /** Animation duration in milliseconds */
//   animationDuration?: number;
//   /** Auto-play interval in milliseconds (0 to disable) */
//   autoPlay?: number;
//   /** Pause auto-play on hover */
//   pauseOnHover?: boolean;
//   /** Number of visible cards on each side */
//   visibleCards?: number;
//   /** Scale factor for side cards */
//   sideCardScale?: number;
//   /** Opacity for side cards */
//   sideCardOpacity?: number;
//   /** Apply grayscale filter to side cards */
//   grayscaleEffect?: boolean;
//   /** Custom className for container */
//   className?: string;
//   /** Custom className for cards */
//   cardClassName?: string;
//   /** Color for active dot */
//   dotColor?: string;
// }

// export const ImageCarousel: React.FC<ImageCarouselProps> = ({
//   slides,
//   background,
//   cardWidth = 280,
//   cardHeight = 380,
//   cardRadius = 20,
//   showArrows = true,
//   showDots = true,
//   keyboardNavigation = true,
//   touchNavigation = true,
//   animationDuration = 800,
//   autoPlay = 0,
//   pauseOnHover = true,
//   visibleCards = 2,
//   sideCardScale = 0.9,
//   sideCardOpacity = 0.8,
//   grayscaleEffect = true,
//   className,
//   cardClassName,
//   dotColor = "#ffffff",
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // 0: no movement, 1: next, -1: prev
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const totalSlides = slides.length;

//   const paginate = useCallback(
//     (newDirection: number) => {
//       if (totalSlides === 0) return;
//       setDirection(newDirection);
//       const nextIndex = (currentIndex + newDirection + totalSlides) % totalSlides;
//       setCurrentIndex(nextIndex);
//     },
//     [currentIndex, totalSlides]
//   );

//   const wrapIndex = (index: number) => {
//     return (index + totalSlides) % totalSlides;
//   };

//   const calculatePosition = (index: number) => {
//     const activeIndex = currentIndex;
//     const diff = wrapIndex(index - activeIndex);

//     if (diff === 0) return "center";
//     if (diff <= visibleCards) return `right-${diff}`;
//     if (diff >= totalSlides - visibleCards) return `left-${totalSlides - diff}`;
//     return "hidden";
//   };

//   const getVariantStyles = (position: string): TargetAndTransition => {
//     const transition = {
//       duration: animationDuration / 1000,
//       ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
//     };

//     switch (position) {
//       case "center":
//         return {
//           zIndex: 10,
//           opacity: 1,
//           scale: 1.1,
//           x: 0,
//           filter: "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "right-1":
//         return {
//           zIndex: 5,
//           opacity: sideCardOpacity,
//           scale: sideCardScale,
//           x: cardWidth * 0.7,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "right-2":
//         return {
//           zIndex: 1,
//           opacity: sideCardOpacity * 0.7,
//           scale: sideCardScale * 0.9,
//           x: cardWidth * 1.4,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "left-1":
//         return {
//           zIndex: 5,
//           opacity: sideCardOpacity,
//           scale: sideCardScale,
//           x: -cardWidth * 0.7,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "left-2":
//         return {
//           zIndex: 1,
//           opacity: sideCardOpacity * 0.7,
//           scale: sideCardScale * 0.9,
//           x: -cardWidth * 1.4,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       default:
//         return {
//           zIndex: 0,
//           opacity: 0,
//           scale: 0.8,
//           x:
//             direction > 0
//               ? cardWidth * (visibleCards + 1)
//               : -cardWidth * (visibleCards + 1),
//           pointerEvents: "none",
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           transition,
//         };
//     }
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (autoPlay > 0) {
//       interval = setInterval(() => {
//         paginate(1);
//       }, autoPlay);
//     }

//     const carouselContainer = document.getElementById("image-carousel-container");

//     const handleMouseEnter = () => {
//       if (pauseOnHover && autoPlay > 0) clearInterval(interval);
//     };

//     const handleMouseLeave = () => {
//       if (pauseOnHover && autoPlay > 0) {
//         interval = setInterval(() => {
//           paginate(1);
//         }, autoPlay);
//       }
//     };

//     if (carouselContainer && pauseOnHover && autoPlay > 0) {
//       carouselContainer.addEventListener("mouseenter", handleMouseEnter);
//       carouselContainer.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       clearInterval(interval);
//       if (carouselContainer && pauseOnHover && autoPlay > 0) {
//         carouselContainer.removeEventListener("mouseenter", handleMouseEnter);
//         carouselContainer.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, [autoPlay, paginate, pauseOnHover]);

//   // Keyboard navigation
//   useEffect(() => {
//     if (!keyboardNavigation) return;

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") {
//         paginate(-1);
//       } else if (e.key === "ArrowRight") {
//         paginate(1);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [keyboardNavigation, paginate]);

//   // Touch navigation
//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (!touchNavigation) return;
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!touchNavigation) return;
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchNavigation) return;

//     const swipeThreshold = 50;
//     const diff = touchStart - touchEnd;

//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0) {
//         paginate(1);
//       } else {
//         paginate(-1);
//       }
//     }
//   };

//   return (
//     <div
//       id="image-carousel-container"
//       className={cn(
//         "flex flex-col items-center justify-center overflow-hidden relative",
//         className
//       )}
//       style={{ background }}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Carousel Container */}
//       <div
//         className="w-full max-w-6xl relative"
//         style={{
//           height: cardHeight + 60,
//           perspective: "1000px",
//         }}
//       >
//         {/* Navigation Arrows */}
//         {showArrows && (
//           <>
//             <motion.button
//               onClick={() => paginate(-1)}
//               className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </motion.button>
//             <motion.button
//               onClick={() => paginate(1)}
//               className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </motion.button>
//           </>
//         )}

//         {/* Cards Track */}
//         <div
//           className="w-full h-full flex justify-center items-center relative"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <AnimatePresence initial={false} custom={direction}>
//             {slides.map((slide, index) => {
//               const position = calculatePosition(index);
//               const isCurrent = index === currentIndex;

//               if (position === "hidden" && !isCurrent) return null;

//               return (
//                 <motion.div
//                   key={slide.id}
//                   className={cn(
//                     "absolute bg-white overflow-hidden shadow-2xl cursor-pointer",
//                     cardClassName
//                   )}
//                   style={{
//                     width: cardWidth,
//                     height: cardHeight,
//                     borderRadius: cardRadius,
//                     top: "50%",
//                     left: "50%",
//                     marginLeft: -cardWidth / 2,
//                     marginTop: -cardHeight / 2,
//                   }}
//                   initial={getVariantStyles("hidden")}
//                   animate={getVariantStyles(position)}
//                   exit={getVariantStyles("hidden")}
//                   onClick={() => {
//                     if (!isCurrent) {
//                       const newDirection = index > currentIndex ? 1 : -1;
//                       setDirection(newDirection);
//                       setCurrentIndex(index);
//                     }
//                   }}
//                 >
//                   <img
//                     src={slide.image}
//                     alt={slide.alt || `Slide ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       {showDots && (
//         <div className="flex justify-center gap-3 mt-6">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => {
//                 if (index !== currentIndex) {
//                   const newDirection = index > currentIndex ? 1 : -1;
//                   setDirection(newDirection);
//                   setCurrentIndex(index);
//                 }
//               }}
//               className={cn(
//                 "w-3 h-3 rounded-full transition-all duration-300",
//                 index === currentIndex
//                   ? "scale-125"
//                   : "hover:scale-110"
//               )}
//               style={{
//                 background:
//                   index === currentIndex ? dotColor : `${dotColor}40`,
//               }}
//               whileTap={{ scale: 0.9 }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageCarousel;


//pp/
// "use client";

// import React, { useState, useCallback, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";
// import { cn } from "../lib/utils"; // adjust path if needed

// export interface ImageSlide {
//   id: string;
//   image: string;
//   alt?: string;
// }

// export interface ImageCarouselProps {
//   slides: ImageSlide[];
//   background?: string;
//   cardWidth?: number;
//   cardHeight?: number;
//   cardRadius?: number;
//   showArrows?: boolean;
//   showDots?: boolean;
//   keyboardNavigation?: boolean;
//   touchNavigation?: boolean;
//   animationDuration?: number;
//   autoPlay?: number;
//   pauseOnHover?: boolean;
//   /** how many side cards to show on each side (0,1,2) */
//   visibleCards?: number;
//   sideCardScale?: number;
//   sideCardOpacity?: number;
//   grayscaleEffect?: boolean;
//   className?: string;
//   cardClassName?: string;
//   dotColor?: string;
// }

// export const ImageCarousel: React.FC<ImageCarouselProps> = ({
//   slides,
//   background,
//   cardWidth = 380,
//   cardHeight = 250,
//   cardRadius = 28,
//   showArrows = true,
//   showDots = true,
//   keyboardNavigation = true,
//   touchNavigation = true,
//   animationDuration = 800,
//   autoPlay = 4500,
//   pauseOnHover = true,
//   visibleCards = 1,
//   sideCardScale = 0.9,
//   sideCardOpacity = 0.7,
//   grayscaleEffect = true,
//   className,
//   cardClassName,
//   dotColor = "#38bdf8",
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // 0: idle, 1: next, -1: prev

//   const totalSlides = slides.length;

//   const paginate = useCallback(
//     (newDirection: 1 | -1) => {
//       if (totalSlides === 0) return;
//       setDirection(newDirection);
//       setCurrentIndex((prev) => (prev + newDirection + totalSlides) % totalSlides);
//     },
//     [totalSlides]
//   );

//   // --- positioning logic (center + side cards) ---
//   const calculatePosition = (index: number) => {
//     if (totalSlides === 0) return "hidden";

//     const rawOffset = index - currentIndex;
//     const half = Math.floor(totalSlides / 2);

//     // normalize into [-half, half]
//     let offset = rawOffset;
//     if (rawOffset > half) offset = rawOffset - totalSlides;
//     if (rawOffset < -half) offset = rawOffset + totalSlides;

//     if (offset === 0) return "center";

//     if (offset > 0 && offset <= visibleCards) return `right-${offset}`;
//     if (offset < 0 && -offset <= visibleCards) return `left-${-offset}`;

//     return "hidden";
//   };

//   const getVariantStyles = (position: string): TargetAndTransition => {
//     const transition = {
//       duration: animationDuration / 1000,
//       ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
//     };

//     // small offset so everything stays inside the column
//     const SIDE_OFFSET_FACTOR = 0.18;
//     const sideOffset = cardWidth * SIDE_OFFSET_FACTOR;

//     switch (position) {
//       case "center":
//         return {
//           zIndex: 10,
//           opacity: 1,
//           scale: 1.06,
//           x: 0,
//           filter: "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "right-1":
//         return {
//           zIndex: 5,
//           opacity: sideCardOpacity,
//           scale: sideCardScale,
//           x: sideOffset,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "right-2":
//         return {
//           zIndex: 1,
//           opacity: sideCardOpacity * 0.5,
//           scale: sideCardScale * 0.9,
//           x: sideOffset * 2,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "left-1":
//         return {
//           zIndex: 5,
//           opacity: sideCardOpacity,
//           scale: sideCardScale,
//           x: -sideOffset,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       case "left-2":
//         return {
//           zIndex: 1,
//           opacity: sideCardOpacity * 0.5,
//           scale: sideCardScale * 0.9,
//           x: -sideOffset * 2,
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           pointerEvents: "auto",
//           transition,
//         };
//       default:
//         return {
//           zIndex: 0,
//           opacity: 0,
//           scale: 0.8,
//           x:
//             direction > 0
//               ? cardWidth * (visibleCards + 1)
//               : -cardWidth * (visibleCards + 1),
//           pointerEvents: "none",
//           filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
//           transition,
//         };
//     }
//   };

//   // --- autoplay ---
//   useEffect(() => {
//     if (autoPlay <= 0 || totalSlides <= 1) return;

//     let interval: NodeJS.Timeout;

//     const start = () => {
//       interval = setInterval(() => paginate(1), autoPlay);
//     };

//     start();

//     const container = document.getElementById("image-carousel-container");
//     if (container && pauseOnHover) {
//       const handleEnter = () => clearInterval(interval);
//       const handleLeave = () => start();

//       container.addEventListener("mouseenter", handleEnter);
//       container.addEventListener("mouseleave", handleLeave);

//       return () => {
//         clearInterval(interval);
//         container.removeEventListener("mouseenter", handleEnter);
//         container.removeEventListener("mouseleave", handleLeave);
//       };
//     }

//     return () => clearInterval(interval);
//   }, [autoPlay, paginate, pauseOnHover, totalSlides]);

//   // --- keyboard nav ---
//   useEffect(() => {
//     if (!keyboardNavigation) return;

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") paginate(-1);
//       if (e.key === "ArrowRight") paginate(1);
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [keyboardNavigation, paginate]);

//   // --- touch nav ---
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (!touchNavigation) return;
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!touchNavigation) return;
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchNavigation) return;

//     const swipeThreshold = 50;
//     const diff = touchStart - touchEnd;

//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0) paginate(1);
//       else paginate(-1);
//     }
//   };

//   return (
//     <div
//       id="image-carousel-container"
//       className={cn(
//         "flex flex-col items-center justify-center relative pb-6",
//         className
//       )}
//       style={{ background }}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Track container – stays inside the column */}
//       <div
//         className="relative w-full"
//         style={{
//           height: cardHeight + 60,
//         }}
//       >
//         {/* Arrows */}
//         {showArrows && totalSlides > 1 && (
//           <>
//             <motion.button
//               onClick={() => paginate(-1)}
//               className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-md transition hover:bg-black/80"
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </motion.button>
//             <motion.button
//               onClick={() => paginate(1)}
//               className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-md transition hover:bg-black/80"
//               whileTap={{ scale: 0.9 }}
//             >
//               <ChevronRight className="h-5 w-5" />
//             </motion.button>
//           </>
//         )}

//         {/* Cards track */}
//         <div
//           className="relative flex h-full w-full items-center justify-center"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <AnimatePresence initial={false} custom={direction}>
//             {slides.map((slide, index) => {
//               const position = calculatePosition(index);
//               const isCurrent = index === currentIndex;

//               if (position === "hidden" && !isCurrent) return null;

//               return (
//                 <motion.div
//                   key={slide.id}
//                   className={cn(
//                     "absolute bg-white overflow-hidden shadow-2xl cursor-pointer border border-white/10",
//                     cardClassName
//                   )}
//                   style={{
//                     width: cardWidth,
//                     height: cardHeight,
//                     borderRadius: cardRadius,
//                     top: "50%",
//                     left: "50%",
//                     marginLeft: -cardWidth / 2,
//                     marginTop: -cardHeight / 2,
//                   }}
//                   initial={getVariantStyles("hidden")}
//                   animate={getVariantStyles(position)}
//                   exit={getVariantStyles("hidden")}
//                   onClick={() => {
//                     if (!isCurrent) {
//                       const newDirection: 1 | -1 =
//                         index > currentIndex ? 1 : -1;
//                       paginate(newDirection);
//                     }
//                   }}
//                 >
//                   <img
//                     src={slide.image}
//                     alt={slide.alt || `Slide ${index + 1}`}
//                     className="h-full w-full object-cover"
//                   />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Dots */}
//       {showDots && totalSlides > 1 && (
//         <div className="mt-4 flex justify-center gap-3">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={cn(
//                 "h-2.5 w-2.5 rounded-full transition-transform duration-200",
//                 index === currentIndex ? "scale-125" : "hover:scale-110"
//               )}
//               style={{
//                 background:
//                   index === currentIndex ? dotColor : `${dotColor}33`,
//               }}
//               whileTap={{ scale: 0.9 }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageCarousel;



//pp2//
"use client";

import React, { useState, useCallback, useEffect } from "react";
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
  useEffect(() => {
    if (autoPlay <= 0 || totalSlides <= 1) return;

    let interval: NodeJS.Timeout;

    const start = () => {
      interval = setInterval(() => paginate(1), autoPlay);
    };

    start();

    const container = document.getElementById("image-carousel-container");
    if (container && pauseOnHover) {
      const handleEnter = () => clearInterval(interval);
      const handleLeave = () => start();

      container.addEventListener("mouseenter", handleEnter);
      container.addEventListener("mouseleave", handleLeave);

      return () => {
        clearInterval(interval);
        container.removeEventListener("mouseenter", handleEnter);
        container.removeEventListener("mouseleave", handleLeave);
      };
    }

    return () => clearInterval(interval);
  }, [autoPlay, paginate, pauseOnHover, totalSlides]);

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
              onClick={() => setCurrentIndex(index)}
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
