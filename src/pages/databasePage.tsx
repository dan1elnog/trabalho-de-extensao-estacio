import { Typography } from "@mui/material";
import React from "react";
import image from "../assets/logo-database.png"
import Footer from "../components/Footer";

const DatabasePage: React.FC = () => {

  const renderContent = () => {
    return (
      <Typography sx={{ marginBottom: 2, color: "#5b5959" }}>
        Um banco de dados é uma coleção organizada de dados que armazena e facilita o acesso, gerenciamento e atualização de informações estruturadas. É uma parte essencial de muitos sistemas de software, permitindo o armazenamento de grandes volumes de dados para rápida recuperação e manipulação. Em aplicações modernas, bancos de dados ajudam a organizar, processar e proteger dados, desde informações de usuários e transações financeiras até registros corporativos e análises de dados em larga escala.

        <h2>Principais Tipos de Bancos de Dados</h2>

        <ul>
          <li><b>Bancos de Dados Relacionais (RDBMS):</b> São organizados em tabelas com linhas e colunas, onde os dados são estruturados e conectados por relações. Utilizam SQL (Structured Query Language) para gerenciar e consultar dados. Exemplos incluem MySQL, PostgreSQL, Oracle e Microsoft SQL Server.</li>
          <li><b>Bancos de Dados NoSQL:</b> Não seguem a estrutura tradicional de tabelas e são adequados para dados não estruturados ou semi-estruturados. Existem várias categorias de NoSQL, incluindo:</li>
          <ul>
            <li><b>Bancos de Dados de Documentos</b> (ex: MongoDB) que armazenam dados em formato JSON ou BSON.</li>
            <li><b>Bancos de Dados de Chave-Valor</b> (ex: Redis) que armazenam dados como pares de chave e valor.</li>
            <li><b>Bancos de Dados de Grafos</b> (ex: Neo4j) que representam dados como nós e arestas, ideais para redes sociais ou interações complexas.</li>
            <li><b>Bancos de Dados de Coluna Ampla</b> (ex: Cassandra), usados para grandes volumes de dados e análises rápidas.</li>
          </ul>
          <li><b>Bancos de Dados em Nuvem:</b> Armazenados e gerenciados em plataformas na nuvem (ex: Amazon RDS, Google BigQuery), oferecendo escalabilidade e alta disponibilidade, com capacidade de backup e recuperação integradas.</li>
          <li><b>Bancos de Dados em Memória:</b> Armazenam dados diretamente na memória RAM para acesso ultrarrápido (ex: Redis e Memcached), usados em sistemas que exigem desempenho muito rápido, como caching.</li>
        </ul>

        <h2>Componentes e Estrutura dos Bancos de Dados</h2>

        <ul>
          <li><b>Tabelas (no RDBMS):</b> Estruturas que organizam dados em colunas e linhas.</li>
          <li><b>Índices:</b> Facilitar a busca e recuperação de dados mais rápida.</li>
          <li><b>Esquema:</b> A estrutura ou layout de um banco de dados, definindo como os dados são organizados e relacionados.</li>
          <li><b>Procedimentos Armazenados e Funções:</b> Blocos de código que podem ser executados no banco de dados para operações repetitivas.</li>
          <li><b>Chaves Primárias e Estrangeiras:</b> Utilizadas em bancos relacionais para conectar tabelas e manter a integridade dos dados.</li>
        </ul>

        <h2>Principais Operações em Bancos de Dados</h2>

        <ul>
          <li><b>CRUD:</b> As operações básicas – Create (criar), Read (ler), Update (atualizar) e Delete (excluir) – são fundamentais para manipulação de dados.</li>
          <li><b>Consultas:</b> Utilizando linguagens de consulta como SQL para recuperar informações específicas.</li>
          <li><b>Transações:</b> Conjuntos de operações executadas como uma unidade, garantindo que os dados permaneçam consistentes.</li>
          <li><b>Controle de Concorrência:</b> Importante para sistemas que suportam vários usuários, assegura que mudanças simultâneas não afetem a integridade dos dados.</li>
          <li><b>Backup e Recuperação:</b> Procedimentos que protegem os dados em caso de falhas.</li>
        </ul>

        <h2>Vantagens e Desvantagens dos Bancos de Dados</h2>
        <ul>
          <li>Vantagens:</li>
          <ul>
            <li>Permitem organização eficiente e recuperação de dados.</li>
            <li>Suporte a grandes volumes de dados e escalabilidade.</li>
            <li>Facilitação de operações de consulta complexa e geração de relatórios.</li>
            <li>Segurança, integridade e suporte a controle de acessos.</li>
          </ul>
          <li>Desvantages:</li>
          <ul>
            <li>Bancos de dados relacionais podem enfrentar limitações com dados não estruturados.</li>
            <li>Requerem manutenção, como backup regular e otimização.</li>
            <li>Podem ter custos altos de implementação e licença (em casos de RDBMS corporativos).</li>
          </ul>
        </ul>

        <h2>Exemplos de Bancos de Dados Populares</h2>

        <ul>
          <li><b>Relacionais:</b> MySQL, PostgreSQL, Oracle, SQL Server.</li>
          <li><b>NoSQL:</b> MongoDB, Cassandra, Neo4j, Couchbase.</li>
          <li><b>Em memória:</b> Redis, Memcached.</li>
          <li><b>Nuvem:</b> Amazon DynamoDB, Google BigQuery, Azure Cosmos DB.</li>
        </ul>

        <h2>Importância dos Bancos de Dados</h2>
        Em um mundo orientado por dados, bancos de dados são fundamentais para qualquer organização que dependa de informações precisas e acessíveis. Eles suportam desde o funcionamento de sistemas de e-commerce e redes sociais até sistemas de análise de grandes volumes de dados, possibilitando decisões estratégicas e operacionais baseadas em dados.
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
      <Footer />
    </>
  )
}

export default DatabasePage