import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-css.png"
import Footer from "../components/Footer";

const CssPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        CSS, ou Cascading Style Sheets, é a linguagem usada para estilizar o conteúdo de páginas web. Ele permite que desenvolvedores controlem o layout visual, as cores, o espaçamento, as fontes, e até animações de uma página, separando o conteúdo estruturado em HTML de sua apresentação visual.<br />
        Em CSS, os estilos são definidos por meio de seletores e propriedades:
        <ul>
          <li><b>Seletores</b> identificam quais elementos HTML serão estilizados, como <code>p</code> para parágrafos, <code>.classe</code> para elementos com uma classe específica, e <code>#id</code> para elementos com um ID único.</li>
          <li><b>Propriedades</b> especificam quais aspectos do estilo serão alterados, como <code>color</code> (para cores de texto), <code>font-size</code> (para o tamanho da fonte), <code>margin</code> (para espaçamento externo), <code>padding</code> (para espaçamento interno), <code>display</code> (para definição de layout), e muitos outros.</li>
        </ul><br />

        Por exemplo:
        <code>
          {" h1 {color: blue; font-size: 24px; text-align: center;}"}
        </code><br />

        Neste caso, todos os elementos {"<h1>"} na página serão estilizados com texto azul, tamanho de 24 pixels, e centralizados.

        CSS também é "cascading", o que significa que os estilos aplicados a um elemento podem ser herdados ou sobrescritos por estilos mais específicos. A ordem de aplicação dos estilos é determinada pela especificidade dos seletores, pela ordem dos estilos no arquivo e pelo uso de regras como <code>!important</code> que forçam a aplicação de uma propriedade.<br /><br />

        Além disso, CSS suporta media queries para criar páginas responsivas que se adaptam a diferentes dispositivos e tamanhos de tela. A declaração <code>@media</code> permite definir estilos que serão aplicados apenas em certas condições, como:<br />

        <code>
          {"@media (max-width: 768px) {body {font-size: 14px;}}"}
        </code><br /><br />

        Aqui, o tamanho da fonte será ajustado em telas com largura menor ou igual a 768 pixels, melhorando a legibilidade em dispositivos móveis.<br />

        CSS é fundamental para a criação de interfaces atraentes e intuitivas e, em conjunto com HTML e JavaScript, forma a base da experiência do usuário na web.

      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        CSS
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
      <Footer />
    </>
  )
}

export default CssPage