const checkInputan = (inputan) => {
  //   console.log(inputan);
  const regexTestInputan = /([-`=-])/;

  return regexTestInputan.test(inputan);
};

export default checkInputan;
