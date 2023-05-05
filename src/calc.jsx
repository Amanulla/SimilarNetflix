let a = 0;
let b = 0;
let c = 0;
function add(a,b) {
  c=a+b;
  return c;
}

function sub(a,b) {
  c=a-b;
  return c;
}

function div(a,b) {
  c=a/b;
  c = c.toFixed(2);
  return c;
}

function mult(a,b) {
  c=a*b;
  return c;
}

// export default add;

export { add, sub, div, mult };