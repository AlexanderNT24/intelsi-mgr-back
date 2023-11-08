
const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = express();
const expect = chai.expect;

chai.use(chaiHttp);

// Importa tu módulo de enrutador
const projectRoutes = require('../src/routes/project');

app.use('/projects', projectRoutes);

describe('GET /projects', () => {
  it('debería devolver una lista de proyectos', (done) => {
    chai.request(app)
      .get('/projects')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('debería manejar errores y devolver un estado 500 en caso de error', (done) => {
    // Simula un error en la obtención de proyectos en la base de datos
    // para probar el manejo de errores
    // (deberías implementar esto en tu módulo de prueba)
    chai.request(app)
      .get('/projects')
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
