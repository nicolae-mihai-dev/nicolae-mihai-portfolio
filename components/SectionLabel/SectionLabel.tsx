import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  children: ReactNode;
  index?: number;
};

export function SectionLabel({ children, index }: SectionLabelProps) {
  return (
    <p className={styles.label}>
      {index ? <span className={styles.index}>{String(index).padStart(2, "0")}</span> : null}
      <span>{children}</span>
    </p>
  );
}
