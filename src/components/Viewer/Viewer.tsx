import { PropsWithChildren } from "react";
import styles from "./Viewer.module.css";

const Viewer = ({ children }: PropsWithChildren) => {
  return <div className={`${styles.viewerContainer}`}>{children}</div>;
};

export default Viewer;
