"use client";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ActionButton({ children, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest} className={"p-4 rounded bg-orange-600 uppercase tracking-widest hover:bg-orange-700 font-medium"}>{ children }</button>
  );
}