import { Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        O seguinte projeto foi desenvolvido com o objetivo de servir como um pequeno guia resumido para os iniciantes na área de programação e desenvolvimento de software.
        Foi construído de maneira simples para facilitar a usabilidade de todos os usuários que vierem à acessa-lo. Desenvolvido em TypeScript com o auxílo da bibliotca React e Material Ui onde os principais componetes podem ser encontrados.


        <h3>
          <a href="https://github.com/dan1elnog/trabalho-de-extensao-estacio" target="_blank">Github do projeto</a>
        </h3>
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1 style={{ color: "#5b5959", display: "flex" }}>
        Home
      </h1>
    )
  }


  return (
    <>
      {renderTitle()}
      {renderContent()}
    </>
  )
}

export default HomePage