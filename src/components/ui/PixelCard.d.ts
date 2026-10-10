import type { ReactNode } from "react";

export interface PixelCardProps {
  variant?: "default" | "blue" | "yellow" | "pink";
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

declare function PixelCard(props: PixelCardProps): JSX.Element;

export default PixelCard;