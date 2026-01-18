import getUserInDbModel from "../model/repository/getUserInDb.model.js";

const getUserService = async () => {
  // ambil semua userlist yang ada dalam database

  const { status, user } = await getUserInDbModel();

  if (status === "succes") {
    return { user };
  } else {
    return false;
  }
};

export default getUserService;
