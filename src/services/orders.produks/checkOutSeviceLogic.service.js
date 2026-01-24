import getInformationCheckout from "../../model/repository/orders.produks/getProdukOrder.model.js";
import createDateTime from "../../utils/createdDateTime.utils.js";

const serviceLogicProdukCheckOut = async (checkOutInformation, user_id) => {
  // getTimelocal

  const { dateTimeNow } = createDateTime();

  // check produk_id

  const dataCheckOutCheck = checkOutInformation.items.data[0];
  const type_payment = checkOutInformation.shiping.payment_method;

  // checkout data
  const user_checkout = checkOutInformation.userInformation.name;
  const no_telp = checkOutInformation.userInformation.phone;
  const produk_id = dataCheckOutCheck.produk_id;
  const qyt = dataCheckOutCheck.qyt;
  const user_location = "jakarta";
  let status_payment;
  const status_pesanan = "processed";

  if (type_payment === "qris") {
    status_payment = "pending";
  }

  // get user location from user_information
  const getProduk = await getInformationCheckout(produk_id, user_id);

  // ambil spesifiksi produk

  const produkInformation = JSON.parse(getProduk.data.produk_data);

  // produk information spesifikasi

  const name_produk = produkInformation.name_produk;
  const pricing_total = produkInformation.harga * qyt;

  const outputDataProduk = {
    invoice_identity: {
      user_location: user_location,
      username: user_checkout,
      no_telp: no_telp,
      type_payment: type_payment,
      status_payment: status_payment,
      status_pesanan: status_pesanan,
      time_transaction: dateTimeNow(),
    },

    produk_data: {
      name_produk: name_produk,
      qyt: qyt,
    },

    // TAMBAHKAN INI UNTUK RINGKASAN BIAYA
    payment_summary: {
      total_harga_barang: `${pricing_total}.000`,
      biaya_ongkir: 15000, // Misal sudah dihitung
      biaya_layanan: 1000,
      total_belanja: pricing_total + 15000 + 1000, // Total bersih
    },
  };

  console.log(outputDataProduk);
};

export default serviceLogicProdukCheckOut;
