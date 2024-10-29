import React from 'react';
import ContactosIcon from './ContactosIcon.png';  // Certifique-se de importar corretamente o ícone

function Home() {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>BRIDGE SALUTIS</h1>
      <h1>Entre barreiras e soluções, nós somos a ponte</h1>
      <a href="#contato" className="cta-button">
        Contacte-nos
        <img src={ContactosIcon} alt="Logo da Contactos" style={{ width: '25px', height: '15px', marginLeft: '10px', verticalAlign: 'middle' }} />
      </a>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="service">
        <h2>Consultoria em Inovação e Desenvolvimento Tecnológico</h2>
        <p>Oferecemos soluções e ferramentas inovadoras através da construção de websites, apps</p>
      </div>
      <div className="service">
        <h2>Consultoria Tecno-Financeira</h2>
        <p>Apoiamos a gestão financeira e operacional eficientes, com recurso a FinOps e captação de financiamento e investidores</p>
      </div>
      <div className="service">
        <h2>Suporte Especializado a StartUps, Pequenas Empresas e Empreendedores</h2>
        <p>Ajudamos empresas e pequenos negócios na área da Saúde a atrair investidores e a estabelecerem-se no mercado</p>
      </div>
      <div className="service">
        <h2>Oportunidades para Investidores</h2>
        <p>Interligamos investidores a pequenas empresas, Startups promissoras na área da Saúde para criarem oportunidades de crescimento e expansão</p>
      </div>
    </section>
  );
}

export default Home;
