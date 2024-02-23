a = 0;

console.log(a || 10) // 10
console.log(a ?? 10) // 0

const b = undefined;
console.log(b || 'Hello'); // Hello
console.log(b ?? 'Hello'); // Hello

const c = null;
console.log(c || 'Hello'); // Hello
console.log(c ?? 'Hello'); // Hello

const d = '';
console.log(c || 'Sample'); // Sample
console.log(d ?? 'Sample'); // ''

const e = 'Text';
console.log(e || 'Second'); // Text
console.log(e || 'Second'); // Text

