var request = require('supertest');
var policy = require('../model/object/policy');

describe('loading express', function () {
  var server;
  //---------------------------------------------------------------------
  beforeEach(function () {
    server = require('../bin/www');
    server.start();
  });
  //---------------------------------------------------------------------
  afterEach(function () {
    server.close();
  });
  //---------------------------------------------------------------------
  it('/', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  //---------------------------------------------------------------------
  it('/dashboard', function testPath(done) {
    request(server)
      .get('/dashboard')
      .expect(200, done);
  });
  //---------------------------------------------------------------------
  it('post policy/', function testPath(done) {
    request(server)
      .post('/policy', policy)      
      .expect(200, done);
  });
});