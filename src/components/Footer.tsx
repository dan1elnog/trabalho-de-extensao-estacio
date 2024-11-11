import React from "react";
import image from "../assets/logo-estacio.png"

const Footer: React.FC = () => {

  const renderImage = () => {
    return (
      <div style={{ top: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <img
          src={image}
          style={{ width: "15%" }}
        />
      </div>

    )
  }

  return (
    <>
      {renderImage()}
    </>
  )
}

export default Footer