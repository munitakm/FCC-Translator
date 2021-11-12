const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const t = new Translator();
suite('Unit Tests', () => {
  test('#1 Translate Mangoes are my favorite fruit. to British English', (done) => { 
    let text = 'Mangoes are my favorite fruit';
    assert.equal(t.americanBritish(text), 'Mangoes are my <span class="highlight">favourite</span> fruit');
    done();
    })
  test('#2 Translate I ate yogurt for breakfast. to British English', (done) => { 
    let text = 'I ate yogurt for breakfast';
    assert.equal(t.americanBritish(text), 'I ate <span class="highlight">yoghurt</span> for breakfast');
    done();
    })
  test(`#3 Translate We had a party at my friend's condo. to British English`, (done) => { 
    let text = `We had a party at my friend's condo`;
    assert.equal(t.americanBritish(text), `We had a party at my friend's <span class="highlight">flat</span>`);
    done();
    })
  test(`#4 Translate Can you toss this in the trashcan for me? to British English`, (done) => { 
    let text = `Can you toss this in the trashcan for me?`;
    assert.equal(t.americanBritish(text), `Can you toss this in the <span class="highlight">rubbish</span>can for me?`);
    done();
    })
  test(`#5 Translate The parking lot was full. to British English`, (done) => { 
    let text = `The parking lot was full`;
    assert.equal(t.americanBritish(text), `The <span class="highlight">car park</span> was full`);
    done();
    })
  test(`#6 Translate Like a high tech Rube Goldberg machine. to British English`, (done) => { 
    let text = `Like a high tech Rube Goldberg machine`;
    assert.equal(t.americanBritish(text), `Like a high tech <span class="highlight">Heath Robinson device</span>`);
    done();
    })
  test(`#7 Translate To play hooky means to skip class or work. to British English`, (done) => { 
    let text = `To play hooky means to skip class or work`;
    assert.equal(t.americanBritish(text), `To <span class="highlight">bunk off</span> means to skip class or work`);
    done();
    })
  test(`#8 Translate No Mr. Bond, I expect you to die. to British English`, (done) => { 
    let text = `No Mr. Bond, I expect you to die`;
    assert.equal(t.americanBritish(text), `No <span class="highlight">Mr</span> Bond, I expect you to die`);
    done();
    })
  test(`#9 Translate Dr. Grosh will see you now. to British English`, (done) => { 
    let text = `Dr. Grosh will see you now`;
    assert.equal(t.americanBritish(text), `<span class="highlight">Dr</span> Grosh will see you now`);
    done();
    })
  test(`#10 Translate Lunch is at 12:15 today. to British English`, (done) => { 
    let text = `Lunch is at 12:15 today`;
    assert.equal(t.americanBritish(text), `Lunch is at <span class="highlight">12.15</span> today`);
    done();
  test(`#11 Translate We watched the footie match for a while. to American English`, (done) => { 
    let text = `We watched the footie match for a while`;
    assert.equal(t.britishAmerican(text), `Everything looks good to me`);
    done();
    }) })
  test(`#12 Translate Paracetamol takes up to an hour to work. to American English`, (done) => { 
    let text = `Paracetamol takes up to an hour to work`;
    assert.equal(t.britishAmerican(text), `Everything looks good to me`);
    done();
    })



  });
