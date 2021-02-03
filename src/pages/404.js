import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major">
          <h2>
            Error 404 - Página no encontrada
            <br />
            La URL ingresada no es valida
          </h2>
          <a href="/">Haz clic para volver</a>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
