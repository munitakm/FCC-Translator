const aOnly = require('./american-only.js');
const aToBSpelling = require('./american-to-british-spelling.js');
const aToBTitles = require("./american-to-british-titles.js")
const bOnly = require('./british-only.js')

class Translator {

britishAmerican (string) { 
const lString = string.toLowerCase();
const copy = string;
let words = Object.keys(bOnly).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c,'gi');
    string = string.replace(re,`<span class="highlight">${bOnly[c]}</span>`)
  }
  words = Object.values(aToBSpelling).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
  let replace = Object.keys(aToBSpelling).find(key => aToBSpelling[key] === c);
    string = string.replace(re, `<span class="highlight">${replace}</span>`)
  }
  words = Object.values(aToBTitles).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
  let replace = Object.keys(aToBTitles).find(key => aToBTitles[key] === c);
    string = string.replace(re, `<span class="highlight">${this.firstUpperCase(replace)}</span>`);
  }
  let r = /\d{2}.\d{2}/g;
  let hour = string.match(r);
  if(hour) {
  for(let c of hour) { 
   string = string.replace(c, `<span class="highlight">${c.replace('.', ':')}</span>`)
  }
  }

  if(string === this.firstUpperCase(copy)) return 'Everything looks good to me!';
  return this.firstUpperCase(string);
}

americanBritish (string) { 
const lString = string.toLowerCase();
  const copy2 = string;
let words = Object.keys(aOnly).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c,'gi');
    string = string.replace(re, `<span class="highlight">${aOnly[c]}</span>`)
  }
  words = Object.keys(aToBSpelling).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
    string = string.replace(re, `<span class="highlight">${aToBSpelling[c]}</span>`);
  }
  words = Object.keys(aToBTitles).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
    string = string.replace(re, `<span class="highlight">${this.firstUpperCase(aToBTitles[c])}</span>`);
  }
  let r = /\d{2}:\d{2}/g;
  let hour = string.match(r);
  if(hour) {
  for(let c of hour) { 
   string = string.replace(c, `<span class="highlight">${c.replace(':', '.')}</span>`)
  }
  }
  if(string === this.firstUpperCase(copy2)) return 'Everything looks good to me!';
  return this.firstUpperCase(string);
}
firstUpperCase(str) {
  let first = str[0].toUpperCase();

  return str.replace(str[0], first) 
}

}
module.exports = Translator;


