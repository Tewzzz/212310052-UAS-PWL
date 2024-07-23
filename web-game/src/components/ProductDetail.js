import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import file CSS untuk styling halaman detail produk
import Footer from './Footer'; // Import komponen Footer

const ProductDetail = () => {
  // Gunakan useParams untuk mendapatkan id produk dari URL
  let { id } = useParams();

  // Contoh data produk
  const products = [
    {
      id: '1',
      name: 'Mobile Legends',
      image: 'https://rrqtopup.com/assets/images/games/1720324592_dc54a39ea6c54b80d5f5.png', // URL gambar banner Mobile Legends
      diamonds: [
        { amount: 5, price: 'Rp 1,436' },
        { amount: 12, price: 'Rp 3,352' },
        { amount: 28, price: 'Rp 7,661' },
        { amount: 59, price: 'Rp 15,323' },
        { amount: 89, price: 'Rp 20,323' },
        { amount: 110, price: 'Rp 28,500' },
        { amount: 114, price: 'Rp 37,400' },
        { amount: 170, price: 'Rp 44,050' },
        { amount: 240, price: 'Rp 62,350' },
        { amount: 3000, price: 'Rp 527,520' },
        { amount: 4020, price: 'Rp 955,550' },
        { amount: 8040, price: 'Rp 999,400' },
      ],
    },
    {
      id: '2',
      name: 'Valorant',
      description: 'Game Valorant adalah ...',
      diamonds: [
        { amount: 60, price: 'Rp 15,000' },
        { amount: 300, price: 'Rp 75,000' },
        { amount: 500, price: 'Rp 120,000' },
        { amount: 1000, price: 'Rp 200,000' },
      ],
    },
    {
      id: '3',
      name: 'League Of Legends',
      description: 'Game League Of Legends adalah ...',
      diamonds: [
        { amount: 60, price: 'Rp 12,000' },
        { amount: 300, price: 'Rp 60,000' },
        { amount: 500, price: 'Rp 100,000' },
        { amount: 1000, price: 'Rp 180,000' },
      ],
    },
  ];

  // State untuk menyimpan nilai inputan user ID, Zone ID, dan harga maksimal
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedDiamond, setSelectedDiamond] = useState(null); // State untuk diamond yang dipilih
  const [selectedPayment, setSelectedPayment] = useState(''); // State untuk metode pembayaran yang dipilih

  // Handle perubahan nilai inputan maxPrice
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Handle perubahan nilai inputan userId
  const handleUserIdChange = (event) => {
    const value = event.target.value;
    // Batasi panjang User ID maksimal 8 karakter
    if (value.length <= 8) {
      setUserId(value);
    }
  };

  // Handle perubahan nilai inputan zoneId
  const handleZoneIdChange = (event) => {
    const value = event.target.value;
    // Batasi panjang Zone ID maksimal 4 karakter
    if (value.length <= 4) {
      setZoneId(value);
    }
  };

  // Handle pemilihan diamond
  const handleDiamondSelect = (diamond) => {
    setSelectedDiamond(diamond);
  };

  // Handle pemilihan metode pembayaran
  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  // Cari produk berdasarkan id
  const product = products.find((prod) => prod.id === id);

  // Jika produk tidak ditemukan
  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  // Filter diamonds berdasarkan harga maksimal yang diinputkan
  const filteredDiamonds = maxPrice
    ? product.diamonds.filter(
        (diamond) =>
          parseInt(
            diamond.price.replace('Rp ', '').replace(',', '')
          ) <= parseInt(maxPrice)
      )
    : product.diamonds;

  // Pilihan pembayaran
  const paymentOptions = [
    {
      method: 'Bank Transfer',
      description: 'Transfer ke rekening bank yang tersedia',
    },
    { method: 'GoPay', description: 'Pembayaran melalui GoPay' },
    { method: 'OVO', description: 'Pembayaran melalui OVO' },
    { method: 'DANA', description: 'Pembayaran melalui DANA' },
  ];

  // Menampilkan pesan notifikasi ketika tombol proses pesanan ditekan
  const simpleNotification = (dm, price, paymentMethod) => {
    alert(`Pesanan ${dm} Diamonds - ${price} dengan metode pembayaran ${paymentMethod} selesai!`);
  }

  // Component untuk menampilkan detail pesanan
  const OrderConfirmation = () => {
    if (!selectedDiamond) {
      return null; // Jika belum ada diamond yang dipilih, tidak menampilkan konfirmasi
    }

    return (
      <div className="order-confirmation">
        <h3>Konfirmasi Pesanan</h3>
        <p>User ID: {userId}</p>
        <p>Zone ID: {zoneId}</p>
        <p>
          Paket yang dipilih: {selectedDiamond.amount} Diamonds -{' '}
          {selectedDiamond.price}
        </p>
        <p>Metode Pembayaran: {selectedPayment}</p>
        {/* Tambahkan tombol untuk proses selanjutnya */}
        <button onClick={() => simpleNotification(selectedDiamond.amount, selectedDiamond.price, selectedPayment)}>Proses Pesanan</button>
      </div>
    );
  };

  return (
    <div>
      <div className="product-detail">
        <div className="product-info">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="product-banner"
            />
          )}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        {/* Form Masukkan Player ID dan Zone ID */}
        <div className="form-container">
          <div className="form-column">
            <label htmlFor="player-id-1">Masukkan User ID:</label>
            <input
              type="text"
              id="player-id-1"
              name="player-id-1"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <div className="form-column">
            <label htmlFor="player-id-2">Masukkan Zone ID:</label>
            <input
              type="text"
              id="player-id-2"
              name="player-id-2"
              value={zoneId}
              onChange={handleZoneIdChange}
            />
          </div>
        </div>
        {/* Input untuk masukkan harga maksimal */}
        <div className="max-price-input">
          <label htmlFor="max-price">Masukkan Harga:</label>
          <input
            type="number"
            id="max-price"
            name="max-price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        {/* Pilihan Diamond */}
        <div className="diamond-options">
          <h3>Pilih Nominal Layanan:</h3>
          <hr className="line" /> {/* Garis di bawah Pilihan Nominal Layanan */}
          <ul>
            {filteredDiamonds.length > 0 ? (
              filteredDiamonds.map((diamond, index) => (
                <li
                  key={index}
                  className={selectedDiamond === diamond ? 'selected' : ''}
                >
                  <button onClick={() => handleDiamondSelect(diamond)}>
                    {diamond.amount} Diamonds - {diamond.price}
                  </button>
                </li>
              ))
            ) : (
              <li>
                Tidak ada diamond yang sesuai dengan harga maksimal yang Anda
                masukkan.
              </li>
            )}
          </ul>
        </div>
        {/* Pilihan Pembayaran */}
        <div className="payment-options">
          <h3>Pilih Metode Pembayaran:</h3>
          <hr className="line" /> {/* Garis di bawah Pilihan Metode Pembayaran */}
          <ul>
            {paymentOptions.map((option, index) => (
              <li key={index}>
                <button onClick={() => handlePaymentSelect(option.method)}>
                  {option.method}
                </button>
                <p>{option.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Tampilkan komponen OrderConfirmation jika diamond sudah dipilih */}
        {selectedDiamond && <OrderConfirmation />}
      </div>
      {/* Tambahkan komponen Footer di bagian pembelian */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
