require('dotenv').config()
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET Root', () =>
{
    it('it should GET root of api', (done) =>
    {
        chai.request(server)
            .get('/')
            .end((err, res) =>
            {
                res.should.have.status(200);
                res.text.should.be.equal(`<h1>API ${process.env.APP_NAME}</h1>`);
                done();
            });
    });
});


describe('/GET Public feeds', () =>
{
    it('it should GET all public feeds', (done) =>
    {
        chai.request(server)
            .get('/api/v1/public-feeds')
            .end((err, res) =>
            {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.eql(20);
                done();
            });
    });
});
