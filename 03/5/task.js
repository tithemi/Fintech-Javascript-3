/**
 * Изменить поведение чисел таким образом, чтобы указанные конструкции были эквивалетны при условии,
 * что римские цифры могут быть любыми.
 * 0..V => [0, 1, 2, 3, 4]
 * 0..VII => [0, 1, 2, 3, 4, 5, 6]
 * 0..X => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Подсказка - необходимо использовать Proxy - объекты
 * */
const dict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

Object.setPrototypeOf(Number.prototype, new Proxy({}, {
  get: (target, name) => {
    let sum = 0;

    for (let i = 0; i < name.length; i++) {
      if (dict[name[i]] < dict[name[i + 1]]) {
        sum -= dict[name[i]];
      } else {
        sum += dict[name[i]];
      }
    }

    const result = [];

    for (let i = 0; i < sum; i++) {
      result.push(i);
    }

    return result;
  }
}));

