<!-- src/views/Services.vue -->
<template>
  <div class="services-page">
    <div class="section-title" style="background-color: #4CAF50;">
      <h1>Layanan Kami</h1>
    </div>

    <div class="services-list">
      <div class="service-item" style="background-color: #f0f8ff;">
        <h2>Pengerjaan PPT & Presentasi</h2>
        <p>Membuat presentasi yang menarik, informatif, dan mudah dipahami sesuai dengan topik yang kamu butuhkan.</p>
      </div>

      <div class="service-item" style="background-color: #fff7e6;">
        <h2>Desain Grafis</h2>
        <p>Menyediakan layanan desain visual untuk berbagai kebutuhan, mulai dari desain poster, brosur, logo, hingga materi promosi lainnya.</p>
      </div>

      <div class="service-item" style="background-color: #f9f9f9;">
        <h2>Video Editing</h2>
        <p>Mengedit video dengan kualitas tinggi, baik untuk keperluan tugas, presentasi, atau konten lainnya.</p>
      </div>

      <div class="service-item" style="background-color: #e3f2fd;">
        <h2>Pemrograman & Pengembangan Aplikasi</h2>
        <p>Membantu kamu menyelesaikan tugas terkait pemrograman, pengembangan software, aplikasi mobile, maupun website.</p>
      </div>

      <div class="service-item" style="background-color: #ffebee;">
        <h2>Penulisan Proposal</h2>
        <p>Membantu menulis proposal yang jelas, terstruktur, dan sesuai dengan kebutuhan penelitian atau proyekmu.</p>
      </div>

      <div class="service-item" style="background-color: #e8f5e9;">
        <h2>Penulisan Jurnal & Artikel</h2>
        <p>Menyediakan layanan penulisan jurnal, artikel ilmiah, atau tugas lainnya sesuai dengan standar akademik.</p>
      </div>

      <div class="service-item" style="background-color: #f1f8e9;">
        <h2>Bimbingan & Penulisan Skripsi</h2>
        <p>Kami juga memberikan bantuan dalam menyusun skripsi dari tahap awal hingga selesai dengan bimbingan yang tepat sesuai dengan jurusanmu.</p>
      </div>
    </div>

    <div class="why-choose-us" style="background-color: #f1f1f1;">
      <h2>Kenapa Memilih Kami?</h2>
      <ul>
        <li><strong>Profesional:</strong> Tim kami terdiri dari para ahli di berbagai bidang yang siap membantu menyelesaikan tugasmu dengan tepat waktu.</li>
        <li><strong>Kualitas Terjamin:</strong> Semua pekerjaan kami dikerjakan dengan kualitas terbaik, sesuai dengan standar akademik.</li>
        <li><strong>Terpercaya:</strong> Kami sudah berpengalaman membantu ribuan mahasiswa dalam menyelesaikan tugas-tugas mereka.</li>
        <li><strong>Penyelesaian Tepat Waktu:</strong> Kami mengutamakan deadline dan selalu memastikan tugasmu selesai tepat waktu.</li>
      </ul>
      <router-link to="/kontak-kami">
        <button class="contact-button">Hubungi Kami Sekarang</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  mounted() {
    document.title = 'Layanan Kami di Jasa Tugas dan Skripsi';
  }
};
</script>

<style scoped>
.contact-button {
  margin-top: 20px; /* Jarak atas untuk tombol */
  padding: 10px 20px; /* Padding untuk tombol */
  background-color: #007bff; /* Warna latar belakang tombol */
  color: white; /* Warna teks tombol */
  border: none; /* Menghapus border default */
  border-radius: 5px; /* Sudut tombol membulat */
  cursor: pointer; /* Mengubah kursor saat hover */
  font-size: 16px;  
  transition: background-color 0.3s ease, transform 0.3s ease; /* Transisi untuk efek hover */
}

.contact-button:hover {
  background-color: #0056b3; /* Ganti warna latar belakang saat hover */
  transform: scale(1.05); /* Mengubah ukuran tombol sedikit saat hover */
}

.services-page {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.section-title {
  text-align: center;
  padding: 20px;
  color: white;
}

.section-title h1 {
  margin: 0;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px; /* Menambahkan jarak antar item secara horizontal dan vertikal */
  justify-content: center; /* Memastikan item di tengah secara horizontal */
}

.service-item {
  width: 30%; /* Mengatur lebar item di desktop (3 kolom) */
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
}

.service-item h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-item p {
  font-size: 1rem;
  line-height: 1.5;
}

.why-choose-us {
  margin-top: 40px;
  padding: 20px;
  border-radius: 5px;
}

.why-choose-us h2 {
  font-size: 1.75rem;
  margin-bottom: 15px;
}

.why-choose-us ul {
  list-style-type: none;
  padding-left: 0;
}

.why-choose-us li {
  font-size: 1rem;
  margin-bottom: 10px;
}

/* Responsif: untuk layar kecil (mobile) */
@media (max-width: 768px) {
  .services-list {
    flex-direction: column; /* Membuat item layanan ditampilkan dalam satu kolom */
    align-items: center; /* Menempatkan layanan di tengah */
    justify-content: center; /* Memastikan semua item di tengah secara horizontal */
  }

  .service-item {
    width: 80%; /* Mengatur lebar item agar lebih besar pada layar kecil */
    margin-bottom: 20px; /* Memberikan jarak antar item */
  }
}

</style>
