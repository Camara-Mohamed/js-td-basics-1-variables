// Permutation de variables

// Solution classique utilisant une variable temporaire
let a = 4;
let b = 5;

let c;

c = a;
a = b;
b = c;

// Solution alternative valable uniquement pour des nombres
[a,b] = [b,a];

// Échange de nombre1 et nombre2 sans variable temporaire

