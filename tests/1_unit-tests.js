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
    assert.equal(t.americanBritish(text), `We had a party at my friend's<span class="highlight"> flat</span>`);
    done();
    })
  test(`#4 Translate Can you toss this in the trashcan for me? to British English`, (done) => { 
    let text = `Can you toss this in the trashcan for me?`;
    assert.equal(t.americanBritish(text), `Can you toss this in the<span class="highlight"> bin </span>for me?`);
    done();
    })
  test(`#5 Translate The parking lot was full. to British English`, (done) => { 
    let text = `The parking lot was full`;
    assert.equal(t.americanBritish(text), `The<span class="highlight"> car park </span>was full`);
    done();
    })
  test(`#6 Translate Like a high tech Rube Goldberg machine. to British English`, (done) => { 
    let text = `Like a high tech Rube Goldberg machine`;
    assert.equal(t.americanBritish(text), `Like a high tech<span class="highlight"> Heath Robinson device</span>`);
    done();
    })
  test(`#7 Translate To play hooky means to skip class or work. to British English`, (done) => { 
    let text = `To play hooky means to skip class or work`;
    assert.equal(t.americanBritish(text), `To<span class="highlight"> bunk off </span>means to skip class or work`);
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
   })
  test(`#11 Translate We watched the footie match for a while. to American English`, (done) => { 
    let text = `We watched the footie match for a while`;
    assert.equal(t.britishAmerican(text), `We watched the<span class="highlight"> soccer </span>match for a while`);
    done();
    }) 
  test(`#12 Translate Paracetamol takes up to an hour to work. to American English`, (done) => { 
    let text = `Paracetamol takes up to an hour to work`;
    assert.equal(t.britishAmerican(text), `Everything looks good to me!`);
    done();
    })
  test(`#13 Translate First, caramelise the onions. to American English`, (done) => { 
    let text = `First, caramelise the onions`;
    assert.equal(t.britishAmerican(text), `First, <span class="highlight">caramelize</span> the onions`);
    done();
    })
  test(`#14 Translate I spent the bank holiday at the funfair. to American English`, (done) => { 
    let text = `I spent the bank holiday at the funfair`;
    assert.equal(t.britishAmerican(text), `I spent the<span class="highlight"> public holiday </span>at the<span class="highlight"> carnival</span>`);
    done();
    })
  test(`#15 Translate I had a bicky then went to the chippy. to American English`, (done) => { 
    let text = `I had a bicky then went to the chippy`;
    assert.equal(t.britishAmerican(text), `I had a<span class="highlight"> cookie </span>then went to the<span class="highlight"> fish-and-chip shop</span>`);
    done();
    })
  test(`#16 Translate I've just got bits and bobs in my bum bag. to American English`, (done) => { 
    let text = `I've just got bits and bobs in my bum bag`;
    assert.equal(t.britishAmerican(text), `I've just got<span class="highlight"> odds and ends </span>in my<span class="highlight"> fanny pack</span>`);
    done();
    })
  test(`#17 Translate The car boot sale at Boxted Airfield was called off. to American English`, (done) => { 
    let text = `The car boot sale at Boxted Airfield was called off`;
    assert.equal(t.britishAmerican(text), `The<span class="highlight"> swap meet </span>at Boxted Airfield was called off`);
    done();
    })
  test(`#18 Translate Have you met Mrs Kalyani?. to American English`, (done) => { 
    let text = `Have you met Mrs Kalyani?`;
    assert.equal(t.britishAmerican(text), `Have you met <span class="highlight">Mr.</span>s Kalyani?`);
    done();
    })
  test(`#19 Translate Prof Joyner of King's College, London. to American English`, (done) => { 
    let text = `Prof Joyner of King's College, London`;
    assert.equal(t.britishAmerican(text), `<span class="highlight">Prof.</span> Joyner of King's College, London`);
    done();
    })
  test(`#20 Tea time is usually around 4 or 4.30. to American English`, (done) => { 
    let text = `Tea time is usually around 4 or 4.30`;
    assert.equal(t.britishAmerican(text), `Everything looks good to me!`);
    done();
    })
  test(`#21 Highlight translation in Mangoes are my favorite fruit.`, (done) => { 
    let text = `Mangoes are my favorite fruit`;
    assert.equal(t.americanBritish(text), `Mangoes are my <span class="highlight">favourite</span> fruit`);
    done();
    })
  test(`#22 Highlight translation in I ate yogurt for breakfast.`, (done) => { 
    let text = `I ate yogurt for breakfast`;
    assert.equal(t.americanBritish(text), `I ate <span class="highlight">yoghurt</span> for breakfast`);
    done();
    })
  test(`#23 Highlight translation in We watched the footie match for a while.`, (done) => { 
    let text = `We watched the footie match for a while`;
    assert.equal(t.britishAmerican(text), `We watched the<span class="highlight"> soccer </span>match for a while`);
    done();
    })
  test(`#24 Highlight translation in Paracetamol takes up to an hour to work.`, (done) => { 
    let text = `Paracetamol takes up to an hour to work`;
    assert.equal(t.britishAmerican(text), `Everything looks good to me!`);
    done();
    })
});
