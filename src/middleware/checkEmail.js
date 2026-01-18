const checkEmail = (req, res, next) => {
  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { email } = req.body;

  if (!email || emailRegex.test(email) === false) {
    return res.status(400).json({
      status: 400,
      message: "invalid email format",
    });
  }

  next();
};

export default checkEmail;
