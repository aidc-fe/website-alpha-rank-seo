import { cn } from "@/utils/cn";
import styles from "./index.module.css";

export default function TextLoader(props: {
  children: string;
  fontColor?: string;
  className?: string;
}) {
  const { children, className, fontColor = "255 255 255" } = props;

  return (
    <div
      style={{
        "--font-color": fontColor,
        "--w": `${children.length}ch`,
      }}
      data-loading-text={children}
      className={cn(styles.loader, className)}
    />
  );
}
