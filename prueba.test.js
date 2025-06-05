const cadenaInversa = require('./cadena');

test('Invierte la cadena "hola" a "aloh"', ()=>{
    expect(cadenaInversa('hola')).toBe('aloh');
});

test('invierte la cadena vacia a cadena vacia',()=>{
    expect(cadenaInversa('')).toBe('');
});

test('invierte cadena con espacios "abc def" a "fed cba"',()=>{
    expect(cadenaInversa('abc def')).toBe('fed cba');
});