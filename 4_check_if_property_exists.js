const prop_exists = (a,b) => b in a;

console.log(prop_exists({x:'a',y:'b',z:'c'},'a'))
console.log(prop_exists({x:'a',y:'b',a:'c'},'a'))