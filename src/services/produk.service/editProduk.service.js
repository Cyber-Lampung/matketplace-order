import updateProdukFunc from "../../model/repository/produk.repository/editProduk.model.js";

const editProdukService = async (produk_id, nameProduk, harga, rating) => {
  const { searchProdukById, updateProduk } = updateProdukFunc();

  if (!produk_id) {
    return { status: false, message: "invalid produk id empety" };
  }

  // search produk dan kembalikan data produk yang ada
  const searchProdukId = await searchProdukById(produk_id);

  const forUpdateDataProduk = JSON.parse(searchProdukId.data.produks_order);

  // validasi inputan untuk update produk

  const values = [];

  if (!nameProduk) {
    values.push(forUpdateDataProduk.name_produk);
  } else {
    values.push(nameProduk);
  }

  if (!harga) {
    values.push(forUpdateDataProduk.harga);
  } else {
    values.push(harga);
  }

  if (!rating) {
    values.push(forUpdateDataProduk.rating);
  } else {
    values.push(rating);
  }

  values.push(produk_id);

  const responseQueryUpdateProduk = await updateProduk(values);

  if (responseQueryUpdateProduk.status) {
    return {
      status: responseQueryUpdateProduk.status,
      message: responseQueryUpdateProduk.message,
    };
  } else {
    return {
      status: responseQueryUpdateProduk.status,
      message: responseQueryUpdateProduk.message,
    };
  }
};

export default editProdukService;
