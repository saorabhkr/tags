export const uniqueObject = (array) => {
  return array.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
};

export const words = (value) => {
  return value.match(/\b[-?(\w+)?]+\b/gi);
};

export const baseFontSize = "20";
export const baseFontUnit = "px";
