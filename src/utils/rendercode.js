const gennerateCode = (value) => {
  let output = "";
  value = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("");
  let merge = value + process.env.SECRET_GENERATE_KEY;
  let length = merge.length;
  for (let i = 0; i < 3; i++) {
    let index =
      i == 2
        ? Math.floor(merge.length / 2 + length / 2)
        : Math.floor(length / 2);
    output += merge.charAt(index);
    length = index;
  }
  return `${value.charAt(0)}${output}`.toUpperCase();
};
export default gennerateCode;
