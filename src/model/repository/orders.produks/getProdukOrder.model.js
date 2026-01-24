import db from "../../database/db.js";

const getInformationCheckout = async (produk_id, user_id) => {
  // const [user_location] = await db.query(
  //   "select lokasi_user from informasi_user where user_id = ? ",
  //   [user_id],
  // );

  const [queryResult] = await db.query(
    "select produk_data from produks_list where produk_id = ? ",
    [produk_id],
  );

  if (queryResult[0]) {
    return {
      status: true,
      messae: "data found",
      data: queryResult[0],
      // user_location: user_location[0],
    };
  } else {
    return { status: false, messae: "data not found" };
  }
};

export default getInformationCheckout;
