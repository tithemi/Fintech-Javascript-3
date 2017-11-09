const doubleClick = (element, doubleClickHandler, timeDistance) => {
  let prevTimestamp = 0;

  element.addEventListener('click', event => {
    const timestamp = Date.now();

    if (timestamp - prevTimestamp < timeDistance) {
      doubleClickHandler(event);
    }

    prevTimestamp = timestamp;
  });
};

const list = document.getElementsByTagName('ol')[0];

doubleClick(
  document.getElementsByTagName('button')[0],
  () => {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`2xClick - ${new Date()}`));
    list.appendChild(li);
  },
  100
);
