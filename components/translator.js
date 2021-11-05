const aOnly = require('./american-only.js');
const aToBSpelling = require('./american-to-british-spelling.js');
const aToBTitles = require("./american-to-british-titles.js")
const bOnly = require('./british-only.js')

class Translator {

britishAmerican (string) { 
const lString = string.toLowerCase();
let words = Object.keys(bOnly).filter(i => lString.includes(i))
  for(let c of words) { 
  var r = c;
  var re = new RegExp(r,'gi');
    string = string.replace(re, bOnly[c])
  }
  return string;
}

}

module.exports = Translator;
