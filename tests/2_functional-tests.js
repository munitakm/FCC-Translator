const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Translation with text and locale fields: POST resquest to /api/translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({text: 'Harry Potter the who lived', locale: 'american-to-british'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.translation, 'Everything looks good to me!');
      done();
    })
  })
  test('Translation with text and invalid locale field: POST request to /api.translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({text: 'Draco Malfoy from Slytherin', locale: 'elfic'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'Invalid value for locale field');
      done();
    })
  })
  test('Translation with missing locale field: POST request to /api/translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({text: 'Dumbledore the Great Wizard'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'Required field(s) missing');
      done();
    })
  })
  test('Translation with missing text field: POST request to /api/translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({locale: 'british-to-american'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'Required field(s) missing');
      done();
    })
  }) 
  test('Translation with empty text: POST request to /api/translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({text: '', locale: 'british-to-american'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.error, 'No text to translate');
      done();
    })
  })
  test('Translate with text that needs no translation: POST request to /api/translate', (done) => { 
    chai.request(server)
    .post('/api/translate')
    .send({text: 'Snape: always!', locale: 'american-to-british'})
    .end((err,res) => { 
      assert.equal(res.status, 200);
      assert.equal(res.body.translation, 'Everything looks good to me!');
      done();
    })
  })
});
