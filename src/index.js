const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const chunk2 = (arr, chunk) => {
    let i, j;

    const result = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }

    return result;
};

function decode(expr) {
    const words = expr.split('**********');
    const chunked = words.map(word => {
        return chunk2(word.split(''), 10)
            .map(el => el.join(''))
            .map(el => {
                return el.replace(/11/gi, '-')
                    .replace(/10/gi, '.')
                    .replace(/\d+/gi, '');
            });
    });
    const result = chunked.map(word => {
        return word.filter(Boolean).map(char => {
            return MORSE_TABLE[char];
        }).join('');
    });
    return result.join(' ');
}

module.exports = {
    decode
}