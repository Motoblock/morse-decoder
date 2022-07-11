const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let mas_words = expr.split('**********');
  let letter = [];
  let sent = '';
  let strok = '';
  for(let word of mas_words){
    letter = word.match(/.{1,10}/g);
    let onlyletter;
    if(strok !== '') strok += ' ';
    for(let oneLetter of letter){

      onlyletter = oneLetter.replace(/^0+/, '');
      letterTwoLetter = onlyletter.match(/.{1,2}/g);

      function reversLetter(onlyletter) {
        let masPointer = [];
        for(let el of onlyletter) {
          el === '11'?masPointer.push('-'):masPointer.push('.');
        }
        return masPointer.join("");
      }

      sent = reversLetter(letterTwoLetter);

      for (let [key, value] of Object.entries(MORSE_TABLE)) {
          if(key === sent) strok += value;
      }
    }
  }
  return strok;
}

module.exports = {
    decode
}