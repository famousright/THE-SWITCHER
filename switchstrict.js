"use strict";

var autoGrow = function autoGrow(element) {
  element.style.height = "50px";
  element.style.height = element.scrollHeight + "px";
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
  '>': 'Ю'
},
    rusDict = {};
Object.keys(engDict).forEach(function (key) {
  return rusDict[engDict[key]] = key;
});

var text = document.getElementById('switcher'),
    update = function update(textarea) {
  return text = textarea.value;
},
    replaceEng = function replaceEng(text) {
  return text.split("").map(function (char) {
    return engDict[char] || char;
  }).join("");
},
    replaceRus = function replaceRus(text) {
  return text.split("").map(function (char) {
    return rusDict[char] || char;
  }).join("");
},
    copied = function copied() {
  var b = document.getElementById('button'),
      s = document.getElementById('switcher');
  b.value = 'COPIED';
  s.value.match(/[а-я]/gi) ? b.classList.add('buttonc') : b.classList.add('buttonb');
  setTimeout(function () {
    b.value = 'DECODE';
    b.classList.remove('buttonc', 'buttonb');
  }, 600);
};

copy = function copy() {
  document.getElementById('switcher').select();
  document.execCommand('copy');
  text ? copied() : false;
}, switcher = function switcher(t) {
  t ? document.getElementById('switcher').value = t.match(/[а-я]/gi) ? replaceRus(text) : replaceEng(text) : document.getElementById('switcher').placeholder = 'THERE IS NOTHING TO DECODE, PASTE YOUR TEXT';
  copy();
  return text = document.getElementById('switcher').value;
};

document.addEventListener('keydown', function (event) {
  return window.event.keyCode === 13 || event.which === 13 ? window.event.preventDefault() : void 0;
});
document.addEventListener('keydown', function (event) {
  return (window.event.keyCode === 13 || event.which === 13) && event.altKey ? switcher(text) : void 0;
});