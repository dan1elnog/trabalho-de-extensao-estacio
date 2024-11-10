import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-database.png"

const DatabasePage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>

      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1 style={{ color: "#5b5959", display: "flex" }}>
        Banco de dados
      </h1>
    )
  }

  const renderImage = () => {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <img
          src={image}
          style={{ width: "15%" }}
        />
      </div>

    )
  }

  return (
    <>
      {renderTitle()}
      {renderImage()}
      {renderContent()}
    </>
  )
}

export default DatabasePage