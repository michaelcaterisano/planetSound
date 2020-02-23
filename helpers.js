function scale(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

console.log(scale(100, 0, 5000000000, 200, 5000));
