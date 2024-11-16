import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-react-native.png"
import Footer from "../components/Footer";

const ReactNativePage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        <p>React Native é uma estrutura (framework) de código aberto desenvolvida pelo Facebook para construir aplicativos móveis nativos utilizando JavaScript e React. Com o React Native, desenvolvedores podem criar apps para iOS e Android usando a mesma base de código, o que reduz significativamente o tempo e o esforço necessários para o desenvolvimento em múltiplas plataformas. A abordagem do React Native combina a flexibilidade do desenvolvimento web com a performance e aparência de aplicativos nativos.</p>

        <h3>Principais Conceitos do React Native</h3>
        <ul>
          <li>
            <b>Componentes Nativos:</b>
            <ul>
              <li>Diferente de frameworks híbridos que renderizam uma interface web dentro de um contêiner, o React Native utiliza componentes nativos específicos de cada plataforma, como botões, listas e inputs.</li>
              <li>Isso resulta em uma experiência de usuário mais rápida e fluida, já que o app se comporta de maneira nativa em cada sistema operacional.</li>
            </ul>
          </li>

          <li>
            <b>Componentes Baseados no React:</b>
            <li>O React Native compartilha a mesma filosofia do React, utilizando componentes reutilizáveis e um fluxo de dados unidirecional para construir interfaces.</li>
            <li>Componentes são escritos em JavaScript/TypeScript utilizando JSX, uma sintaxe que permite misturar HTML-like com lógica JavaScript.
            </li>
          </li>

          <li>
            <b>Bridge (Ponte):</b>
            <ul>
              <li>A arquitetura do React Native inclui um conceito chamado Bridge, que permite a comunicação entre o código JavaScript e os elementos nativos da plataforma.</li>
              <li>A interação entre o código JavaScript e os componentes nativos acontece através dessa ponte, o que torna possível acessar APIs nativas (como câmera, GPS e acelerômetro).</li>
            </ul>
          </li>

          <li>
            <b>Estilos com Flexbox:</b>
            <ul>
              <li>O React Native utiliza um sistema de layout baseado em Flexbox, semelhante ao CSS do web, para criar interfaces responsivas.</li>
              <li>A diferença é que os estilos são aplicados diretamente nos componentes através de objetos JavaScript, não de arquivos CSS.</li>
            </ul>
          </li>
        </ul>

        <h3>Casos de uso com React Native</h3>
        <ul>
          <li><b>Aplicativos Multiplataforma:</b> Startups e empresas de tecnologia que querem lançar apps em múltiplas plataformas de forma rápida, aproveitando uma única base de código.</li>
          <li><b>Prototipagem Rápida:</b> O React Native é ótimo para criar protótipos de alta fidelidade devido à facilidade de uso do JavaScript e ao feedback rápido proporcionado pelo Hot Reload.</li>
          <li><b>Apps de Conteúdo Dinâmico:</b> Aplicativos que atualizam conteúdo de forma dinâmica, como redes sociais, plataformas de e-commerce e notícias, são adequados para o React Native.</li>
          <li><b>Integração com APIs Nativas:</b> Muitos apps que precisam acessar funcionalidades nativas do dispositivo, como câmera, localização ou sensores, podem se beneficiar do React Native.</li>
        </ul>

        <h3>Estrutura de um Projeto React Native</h3>
        <li><b>Componentes:</b> São os blocos de construção do React Native, podendo ser elementos nativos (como {"<Text>"}, {"<View>"}, {"<ScrollView>"}) ou componentes personalizados.</li>
        <li><b>Hooks:</b> Assim como no React, os Hooks são usados para gerenciar estado (useState) e lidar com efeitos colaterais (useEffect).</li>
        <li><b>Navegação:</b> Para criar navegação entre telas, bibliotecas como React Navigation e React Native Navigation são amplamente usadas.</li>
        <li><b>Gerenciamento de Estado:</b> Ferramentas como Redux, MobX ou o próprio contexto do React (useContext) são comumente utilizadas para gerenciar o estado global da aplicação.</li>
        <li><b>Estilos:</b> Estilos são definidos diretamente nos componentes usando objetos JavaScript, com suporte para Flexbox e propriedades específicas para cada plataforma.</li>

        <h3>Conclusão</h3>
        <p>React Native é uma solução poderosa para o desenvolvimento de aplicativos móveis, permitindo a criação de experiências nativas com o benefício de um ciclo de desenvolvimento mais ágil e eficiente. Empresas como Facebook, Instagram, Airbnb e muitas outras adotaram o React Native para criar aplicativos robustos e de alta performance. A sua flexibilidade, a vasta comunidade e o ecossistema em constante crescimento o tornam uma escolha popular entre desenvolvedores e empresas ao redor do mundo.</p>
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1
        style={{ color: "#5b5959", display: "flex" }}
      >
        React Native
      </h1>
    )
  }

  const renderImage = () => {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
        <img
          src={image}
          style={{ width: "17%" }}
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

export default ReactNativePage