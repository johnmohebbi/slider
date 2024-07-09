import { CSSProperties, useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import styles from "./slider.module.css";
import SwiperPagination from "./SwiperPagination";

export const slides = ["slide1", "slide2", "slide3", "slide4"];

function Slider() {
  const [transformStyles, setTransformStyles] = useState<CSSProperties>({
    // transform: `translate3d(0,0,0)`,
  });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlise, setCurrentSlice] = useState<string>("slide1");
  let IsMouseDown = false
  function MouseHandler(event: MouseEvent) {
    // if(event.NONE )
    console.log(event.type)
    let x = event.clientX
    console.log(x)
  }
  useEffect(() => {
    const tId = setInterval(() => {
      // //////////////////////////////
      const slides_length = slides.length;
      let indexCurrentSlide = slides.findIndex((item) => item === currentSlise);
      const child = sliderRef.current?.childNodes;
      // swipering
      if (indexCurrentSlide < slides_length - 1) {
        child?.forEach((item) => {
          if (item instanceof HTMLElement) {
            if (item?.dataset?.slidename === slides[indexCurrentSlide]) {
              const elmWidth = item.offsetWidth;
              setTransformStyles({
                transform: `translate3d(-${
                  elmWidth * (indexCurrentSlide + 1)
                }px,0,0)`,
              });
              setCurrentSlice((preS) => slides[indexCurrentSlide + 1]);
            }
          }
        });
        return;
      } else if (indexCurrentSlide === slides_length - 1) {
        const i = 0;
        child?.forEach((item) => {
          if (item instanceof HTMLElement) {
            if (item?.dataset?.slidename === slides[i]) {
              const elmWidth = item.offsetWidth;
              setTransformStyles({
                transform: `translate3d(0px,0,0)`,
              });
              // setCurrentSlice(() => slides[i]);
              setCurrentSlice(slides[i]);
            }
          }
        });
      }
      // /////////////////////////////
    }, 3500);

    return () => {
      clearInterval(tId);
    };
  }, [currentSlise, transformStyles]);
  return (
    <>
      <div
        className={styles.slider_wrapper}
        ref={sliderRef}
        style={transformStyles}
        onMouseDown={MouseHandler}
        // onMouseMove={MouseHandler}
      >
        {slides.map((item) => {
          return <Slide key={item} name={item} />;
        })}
      </div>
      <SwiperPagination slide={currentSlise} />
    </>
  );
}

export default Slider;
