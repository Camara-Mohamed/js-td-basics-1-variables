/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now, ageJohn, ageMark, yearJohn, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(`John est né en ${ageJohn}.`);
console.log(`Mark est né en ${ageMark}.`);

// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
console.log(`L'année à laquelle on sera dans 2 ans est ${now + 2}.`);
console.log(`Le double de l'année actuelle est ${now * 2}.`);
console.log(`Le dixième de l'année actuelle est ${now / 10}.`);

// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)

// Opérateur typeof
