/******************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
console.log(`Le résultat de cette opération mathématique complexe est ${2 + 5 / 4 * 2} ! Le calcul pour obtenir ce résultat est de 2 + 5 / 4 * 2.`);

// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
console.log(`Le résultat de l'opération de ce groupement d'opérations est ${5+((2 + 5) / (4 * 2))} ! Le calcul pour obtenir ce résultat est de 5 + ((2 + 5) / (4 * 2)).`);

// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
let x = 5, y = 10;

console.log(`Les valeurs x et y sont ${x} et ${y}.`);

// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

const ageP1 = 18;
const ageP2 = "18";

console.log(!(ageP1 > ageP2));
console.log((ageP1 > ageP2));
console.log(ageP1 < ageP2);
console.log(ageP1 <= ageP2);
console.log(ageP1 >= ageP2);
console.log(ageP1 === ageP2);
console.log(ageP1 !== ageP2);