const checkOutController = (req, res, next) => {
  const { checkOutInformation } = req.body;

  if (!checkOutInformation) {
    return res.status(400).json({
      statusCode: 400,
      status: false,
      message: "produk not modified, bad request",
    });
  }

  return res.json(checkOutInformation);
};

export default checkOutController;
