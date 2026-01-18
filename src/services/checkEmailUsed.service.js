import checkEmailUsedInDb from "../model/repository/checkEmailUsedInDb.model.js";

const checkEmailUsedService = async (req, res) => {
  // ambil data email di sini

  const { email } = req.body;

  const checkEmailInDb = await checkEmailUsedInDb(email);

  // console.log(checkEmailInDb); => testing

  if (checkEmailInDb === true) {
    return { used: true, message: "invalid register email used" };
  } else {
    return { used: false };
  }
};

export default checkEmailUsedService;
