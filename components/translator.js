const aOnly = require('./american-only.js');
const aToBSpelling = require('./american-to-british-spelling.js');
const aToBTitles = require("./american-to-british-titles.js")
const bOnly = require('./british-only.js')

class Translator {

britishAmerican (string) { 
const lString = string.toLowerCase();
let words = Object.keys(bOnly).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c,'gi');
    string = string.replace(re, bOnly[c])
  }
  words = Object.values(aToBSpelling).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
  let replace = Object.keys(aToBSpelling).find(key => aToBSpelling[key] === c);
    string = string.replace(re, replace)
  }
  words = Object.values(aToBTitles).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
  let replace = Object.keys(aToBTitles).find(key => aToBTitles[key] === c);
    string = string.replace(re, this.firstUpperCase(replace));
  }
  return string;
}

americanBritish (string) { 
const lString = string.toLowerCase();
let words = Object.keys(aOnly).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c,'gi');
    string = string.replace(re, aOnly[c])
  }
  words = Object.keys(aToBSpelling).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
    string = string.replace(re, aToBSpelling[c]);
  }
  words = Object.keys(aToBTitles).filter(i => lString.includes(i));
  for(let c of words) { 
  let re = new RegExp(c, 'gi');
    string = string.replace(re, this.firstUpperCase(aToBTitles[c]));
  }
  return string;
}
firstUpperCase(str) {
  let first = str[0].toUpperCase();

  return str.replace(str[0], first) 
}

}
module.exports = Translator;


