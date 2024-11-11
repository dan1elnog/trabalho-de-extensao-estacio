import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-php.png"
import Footer from "../components/Footer";

const PhpPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        PHP (Hypertext Preprocessor) é uma linguagem de programação de código aberto, especialmente utilizada para o desenvolvimento de aplicações web e a geração dinâmica de conteúdo. Criada em 1994 por Rasmus Lerdorf, o PHP é executado no servidor e, por isso, é chamada de linguagem de script do lado do servidor. Sua popularidade vem principalmente da facilidade de uso, da flexibilidade, e da integração direta com HTML e bancos de dados.

        <h2>Principais Características do PHP</h2>

        <ul>
          <li><b>Execução no Lado do Servidor:</b> Diferente de JavaScript, que é executado no navegador do usuário, o PHP é processado no servidor, o que permite que o código gere conteúdo HTML antes de ser enviado ao navegador.</li>
          <li><b>Integração com HTML:</b> PHP pode ser facilmente incorporado ao HTML, permitindo a criação de páginas dinâmicas de maneira direta. Isso significa que os desenvolvedores podem alternar entre PHP e HTML no mesmo arquivo, facilitando o desenvolvimento de conteúdo dinâmico.</li>
          <li><b>Interação com Bancos de Dados:</b> PHP suporta integração com uma grande variedade de bancos de dados, como MySQL, PostgreSQL, SQLite, Oracle, entre outros, sendo muito utilizado para construir sites que necessitam de armazenamento e recuperação de dados.</li>
          <li><b>Bibliotecas e Extensões:</b> A linguagem possui uma ampla gama de bibliotecas e extensões que ampliam suas funcionalidades, desde manipulação de imagens até integração com redes sociais e ferramentas de e-commerce.</li>
          <li><b>Comunidade e Suporte:</b> PHP conta com uma comunidade global ativa que contribui para o desenvolvimento de frameworks populares como Laravel, Symfony e CodeIgniter, facilitando o desenvolvimento rápido e eficiente de aplicações robustas.</li>
          <li><b>Ampla Compatibilidade com Servidores e Sistemas Operacionais:</b> PHP é compatível com a maioria dos servidores web (Apache, Nginx, Microsoft IIS) e pode ser executado em diferentes sistemas operacionais, incluindo Linux, Windows e macOS.</li>
        </ul>

        <h2>Aplicações de PHP</h2>
        PHP é amplamente utilizado no desenvolvimento de:

        <ul>
          <li><b>Sistemas de Gerenciamento de Conteúdo (CMS):</b> WordPress, Joomla e Drupal, que permitem a criação de sites dinâmicos, são escritos em PHP.</li>
          <li><b>Lojas Virtuais:</b> Muitas plataformas de e-commerce, como Magento e WooCommerce, são baseadas em PHP.</li>
          <li><b>Sistemas de Gerenciamento de Dados:</b> Aplicações de banco de dados que exigem interação complexa, consultas e armazenamento de dados.</li>
          <li><b>APIs e Backends:</b> Graças a frameworks como Laravel e Slim, PHP é usado para desenvolver APIs e servidores para aplicações mobile e web.</li>
        </ul>

        PHP continua sendo uma escolha sólida para o desenvolvimento web devido à sua simplicidade, flexibilidade e grande base de recursos. É uma linguagem de rápida implementação, o que torna o PHP popular para startups e para projetos de pequena e média escala, além de ser usado em projetos de alta escala com arquiteturas complexas e eficientes.
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        PHP
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

export default PhpPage