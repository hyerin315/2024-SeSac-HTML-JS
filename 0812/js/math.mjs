//math.mjs
const PI = 3.14;

function add(a, b) { // add : 식별자로 내보냄 (export 입장에서 보면 PI, add 모두 식별자임, 상수 X)
  return a + b;
}

export { PI, add };