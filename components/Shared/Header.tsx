import React from "react"
import TransformationForm from "./TransformationForm"

interface header {
  title: string
  subtitle?: string
}

const Header = ({ title, subtitle }: header) => {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}

      <TransformationForm/>
    </>
  )
}

export default Header
