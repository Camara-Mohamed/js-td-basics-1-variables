// Celsius - Fahrenheit
/*
- Initialisez une variable celsius avec une valeur de votre choix en degrés Celsius (par exemple, 25).
- Calculez la température équivalente en degrés Fahrenheit et stockez-la dans une variable fahrenheit en utilisant la formule : fahrenheit = (celsius * 9/5) + 32.
- Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console en utilisant une phrase descriptive.
- Modifiez la valeur de la variable celsius et répétez le calcul et l'affichage pour voir la conversion avec une autre température.
*/

// Initialisez la variable celsius avec une valeur de votre choix
let celsius = 25;

// Calculez la température équivalente en degrés Fahrenheit et stockez-la dans la variable fahrenheit
let fahrenheit = (celsius * 9 / 5) + 32;

// Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console en utilisant une phrase descriptive
console.log("La température en dégrés Celsius vaut " + celsius + ", alors que la même température en degrés Fahrenheit vaut " + fahrenheit + ". On arrive à ce résultat là grâce à une formule de transformation fahrenheit = (celsius * 9/5) + 32.");

// Modifiez la valeur de la variable celsius
celsius = 100;

// Répétez le calcul et l'affichage pour une autre température
fahrenheit = (celsius * 9 / 5) + 32;
console.log("La température en degrés Celsius vaut " + celsius + ", alors que la même température en degrés Fahrenheit vaut " + fahrenheit + ". On arrive à ce résultat là grâce à une formule de transformation fahrenheit = (celsius * 9/5) + 32.");