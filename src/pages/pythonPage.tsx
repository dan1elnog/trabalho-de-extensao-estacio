import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-python.png"

const PythonPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe simples e fácil de ler, que permite que desenvolvedores criem código de forma eficiente e intuitiva. Criada por Guido van Rossum no final dos anos 1980, Python é uma linguagem interpretada e multiparadigma, suportando a programação orientada a objetos, funcional e estruturada. A flexibilidade e a vasta coleção de bibliotecas e frameworks fizeram de Python uma das linguagens mais populares para aplicações em ciência de dados, desenvolvimento web, automação, inteligência artificial e muito mais.

        <h2>Principais Características do Python</h2>

        <ul>
          <li><b>Sintaxe Simples e Clara:</b> Python foi projetado para ser legível, com uma sintaxe que se aproxima da linguagem natural. Isso torna Python uma linguagem ideal tanto para iniciantes quanto para programadores experientes que buscam produtividade.</li>
          <li><b>Interpretada e Interativa:</b> Python é interpretada, o que significa que o código é executado linha por linha, sem a necessidade de compilação prévia. Seu ambiente interativo permite testar pequenos trechos de código rapidamente.</li>
          <li><b>Ampla Biblioteca Padrão:</b> A biblioteca padrão do Python oferece módulos para uma variedade de tarefas, como manipulação de arquivos, operações matemáticas, desenvolvimento de redes, manipulação de dados, entre outros, sem a necessidade de instalar pacotes adicionais.</li>
          <li><b>Multiplataforma:</b> Python é compatível com diversos sistemas operacionais, como Windows, macOS e Linux, permitindo que o mesmo código seja executado em diferentes ambientes com pouca ou nenhuma modificação.</li>
          <li><b>Comunidade Ativa e Recursos Abundantes:</b> Python possui uma comunidade global ativa, que contribui para o desenvolvimento de uma ampla gama de bibliotecas, ferramentas e frameworks que expandem sua aplicabilidade, além de garantir suporte contínuo e recursos de aprendizado acessíveis.</li>
        </ul>

        <h2>Exemplos de Aplicações do Python</h2>

        <ul>
          <li><b>Ciência de Dados e Análise de Dados:</b> Com bibliotecas como Pandas, NumPy e Matplotlib, Python é amplamente utilizado para análise e visualização de dados, assim como para machine learning, com frameworks como TensorFlow e PyTorch.</li>
          <li><b>Desenvolvimento Web:</b> Frameworks como Django e Flask permitem que desenvolvedores criem sites e APIs rapidamente, com segurança e escalabilidade.</li>
          <li><b>Automação e Scripting:</b> Python é frequentemente usado para tarefas de automação, como coleta de dados em sites, automação de testes, gerenciamento de sistemas, e outras tarefas repetitivas.</li>
          <li><b>Inteligência Artificial e Machine Learning:</b> Python é a linguagem preferida em IA devido à sua facilidade de uso e à disponibilidade de bibliotecas de aprendizado de máquina e inteligência artificial.</li>
          <li><b>Desenvolvimento de Software e Prototipagem:</b> A simplicidade e flexibilidade do Python permitem criar protótipos de software rapidamente, facilitando o desenvolvimento ágil.</li>
        </ul>

        <h2>Vantagens e Desvantagens</h2>

        <ul>
          <li><b>Vantagens:</b> A facilidade de aprendizado, a vasta biblioteca padrão e o suporte a múltiplos paradigmas fazem de Python uma linguagem acessível e poderosa. Sua sintaxe ajuda a reduzir o tempo de desenvolvimento e a minimizar erros.</li>
          <li><b>Desvantagens:</b> Python é interpretado, o que pode torná-lo mais lento em comparação com linguagens compiladas como C++ ou Java. Também não é ideal para desenvolvimento mobile ou aplicações que demandem alto desempenho gráfico.</li>
        </ul>

        <h2>Popularidade e Futuro</h2>

        Python é amplamente adotado e é uma das linguagens mais recomendadas para iniciantes. Seu uso crescente em áreas como ciência de dados, IA e automação sugere que a linguagem continuará a ser influente e relevante por muitos anos.
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        Python
      </h1>
    )
  }

  const renderImage = () => {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <img
          src={image}
          style={{ width: "11%" }}
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

export default PythonPage