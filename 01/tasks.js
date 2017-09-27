/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const values = string.match(/-?(0|[1-9]\d*)(\.\d+)?/gi);

  return {
    min: Math.min.apply(null, values),
    max: Math.max.apply(null, values)
  };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return x < 2 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

var cache = [0, 1];

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  if (cache[x] === undefined) {
    cache[x] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
  }

  return cache[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  const rows = Math.ceil((max + 1) / cols);
  let s = '';

  for (let i = 0; i < rows; ++i) {
    if (i) {
      s += '\n';
    }

    for (let j = 0; j < cols && i * cols + j <= max; ++j) {
      let x = j * rows + i;

      if ((max + 1) % cols) {
        x -= Math.max(0, (j - (max + 1) % cols));
      }

      if (j) {
        s += ' ';
      }
      if (x < 10) {
        s += ' ';
      }
      s += x;
    }
  }

  return s;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  return input.replace(/(.)\1+/g, match => match[0] + match.length);
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
