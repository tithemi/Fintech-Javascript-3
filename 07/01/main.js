const input = document.getElementsByTagName('input')[0];
const link = document.getElementsByTagName('a')[0];

const formatPhoneNumber = number => {
  const match = number.match(/\d/g);
  const digits = match ? match.join('') : '7';
  let output = '+7';

  if (digits.length < 2) { return output; }
  output += `(${digits.substr(1, 3)}`;

  if (digits.length < 5) { return output; }
  output += `)-${digits.substr(4, 3)}`;

  if (digits.length < 8) { return output; }
  output += `-${digits.substr(7, 2)}`;

  if (digits.length < 10) { return output; }

  return `${output}-${digits.substr(9, 2)}`;
};

input.addEventListener('input', event => {
  const phone = formatPhoneNumber(input.value);

  input.value = phone;

  if (phone.length === 17) {
    link.textContent = `Позвонить на ${phone}`;
    link.href = `tel:+${phone.match(/\d/g).join('')}`;
  }
});
