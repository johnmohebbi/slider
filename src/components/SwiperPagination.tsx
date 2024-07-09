import styles from "./SwiperPagination.module.css";
import { slides } from "./Slider";

function SwiperPagination({ slide }: { slide: string }) {
  return (
    <div className={styles.swiper_Container}>
      <div className={styles.dots}>
        {slides.map((value) => {
          if (value === slide) {
            return <span className={`${styles.dot} ${styles.active_slide}`} key={value}></span>;
          }
          return <span className={`${styles.dot}`} key={value}></span>;
        })}
      </div>
    </div>
  );
}

export default SwiperPagination;
