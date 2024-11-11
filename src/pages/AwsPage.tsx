import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-aws.png"

const AwsPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        A Amazon Web Services (AWS) é uma plataforma de serviços em nuvem oferecida pela Amazon que fornece uma ampla gama de soluções de infraestrutura e software para empresas e desenvolvedores. Desde seu lançamento em 2006, a AWS se tornou líder no mercado de computação em nuvem, conhecida por oferecer uma infraestrutura escalável, flexível e segura para desenvolvimento e hospedagem de aplicações. A AWS permite que organizações de todos os portes implementem rapidamente ambientes de TI sem necessidade de infraestrutura física, além de dar suporte a grandes volumes de dados e processamento em escala global.

        <h2>Principais Serviços da AWS</h2>
        <ul>

          <li><b>Computação:</b></li>
          <ul>
            <li><b>EC2 (Elastic Compute Cloud):</b> Permite criar instâncias de servidores virtuais para executar aplicações, com diversas opções de personalização de desempenho e escalabilidade.</li>
            <li><b>Lambda:</b> Um serviço de computação sem servidor (serverless) que permite executar código em resposta a eventos, sem necessidade de gerenciamento de servidores.</li>
          </ul>

          <li><b>Armazenamento e Banco de Dados:</b></li>
          <ul>
            <li><b>S3 (Simple Storage Service):</b> Um serviço de armazenamento de objetos de alta durabilidade e escalabilidade, usado para armazenar grandes quantidades de dados.</li>
            <li><b>RDS (Relational Database Service):</b> Oferece bancos de dados relacionais gerenciados, como MySQL, PostgreSQL, e Oracle.</li>
            <li><b>DynamoDB:</b> Um banco de dados NoSQL altamente escalável, para cargas de trabalho de baixa latência.</li>
          </ul>

          <li><b>Redes e Conteúdo:</b></li>
          <ul>
            <li><b>VPC (Virtual Private Cloud):</b> Permite criar redes virtuais isoladas para hospedar recursos de forma segura.</li>
            <li><b>CloudFront: </b> Um serviço de distribuição de conteúdo (CDN) que entrega conteúdo aos usuários com baixa latência, usando uma rede de servidores globais.</li>
          </ul>

          <li>IA e Machine Learning:</li>
          <ul>
            <li><b>SageMaker:</b> Uma plataforma para desenvolvimento, treinamento e implantação de modelos de machine learning, com integração de ferramentas e escalabilidade.</li>
            <li><b>Rekognition:</b> Serviço para análise de imagens e vídeos, com reconhecimento facial, identificação de objetos e detecção de texto.</li>
          </ul>

          <li>Ferramentas de Desenvolvimento e Gerenciamento:</li>
          <ul>
            <li><b>CloudFormation:</b> Permite criar e gerenciar recursos da AWS com templates de infraestrutura como código.</li>
            <li><b>CloudWatch:</b> Serviço de monitoramento de desempenho que coleta e visualiza métricas de aplicações e da infraestrutura.</li>
            <li><b>CodePipeline:</b> Ferramenta de integração e entrega contínuas (CI/CD) para automação do ciclo de vida de desenvolvimento.</li>
          </ul>

          <li><b>Segurança e Compliance:</b></li>
          <ul>
            <li><b>IAM (Identity and Access Management):</b> Gerenciamento de permissões e identidade para acessar recursos AWS de forma segura.</li>
            <li><b>AWS Shield:</b> Proteção contra ataques DDoS para aplicativos hospedados na AWS.</li>
          </ul>

        </ul>
        <h2>Vantagens da AWS</h2>
        <ul>
          <li><b>Escalabilidade:</b> A infraestrutura permite ajuste dinâmico de recursos de acordo com a demanda, permitindo que empresas cresçam de forma eficiente.</li>
          <li><b>Segurança:</b> Serviços robustos de segurança e compliance com certificações globais, criptografia e controles de acesso.</li>
          <li><b>Custos Operacionais:</b> Modelo de pagamento conforme o uso (pay-as-you-go), permitindo controle sobre os custos com a eliminação da necessidade de investimentos em infraestrutura física.</li>
          <li><b>Globalização:</b> Presença em várias regiões geográficas e zonas de disponibilidade, proporcionando baixa latência e alta disponibilidade.</li>
          <li><b>Inovação e Variedade:</b> Com centenas de serviços especializados, AWS cobre áreas como big data, IoT, machine learning, armazenamento, redes e desenvolvimento de software.</li>
        </ul>

        Casos de Uso Comuns da AWS
        <ul>
          <li><b>Hospedagem de Sites e Aplicações:</b> Usando EC2, RDS, S3 e CloudFront, desenvolvedores podem hospedar aplicações e sites em uma infraestrutura global.</li>
          <li><b>Análise de Big Data:</b> Serviços como Redshift, EMR e Glue permitem a análise de grandes volumes de dados, agregação e transformação para gerar insights.</li>
          <li><b>Backup e Recuperação:</b> S3 e Glacier oferecem opções econômicas e seguras para armazenamento de dados e backup, com recuperação rápida.</li>
          <li><b>Internet das Coisas (IoT):</b> Serviços como AWS IoT Core fornecem uma plataforma para conectar, gerenciar e processar dados de dispositivos IoT.</li>
          <li><b>DevOps e Integração Contínua:</b> Com ferramentas como CodeCommit, CodeBuild, CodePipeline e CodeDeploy, equipes podem implementar práticas de DevOps e automação de processos de desenvolvimento.</li>
        </ul>

        <h2>Considerações sobre AWS</h2>

        <p>Embora seja extremamente versátil e poderosa, AWS exige uma boa compreensão das configurações e custos envolvidos para evitar gastos desnecessários e garantir que a infraestrutura atenda aos requisitos de desempenho e segurança. Por isso, muitas organizações empregam arquitetos de soluções e profissionais certificados em AWS para otimizar o uso da plataforma de acordo com as necessidades específicas de cada projeto.</p>
        <p>A AWS, portanto, continua a transformar a forma como empresas e desenvolvedores constroem, testam, escalonam e gerenciam aplicações e dados, sendo uma ferramenta essencial na era da computação em nuvem e da transformação digital.</p>
      </Typography>
    )
  }

  const renderTitle = () => {
    return (
      <h1 style={{ color: "#5b5959", display: "flex" }}>
        AWS (Amazon Web Services)
      </h1>
    )
  }

  const renderImage = () => {
    return (
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 50
      }}
      >
        <img
          src={image}
          style={{ width: "12%" }}
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

export default AwsPage