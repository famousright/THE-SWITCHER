const autoGrow = element => {
  element.style.height = "50px";
  element.style.height = (element.scrollHeight) + "px";
},

      engDict = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',
  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '@': '"',
  '#': '№',
  '$': '%',
  '%': ':',
  '^': ',',
  '&': '.',
  '*': ';',
  Q: 'Й',
  W: 'Ц',
  E: 'У',
  R: 'К',
  T: 'Е',
  Y: 'Н',
  U: 'Г',
  I: 'Ш',
  O: 'Щ',
  P: 'З',
  '{': 'Х',
  '}': 'Ъ',
  A: 'Ф',
  S: 'Ы',
  D: 'В',
  F: 'А',
  G: 'П',
  H: 'Р',
  J: 'О',
  K: 'Л',
  L: 'Д',
  ':': 'Ж',
  '"': 'Э',
  Z: 'Я',
  X: 'Ч',
  C: 'С',
  V: 'М',
  B: 'И',
  N: 'Т',
  M: 'Ь',
  '<': 'Б',
  '>': 'Ю',
},

      rusDict = {};
Object.keys(engDict).forEach(key => rusDict[engDict[key]] = key);

let text = document.getElementById('switcher'),

    update = textarea => text = textarea.value,

    replaceEng = text => text.split("").map(char => engDict[char] || char).join(""),

    replaceRus = text => text.split("").map(char => rusDict[char] || char).join(""),

    copied = () => {
      const b = document.getElementById('button'),
            s = document.getElementById('switcher')
      b.value = 'COPIED'
      s.value.match(/[а-я]/gi) ? b.classList.add('buttonc') : b.classList.add('buttonb')
      setTimeout(function(){ b.value = 'DECODE'
      b.classList.remove('buttonc', 'buttonb');
      }, 600)
    }

    copy = () => {
      document.getElementById('switcher').select();
	    document.execCommand('copy');
      text ? copied() : false
    },

    switcher = t => {
      t ? document.getElementById('switcher').value = t.match(/[а-я]/gi) ? replaceRus(text) : replaceEng(text) : document.getElementById('switcher').placeholder='THERE IS NOTHING TO DECODE, PASTE YOUR TEXT'
      copy();
      return text = document.getElementById('switcher').value
    }
    
document.addEventListener('keydown', event => (window.event.keyCode===13 || event.which===13) ? window.event.preventDefault() : void 0)
document.addEventListener('keydown', event => (window.event.keyCode===13 || event.which===13)&& event.altKey ? switcher(text) : void 0)