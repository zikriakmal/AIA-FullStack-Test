require('dotenv').config()
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);



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
