const checkInputanAttack = (email, username, password) => {
  const regexMitigasi = /--`'$-#^%&=/;

  const emailCheck = regexMitigasi.test(email);
  const usernameCheck = regexMitigasi.test(username);
  const passwordCheck = regexMitigasi.test(password);

  if (emailCheck || usernameCheck || passwordCheck) {
    return resizeBy.status(403).json({
      statusCode: 403,
      status: false,
      message: "Invalid Input, detection character Annomali",
    });
  }
};

export default checkInputanAttack;
