import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-java.png"
import Footer from "../components/Footer";

const JavaPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        Java é uma linguagem de programação orientada a objetos e de propósito geral, amplamente utilizada para o desenvolvimento de aplicações que vão desde sistemas corporativos e aplicativos para dispositivos móveis até sistemas embarcados e aplicações em nuvem. Criada pela Sun Microsystems e agora mantida pela Oracle, Java é conhecida por sua portabilidade, robustez e escalabilidade, características que a tornaram uma escolha popular em grandes empresas e entre desenvolvedores.<br />

        <h2>Principais Características de Java:</h2>

        <ul>
          <li><b>Orientação a Objetos:</b> Java é estruturada em torno de conceitos de objetos e classes, o que facilita a modularização, manutenção e reutilização de código. Isso permite desenvolver sistemas complexos com mais eficiência, dividindo funcionalidades em classes e objetos interconectados.</li>

          <li><b>Portabilidade:</b> Com seu slogan "Write Once, Run Anywhere" (Escreva uma vez, execute em qualquer lugar), Java pode ser executada em qualquer plataforma que tenha a Java Virtual Machine (JVM). Isso é possível porque o código Java é compilado em bytecode, um formato intermediário que é interpretado pela JVM em qualquer sistema, seja Windows, Mac, Linux ou Android.</li>

          <li><b>Segurança:</b> Java inclui diversas funcionalidades de segurança integradas. O gerenciamento de memória automático, a verificação de código no tempo de execução e o ambiente de execução isolado (sandbox) oferecem camadas de proteção, especialmente úteis para aplicações web e móveis.</li>

          <li><b>Gerenciamento de Memória:</b> Java possui um coletor de lixo (garbage collector) que lida com a alocação e a liberação de memória automaticamente, ajudando a evitar problemas como vazamento de memória e permitindo que o desenvolvedor se concentre mais na lógica da aplicação.</li>

          <li><b>Multithreading:</b> Java permite a execução simultânea de múltiplas tarefas por meio de threads, que são essencialmente processos leves dentro de um programa. Isso é especialmente útil para criar aplicações responsivas e melhorar o desempenho em sistemas que requerem processamento paralelo.</li>

          <li><b>Ampla Biblioteca e Comunidade:</b> Java possui uma rica biblioteca padrão (Java API) que cobre praticamente todas as funcionalidades comuns de desenvolvimento, como manipulação de arquivos, rede, GUI, e criptografia. Além disso, sua grande comunidade contribui com bibliotecas e frameworks adicionais, como Spring, Hibernate e Apache Kafka, que expandem suas capacidades.</li>
        </ul>

        <h2>Aplicações de Java</h2>
        Java é muito utilizada no desenvolvimento de:
        <ul>
          <li><b>Aplicações Web:</b> Com frameworks como Spring e JavaServer Faces (JSF).</li>
          <li><b>Aplicativos Android:</b> O Android SDK é amplamente baseado em Java.</li>
          <li><b>Sistemas Corporativos:</b> Java é a base de muitos sistemas de backend e servidores de aplicações.</li>
          <li><b>Big Data e Computação em Nuvem:</b> Ferramentas de processamento distribuído como Apache Hadoop e Apache Kafka são desenvolvidas em Java.</li>
        </ul>

        Java é uma linguagem versátil e madura, com um ecossistema robusto que a torna adequada para soluções de larga escala e aplicações que requerem alto desempenho, segurança e confiabilidade. A combinação de simplicidade sintática, bibliotecas extensivas e suporte multiplataforma a mantém entre as linguagens mais populares e essenciais no desenvolvimento de software.

      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        JAVA
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

export default JavaPage