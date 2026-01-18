const checkParams = (req, res, next) => {
  const params = req.params.id;

  console.log(params);

  if (!params) {
    return res
      .status(429)
      .json({ status: 429, message: "invalid params is empty" });
  }
};

export default checkParams;
