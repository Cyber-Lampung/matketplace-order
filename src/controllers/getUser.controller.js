import getUserService from "../services/getUser.service.js";

const getUserController = async (req, res, next) => {
  const isCheckUser = await getUserService();

  try {
    if (isCheckUser) {
      return res
        .status(200)
        .json({ status: "succes", statusCode: 200, data: isCheckUser });
    } else {
      return res
        .status(404)
        .json({ status: "user belum ditemukan", statusCode: 404 });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default getUserController;
