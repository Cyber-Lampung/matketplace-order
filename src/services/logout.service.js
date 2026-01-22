import deleteSessionLogoutModel from "../model/repository/deleteSessionLogout.model.js";

const logoutService = async (userId) => {
  if (!userId) {
    return { statusCode: 400, status: false, message: "bad requests" };
  }

  const responseQueryDeleteSession = await deleteSessionLogoutModel(userId);

  if (responseQueryDeleteSession) {
    return {
      statusCode: 200,
      status: true,
      message: "succes delete session users",
    };
  } else {
    return {
      statusCode: 404,
      status: false,
      message: "invalid delete session users",
    };
  }
};

export default logoutService;
