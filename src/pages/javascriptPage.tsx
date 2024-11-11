import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-javascript.png"
import Footer from "../components/Footer";

const JavaScriptPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a eventos, que permite adicionar interatividade e comportamento dinâmico a páginas web. Originalmente desenvolvida para rodar no navegador, JavaScript é essencial no desenvolvimento web moderno e é uma das três principais tecnologias do front-end, ao lado de HTML e CSS. Com a introdução de ambientes como Node.js, JavaScript também se expandiu para o lado do servidor, permitindo a criação de aplicativos completos (full-stack) com uma única linguagem.

        <h2>Principais Características do JavaScript</h2>

        <ul>
          <li><b>Orientada a Objetos, Funcional e Event-driven:</b> JavaScript é multiparadigma, suportando programação orientada a objetos, funcional e baseada em eventos, o que a torna altamente flexível para diferentes tipos de desenvolvimento.</li>
          <li><b>Dinâmica e Interpretada:</b> Como uma linguagem interpretada, JavaScript é executada linha a linha diretamente pelo navegador, sem necessidade de compilação. Isso facilita testes rápidos e prototipagem.</li>
          <li><b>Executada no Lado do Cliente e do Servidor:</b> No front-end, JavaScript permite manipular o DOM (Document Object Model), criando interatividade em tempo real nas páginas web. Com o Node.js, a linguagem também pode ser usada no back-end, permitindo que desenvolvedores construam aplicações completas.</li>
          <li><b>Orientada a Eventos:</b> JavaScript lida bem com eventos do usuário (como cliques e toques), permitindo a criação de interfaces de usuário dinâmicas e interativas.</li>
          <li><b>Ambiente Multiplataforma:</b>JavaScript pode ser executada em praticamente qualquer dispositivo com um navegador, e também é suportada em vários ambientes do lado do servidor.</li>
        </ul>

        <h2>Exemplos de Aplicações com JavaScript</h2>

        <ul>
          <li><b>Interatividade no Front-end:</b> JavaScript é usado para criar animações, menus dinâmicos, sliders de imagens, validação de formulários e muito mais, melhorando a experiência do usuário nas páginas web.</li>
          <li><b>Desenvolvimento de SPAs (Single Page Applications):</b> Com frameworks como React, Angular e Vue.js, JavaScript permite a criação de aplicações de página única que se comportam como aplicativos desktop, sem recarregar a página.</li>
          <li><b>APIs e Servidores com Node.js:</b> No back-end, JavaScript permite a criação de APIs RESTful e servidores com Node.js, integrando facilmente front-end e back-end.</li>
          <li><b>Aplicativos Móveis e Desktop:</b> Com frameworks como React Native e Electron, JavaScript também é usado para desenvolver aplicativos móveis e de desktop multiplataforma.</li>
          <li><b>Jogos e Gráficos 3D:</b> JavaScript pode ser usado para criar jogos simples e até gráficos 3D com bibliotecas como Three.js, que permitem renderizar gráficos no navegador.</li>
        </ul>

        <h2>Vantagens e Desvantagens</h2>

        <ul>
          <li><b>Vantagens:</b> JavaScript é fácil de aprender e amplamente suportada por navegadores, o que a torna essencial no desenvolvimento web. Sua flexibilidade e o grande ecossistema de bibliotecas e frameworks facilitam o desenvolvimento rápido.</li>
          <li><b>Desvantagens:</b> Como é interpretada pelo navegador, JavaScript pode apresentar problemas de desempenho em tarefas muito intensas. Além disso, a falta de tipagem forte pode causar erros difíceis de rastrear.</li>

          <h2>Popularidade e Futuro</h2>

          JavaScript é uma das linguagens mais populares do mundo devido à sua onipresença na web. Com o crescente ecossistema de bibliotecas e frameworks, a demanda por JavaScript deve continuar, especialmente para desenvolvimento web e mobile, e com tendências para se expandir ainda mais em novas áreas.
        </ul>
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        JavaScript
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
      <Footer />
    </>
  )
}

export default JavaScriptPage