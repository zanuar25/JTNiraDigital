<!-- src/views/About.vue -->
<template>
  <div class="about-page">
    <h1>Tentang Kami</h1>
    <p>
      Selamat datang di <strong>Jasa Tugas dan Skripsi</strong>, solusi praktis untuk menyelesaikan tugas akademik dan pekerjaan kreatif Anda! Kami adalah tim profesional yang siap membantu Anda dalam mengerjakan berbagai jenis tugas, mulai dari Pengerjaan PPT & Presentasi, Desain Grafis, Video Editing, Pemrograman & Pengembangan Aplikasi, Penulisan Proposal, Penulisan Jurnal & Artikel, dan Bimbingan & Penulisan Skripsi. Layanan kami mencakup berbagai jurusan dan topik, sehingga Anda bisa merasa tenang karena pekerjaan Anda akan ditangani oleh ahli di bidangnya.
    </p>
    <p>
      Kami memahami betapa sibuknya kehidupan mahasiswa atau profesional yang harus memenuhi berbagai tenggat waktu. Oleh karena itu, kami hadir untuk memberikan dukungan terbaik dengan kualitas pekerjaan yang tinggi dan harga yang terjangkau. Dengan pengalaman di berbagai bidang, kami memastikan bahwa setiap tugas yang Anda serahkan akan dikerjakan dengan teliti, kreatif, dan sesuai dengan kebutuhan spesifik Anda.
    </p>
    <p>
      Percayakan tugas Anda kepada kami, dan fokuslah pada hal-hal yang lebih penting dalam hidup Anda. Dengan bantuan <strong>Jasa Tugas dan Skripsi</strong>, Anda dapat yakin bahwa setiap pekerjaan akan selesai dengan sempurna.
    </p>
    <router-link to="/kontak-kami">
        <button class="contact-button">Hubungi Kami Sekarang</button>
      </router-link>
      <router-link to="/pelayanan">
        <button class="service-button">Lihat Pelayanan Kami</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    document.title = 'Tentang Kami di Jasa Tugas dan Skripsi';
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

.service-button {
  margin-left: 20px;
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

.service-button:hover {
  background-color: #0056b3; /* Ganti warna latar belakang saat hover */
  transform: scale(1.05); /* Mengubah ukuran tombol sedikit saat hover */
}

.contact-button {
  margin-top: 20px; /* Jarak atas untuk tombol */
  padding: 10px 20px; /* Padding untuk tombol */
  background-color: #007bff; /* Warna latar belakang tombol */
  color: white; /* Warna teks tombol */
  border: none; /* Menghapus border default */
  border-radius: 5px; /* Sudut tombol membulat */
  cursor: pointer; /* Mengubah kursor saat hover */
  font-size: 16px; /* Ukuran font tombol */
}

.about-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
}

h2 {
  font-size: 1.5rem;
  color: #555;
  margin-top: 20px;
}

ul {
  margin-left: 20px;
  list-style-type: disc;
}

li {
  margin: 10px 0;
}

strong {
  font-weight: bold;
}
</style>
