const lyrics = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

function count_word(text, word) {
    let word_obj = {};
    
    if (typeof word === 'string') {
        let re = new RegExp(word, 'gi');
        word_obj[word] = text.match(re).length;
    }

    else {
        for (i of word) {
            let re = new RegExp(i, 'gi');
            word_obj[i] = text.match(re).length;
        }
    }
    return word_obj;
}

// dirunning
console.log(count_word(lyrics, ['aku', 'ingin', 'dapat']));