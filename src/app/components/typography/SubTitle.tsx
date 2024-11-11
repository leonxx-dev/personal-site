import { robotoCondense } from "../fonts"

export default function SubTitle({ children }) {
  return (
    <h2 className={`text-2xl uppercase tracking-widest ${robotoCondense.className}`}>{ children }</h2>
  )
}