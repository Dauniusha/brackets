module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length - 1; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] == bracketsConfig[j][0] && str[i + 1] == bracketsConfig[j][1]) {
              str = str.slice(0, i) + str.slice(i + 2);
              i = -1;
          }
      }
  }
  if (!str)
      return true;
  else
      return false;
}
