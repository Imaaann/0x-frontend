import { tektur } from "@/Utils/fonts";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

type buttonVarients = "primary" | "secondary" | "outline" | "ghost";
type buttonSizes = "sm" | "md" | "lg" | "xl";
type buttonProps = {
  size: buttonSizes;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const sizeClasses = {
  sm: "text-sm md:text-xl",
  md: "text-md md:text-2xl",
  lg: "text-lg md:text-3xl",
  xl: "text-xl md:text-4xl",
};

const defaultClassName = (size: buttonSizes) =>
  `${sizeClasses[size]} px-4 py-2 rounded-md pointer-events-auto ${tektur.className} text-white`;

function ghostButton({ size, text, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className={`${defaultClassName(size)}`}>
      {text}
    </button>
  );
}

function outlinedButton({ size, text, onClick }: buttonProps) {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      animate={{
        background: ["var(--accent-color)", "rgba(0,0,0,0)", "var(--accent-color)"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileTap={{ scale: 0.8, transition: { duration: 0.3, type: "spring" } }}
      onClick={onClick}
      className={`${defaultClassName(size)} border-2 border-(--accent-color) bg-(--accent-color)`}
    >
      {text}
    </motion.button>
  );
}

function secondaryButton({ size, text, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className={`${defaultClassName(size)} bg-(--secondary-color)`}>
      {text}
    </button>
  );
}

function primaryButton({ size, text, onClick }: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={`${defaultClassName(
        size
      )} bg-(--primary-color) border-2 border-white font-semibold`}
    >
      {text}
    </button>
  );
}

function Button({
  variant,
  size,
  text,
  onClick,
}: {
  variant: buttonVarients;
  size: buttonSizes;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const buttonMapping = {
    primary: primaryButton,
    secondary: secondaryButton,
    outline: outlinedButton,
    ghost: ghostButton,
  };

  const CurrentButton = buttonMapping[variant];

  return <CurrentButton size={size} text={text} onClick={onClick} />;
}

export default Button;
