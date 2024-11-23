//Выведите в консоль количество символов в тексте.
const text = document.getElementById("text").innerText;
console.log(text.length);

//Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result = text.replace(/;/g, ";\n");
console.log(result);

//Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring = result.replace(/\s/g, "");
console.log(substring);

//Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
let newText = result.substring(28, 50);
console.log(newText);

//Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText = newText.replace(/клён/gi, "дубе");
console.log(replacedText);

//Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2 = result.toUpperCase();
console.log(replacedText2);

//Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3 = result.replace(/клён/gi, "дуб");
console.log(replacedText3);

//Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index = text.indexOf("моря");
console.log(index);

//Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText = `${replacedText[0].toUpperCase()}${replacedText.slice(1)}`;
console.log(modifiedText);

//Выведите значения всех полученных переменных на экран.*/
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result:\n ${replacedText3}`
);
console.log(`8. Индекс первого вхождения "моря": \n${index}`);
console.log(`9. Строка с измененной первой буквой: \n${modifiedText}`);

/*Создать программу, которая генерирует случайное слово из четырёх букв.
Шаги для выполнения задания:
Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
Выведи полученное случайное слово на экран, чтобы проверить результат.*/
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЪЬЭЮЯ";
let index0 = Math.floor(Math.random() * alphabet.length);
let index1 = Math.floor(Math.random() * alphabet.length);
let index2 = Math.floor(Math.random() * alphabet.length);
let index3 = Math.floor(Math.random() * alphabet.length);

let word4 = `${alphabet[index0]}${alphabet[index1]}${alphabet[index2]}${alphabet[index3]}`;
console.log(word4);
