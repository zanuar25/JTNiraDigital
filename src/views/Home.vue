<template>
  <img src="@/assets/judul.png" alt="Judul" class="judul-image" />
  <div class="container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" class="logo-image" />
      <img src="@/assets/book.png" alt="Book" class="book-image" />
      <img src="@/assets/book1.png" alt="Book1" class="book1-image" />
    </div>
    <div class="text">
      <p>
        Siap untuk meraih puncak kesuksesan akademis? Kami di sini untuk membantu Anda!<br />
        Nikmati layanan Tugas dan Skripsi Berkualitas tinggi. Serahkan tugas dan skripsi Anda kepada tim ahli kami yang berpengalaman, dan dapatkan solusi yang tepat waktu serta berkualitas luar biasa.
      </p>
      <h2>Kenapa Harus Memilih Kami?</h2>
      <ul>
        <li><strong>Profesional:</strong> Tim kami terdiri dari para ahli di berbagai bidang yang siap membantu menyelesaikan tugasmu dengan tepat waktu.</li>
        <li><strong>Kualitas Terjamin:</strong> Semua pekerjaan kami dikerjakan dengan kualitas terbaik, sesuai dengan standar akademik.</li>
        <li><strong>Terpercaya:</strong> Kami sudah berpengalaman membantu ribuan mahasiswa dalam menyelesaikan tugas-tugas mereka.</li>
        <li><strong>Penyelesaian Tepat Waktu:</strong> Kami mengutamakan deadline dan selalu memastikan tugasmu selesai tepat waktu.</li>
      </ul>
      <h2>Proses yang Mudah dan Cepat</h2>
      <p>
        Kirimkan detail tugas Anda kepada kami, dan kami akan segera menghubungi Anda dengan solusi terbaik yang sesuai kebutuhan Anda.
      </p>
      <h2>Hubungi Kami Sekarang Juga!</h2>
      <p>
        Jangan biarkan tugas mengganggu fokus dan impian akademis Anda. Biarkan kami menjadi mitra Anda dalam mencapai tujuan tersebut!
      </p>
      <router-link to="/kontak-kami">
        <button class="contact-button">Hubungi Kami Sekarang</button>
      </router-link>
      <router-link to="/pelayanan">
        <button class="service-button">Lihat Pelayanan Kami</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    document.title = 'Selamat Datang di Jasa Tugas dan Skripsi';
  }
};
</script>

<style scoped>
/* Kontainer utama */
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  flex-wrap: wrap;
}

/* Bagian logo */
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 20%;
}

.logo img {
  width: 100%;
  height: auto;
  max-width: 150px;
}

.logo-image {
  margin-bottom: 30px;
}

.book-image,
.book1-image {
  margin-bottom: 10px;
}

/* Bagian teks */
.text {
  flex: 0 0 70%;
  padding: 20px;
  text-align: left;
}

.text h2 {
  margin-top: 20px;
}

.text p,
.text ul {
  margin: 10px 0;
}

.text ul {
  padding-left: 20px;
}

/* Tombol */
.contact-button, .service-button {
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.contact-button:hover, .service-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Gambar Judul */
.judul-image {
  width: 100%;      /* Gambar akan mengambil lebar penuh kontainer */
  height: auto;     /* Menjaga rasio aspek */
  margin: 0 auto 20px; /* Pusatkan gambar dengan margin bawah */
}

/* Media Query untuk Perangkat Desktop */
@media (min-width: 769px) {
  .judul-image {
    max-width: 1200px; /* Set batasan maksimal lebar gambar untuk desktop */
  }
}

/* Media Query untuk Perangkat Mobile */
@media (max-width: 768px) {
  .judul-image {
    max-width: 100%;  /* Gambar akan mengambil lebar penuh pada layar kecil */
  }
}


/* Media Queries untuk responsivitas */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-bottom: 20px;
  }

  .text {
    flex: 1 1 100%;
    padding: 10px;
  }

  .contact-button, .service-button {
    width: 100%; /* Tombol mengambil lebar penuh pada perangkat mobile */
    font-size: 18px;
  }
}

</style>
