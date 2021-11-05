'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
     const form = req.body;
      console.log(form)
      if(!form.locale || !form.text) res.json({error: 'Required field(s) missing'}) 
      if(form.text == '') return res.json({error: 'No text to translate'});
      if(form.locale !== 'british-to-american' && 
         form.locale !== 'american-to-british')
        return res.json({error: 'Invalid value for locale field'});
      res.json({translation: form.text})
    });
};
