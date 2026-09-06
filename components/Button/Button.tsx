import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "warm" | "secondary" | "plain";
type ButtonSize = "small" | "medium";

type SharedProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsLink = SharedProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  rel?: string;
  target?: string;
};

type ButtonAsButton = SharedProps &
  Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "name" | "onClick" | "type" | "value"
  > & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { className, size = "medium", variant = "primary" } = props;

  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const { ariaLabel, children, href, onClick, rel, target } = props;

    return (
      <a
        aria-label={ariaLabel}
        className={classNames}
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    );
  }

  const { ariaLabel, children, disabled, name, onClick, type, value } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={classNames}
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type ?? "button"}
      value={value}
    >
      {children}
    </button>
  );
}
