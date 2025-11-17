import { add, subtract } from '../src/calc.js';

describe('Fonctions de Calcul', () => {

test('add(1, 2) devrait retourner 3', () => {
// Teste si l'addition fonctionne correctement
expect(add(1, 2)).toBe(3);
});

test('subtract(5, 3) devrait retourner 2', () => {
// Teste si la soustraction fonctionne correctement
expect(subtract(5, 3)).toBe(2);
});
});