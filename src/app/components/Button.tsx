"use client"

import { robotoCondense } from "../fonts";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`p-4 rounded bg-green-700 uppercase tracking-widest hover:bg-green-800 ${robotoCondense.className}`}>{ children }</button>
  );
}