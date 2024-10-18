// Пример использования функции
// const arrayExample = [1, 2, 3, 4, 1, 2, 3];
// console.log(findUniqueElement(arrayExample)); ``// Выведет 4
// const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
// console.log(findUniqueElement(arrayExample2)); ``// Выведет 0

// function findUniqueElement(arr) {
//     const map = new Map();
//
//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], map.get(arr[i]) + 1 || 1);
//     }
//
//     for (let e of map.entries()) {
//         if (e[1] === 1) return e[0];
//     }
//
//     return 0;
// }
//
// // findUniqueElement(arrayExample);
//
// const fetchUrl = (url) => {
//     console.log(`fetching ${url}...*`);
// };
// function debounce(callback, delay) {
//     let oldId;
//     return (...args) => {
//         clearTimeout(oldId);
//         oldId = setTimeout(() => callback(args), delay);
//     }
// }
// const fetching = debounce(fetchUrl, 300);
//
// fetching(1);
// fetching(2);
// fetching(3);
// fetching(4);
// fetching(5);
// // expected: fetching 5...*

const arr = [1, [2, 3, [4, 5, [6]]], 7, [8, 9,]];

