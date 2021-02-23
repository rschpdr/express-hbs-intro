// const fs = require("fs");

// const handleReadFile = (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// };

// fs.readFile("./example.txt", { flag: "r", encoding: "utf-8" }, handleReadFile);

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = callback(array[i]);
//   }

//   return array;
// }

// function capitalize(word) {
//   return word.toUpperCase();
// }

// forEach(arr, (element) => {
//   return element.toUpperCase();
// });
// // MESMA COISA QUE ISSO
// // forEach(arr, (element) => {
// //   return element.toUpperCase();
// // });

// console.log(arr);

const arr = ["banana", "maçã", "abacate", "uva"];

// 1. Executa uma função callback para cada elemento da array

// 2. Salva o valor de retorno dessa função callback em uma nova array, sem modificar a array original

// 3. Retorna essa nova array

const capitalized = arr.map((element) => {
  return element.toLocaleUpperCase();
});

console.log(capitalized);

// 1. Executa uma função callback para cada elemento da array

// 2. Recebe um valor verdadeiro ou falso da callback (ou converte o valor recebido para boolean) e, caso o valor seja verdadeiro, salva o elemento atual em uma nova arrayt

// 3. Retorna a nova array apenas com os elementos que atenderam a condição da callback

const num = [1, 2, 3, 4, 5];

const even = num.filter((element) => {
  return element % 2 === 0;
});
