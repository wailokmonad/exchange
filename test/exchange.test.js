let request = require('supertest');

describe('loading express', function () {

  let server;
  
  beforeEach(function () {
    server = require('../index');
  });

  afterEach(function () {
    server.close();
  });

  it('responds to /', function(done) {
    request(server)
    .get('/')
    .expect(200, (err, res)=>{
      if(res.body.success == false) return done()
    });
  });

  it('responds to /?base=xxxxx', function(done) {
    request(server)
    .get('/?base=xxxxx')
    .expect(200, (err, res)=>{
      if(res.body.success == false) return done()
    });
  });

  it('responds to /?base=usd', function(done) {
    request(server)
    .get('/?base=usd')
    .expect(200, (err, res)=>{
      if( res.body.success == true && res.body.data.USD === 1 ) return done()
      return done(res.body.err)
    });
  });

  it('responds to /?base=usd&amount=5', function(done) {
    request(server)
    .get('/?base=usd&amount=5')
    .expect(200, (err, res)=>{
      if(res.body.success == true && res.body.data.USD === 5) return done()
      return done("Amount does not match")
    });
  });

});