import verifikasiTokenModel from "../../model/repository/verifiksiToken.repository/verifikasiToken.model.js";
import checkInputan from "../../utils/checkInputan.utils.js";
import createdDateTime from "../../utils/createdDateTime.utils.js";

const verifTokenService = async (user_id, verifikasiToken) => {
  const { dateTimeNow } = createdDateTime();

  // verifikasi inputan
  const validasiInputan = checkInputan(verifikasiToken);

  if (validasiInputan) {
    return {
      statusCode: 403,
      status: false,
      message: "invalid verifikasi terdeteksi character",
    };
  }

  if (!verifikasiToken) {
    return { statusCode: 400, status: false, message: "token empety" };
  }

  if (verifikasiToken.length > 6 || verifikasiToken.length < 6) {
    return { statusCode: 400, status: false, message: "token not modified" };
  }

  const responseVerifikasaiToken = await verifikasiTokenModel(user_id);

  // check apakah token sudah melewati batas waktu

  const checkTokenKadarluarsa =
    dateTimeNow() < responseVerifikasaiToken.expires_at;

  if (!checkTokenKadarluarsa) {
    return { statusCode: 429, status: true, message: "token kadaluarsa" };
  }

  const validasiToken =
    verifikasiToken === responseVerifikasaiToken.verif_token;

  console.log(validasiToken);

  if (validasiToken) {
    return {
      statusCode: 200,
      status: true,
      message: "succes verifikasi token",
    };
  } else {
    return {
      statusCode: 404,
      status: false,
      message: "invalid token, token kadarluarsa / token salah",
    };
  }
};

export default verifTokenService;
