import styles from "./slide.module.css";
// type
type propsType = { name: string; };

function Slide({ name }: propsType) {
  return (
    <>
      <div className={styles[name]} data-slidename={name}></div>
    </>
  );
}

export default Slide;
