const somar = (a, b) => a + b;
const inverterTexto = (texto) => texto.split('').reverse().join('');

test('1. Soma de dois numeros positivos', () => {
  expect(somar(2, 3)).toBe(5);
});

test('2. Soma de zero', () => {
  expect(somar(5, 0)).toBe(5);
});

test('3. Inverter uma palavra simples', () => {
  expect(inverterTexto('puc')).toBe('cup');
});

test('4. Verificar se a soma resulta em um numero', () => {
  expect(typeof somar(1, 1)).toBe('number');
});

test('5. Verificar se o texto invertido mantem o tamanho', () => {
  const nome = 'Gabriel';
  expect(inverterTexto(nome).length).toBe(7);
});
