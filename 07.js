var nid = require('nid');

class Str {
    constructor() {
      this.name = 'This is string class DIY :D';
    }
  
    lower(param) {
        return param.toLowerCase();
    }

    upper(param) {
        return param.toUpperCase();
    }

    capitalize(param) {
        return param.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
    }

    reverse(param) {
        return param.split('').reverse().join('');
    }

    contains(sentence, word) {
        var words = sentence.split(' ');
        word = [].concat([], word)
        return words.includes(...word)
    }

    random(number = 16) {
        return nid(number)
    }

    // Str.slug('Kotlin & Swift semakin populer di 2018?') // kotlin-swift-semakin-populer-di-2018
    slug(param) {
        return param.replace(/[^A-Za-z0-9 ]/g, '')
                    .split(/\s+/)
                    .join('-')
                    .toLowerCase()
    }

};

// Contoh tes

var string = new Str();
console.log(string.lower('HALOOO'))
console.log(string.upper('halooo'))
console.log(string.capitalize('SELAMAT siang kAWAnKU'))
console.log(string.reverse('Ini stringnya dibalik'))
console.log(string.contains('Apakah aku dan kamu ada di dalam sini', ['aku', 'kamu']))
console.log(string.random(3))
console.log(string.random())
console.log(string.slug('Kotlin & Swift semakin populer di 2018?'))
