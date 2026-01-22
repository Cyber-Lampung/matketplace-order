import saveTokenVerifDb from "../../model/repository/verifiksiToken.repository/saveToken.model.js";
import createdDateTime from "../../utils/createdDateTime.utils.js";
import createRandomToken from "../../utils/createRandomToken.utils.js";

const saveTokenService = async (user_id) => {
  const { dateTimeNow, expires_at } = createdDateTime();
  const verifToken = createRandomToken();

  const created_at = dateTimeNow();
  const expires_token = expires_at("0.16");

  const responseSaveToken = await saveTokenVerifDb(
    user_id,
    verifToken,
    created_at,
    expires_token,
  );

  if (responseSaveToken) {
    return true;
  } else {
    return false;
  }
};

export default saveTokenService;
