import styles from "./PinImage.module.css";

interface PinImageProps {
  size: "small" | "medium" | "large";
}

function PinImage({ size }: PinImageProps) {
  return (
    <section className={`${styles.pinContainer} ${styles[size]}`}></section>
  );
}

export default PinImage;
