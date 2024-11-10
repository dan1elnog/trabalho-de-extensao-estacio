import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-html.png"

const HtmlPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        HTML, ou HyperText Markup Language, é a linguagem de marcação padrão para a criação de páginas da web. Desenvolvido inicialmente para compartilhar documentos em rede, o HTML evoluiu para se tornar a fundação de qualquer conteúdo na web, definindo a estrutura e a organização de páginas e aplicativos.<br />

        Em HTML, o conteúdo é organizado por uma série de elementos, que são delimitados por "tags" como
        <code> {"<p>"}</code>, <code>{"<h1>"}</code>, <code>{"<div>"}</code> e <code>{"<img>"}</code>. Cada uma dessas tags tem um propósito específico: <br />

        <ul>
          <li>Elementos de texto como <code>{"<p>"}</code>(parágrafos) e <code>{"<h1>"}</code> (títulos) estruturam o conteúdo textual.</li>
          <li>Links {"<a>"} conectam páginas e recursos, permitindo navegação e interação.</li>
          <li>Imagens {"<img>"} e multimídia possibilitam a inserção de gráficos e conteúdo audiovisual.</li>
          <li>Divisões e seções (div, section, etc.) organizam áreas e blocos de conteúdo.</li>
        </ul>


        O HTML funciona com um sistema de marcação hierárquica. A estrutura básica de uma página HTML é composta de uma declaração <code>{"<!DOCTYPE html>"}</code>, seguida pelo elemento <code>{"<html>"}</code>, dentro do qual encontramos o <code>{"<head>"}</code> (para metadados, links de estilo, scripts) e o <code>{"<body>"}</code>, onde o conteúdo principal da página reside. Cada elemento HTML pode ainda conter atributos que fornecem informações adicionais, como class, id, href (para links) e src (para imagens), usados para adicionar estilo, funcionalidade, ou acessibilidade.<br />

        Juntamente com CSS (para o estilo visual) e JavaScript (para interatividade), o HTML forma a tríade central do desenvolvimento web. Ele fornece uma estrutura semântica que, além de exibir conteúdo, permite que sistemas de busca, navegadores e leitores de tela compreendam o propósito e a importância relativa de cada parte da página, promovendo um desenvolvimento mais acessível e flexível.
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        HTML
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

export default HtmlPage