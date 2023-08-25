function validatePIN(pin) {
  const regex = /[^0-9]/;
  if (regex.test(pin)) {
    return false;
  } else {
    return pin.length === 4 || pin.length === 6 ? true : false;
  }
}

// console.log(validatePIN("1234"));
// console.log(validatePIN("12345"));
// console.log(validatePIN("a234"));
console.log(validatePIN("-12345"));
console.log(validatePIN("12.0"));
console.log(validatePIN("32?5"));
