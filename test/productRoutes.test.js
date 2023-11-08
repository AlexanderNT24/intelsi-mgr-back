const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = express();
const expect = chai.expect;

chai.use(chaiHttp);

// Importa tu módulo de enrutador
const productRoutes = require('../src/routes/product');

app.use('/products', productRoutes);

describe('GET /products', () => {
  it('debería devolver una lista de productos', (done) => {
    chai.request(app)
      .get('/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('debería manejar errores y devolver un estado 500 en caso de error', (done) => {
    // Simula un error en la obtención de productos en la base de datos
    // para probar el manejo de errores
    // (deberías implementar esto en tu módulo de prueba)
    chai.request(app)
      .get('/products')
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
