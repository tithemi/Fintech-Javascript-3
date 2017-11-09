/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle(time, callback) {
  let lastInvokeTime = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastInvokeTime > time) {
      lastInvokeTime = now;
      callback.apply(this, args);
    }
  };
}

module.exports = { throttle };
