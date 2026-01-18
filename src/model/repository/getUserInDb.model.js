import db from "../database/db.js";

const getUserInDbModel = async () => {
  // check in db

  const [users] = await db.query("select * from users");

  if (users) {
    return { status: "succes", user: users };
  } else {
    return false;
  }
};

export default getUserInDbModel;
