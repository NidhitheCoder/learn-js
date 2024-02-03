const a = { duration: 50 };
a.duration ??= 20;
console.log(a); // { duration : 50 }

const b = { duration: 0 };
b.duration ??= 30;
console.log(b); // { duration : 0 }

const c = { duration: null };
c.duration = 20;
console.log(c); // { duration : 20 }

const d = {};
d.duration ??= 21;
console.log(d); // { duration : 21 }
