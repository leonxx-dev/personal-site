import { robotoCondense } from "../fonts"

export default function Text({ children }) {
  return (
    <p className={`text-base ${robotoCondense.className}`}>{ children }</p>
  )
}