<template>
  <div class="contact-container">
    <div class="section-title">
      <h1>Kontak Kami</h1>
    </div>
    
    <div class="contact-list" style="margin-top: 20px;">
      <div class="contact-item">
        <a :href="'tel:' + phoneNumber" class="contact-link">
          <i class="fas fa-phone"></i>
          <span>Nomor: {{ phoneNumber }}</span>
        </a>
      </div>

      <div class="contact-item">
        <a :href="'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage)" class="contact-link" target="_blank">
          <i class="fab fa-whatsapp"></i>
          <span>WhatsApp: {{ whatsappNumber }}</span>
        </a>
      </div>

      <div class="contact-item">
        <a :href="'mailto:' + emailAddress" class="contact-link">
          <i class="fas fa-envelope"></i>
          <span>Email: {{ emailAddress }}</span>
        </a>
      </div>

      <div class="contact-item">
        <a :href="googleMapsLink" class="contact-link" target="_blank">
          <i class="fas fa-map-marker-alt"></i>
          <span>Alamat: {{ address }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  mounted() {
    document.title = 'Kontak Kami di Jasa Tugas dan Skripsi';
  },
  data() {
    return {
      phoneNumber: '6282213171707',
      whatsappNumber: '6282213171707',
      whatsappMessage: 'Halo, Saya mau jasa tugas',
      emailAddress: 'jasatugas@niradigital.my.id',
      address: 'Jl. Ciung Raya No.3 Blok AIE17, RT./RW/RW.03/03, Marga Sari, Kec. Tigaraksa, Kabupaten Tangerang, Banten 15720',
      googleMapsLink: 'https://maps.app.goo.gl/NrMnG3XQ9vQmdjfo9',
    };
  },
};
</script>

<style scoped>
.section-title {
  text-align: center;
  padding: 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
}

.section-title h1 {
  margin: 0;
}

.contact-container {
  padding: 20px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-item {
  margin-bottom: 15px;
  width: 100%;
  max-width: 400px;
}

.contact-link {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #4CAF50;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.contact-link:hover {
  background-color: #f0f0f0;
  transform: scale(1.02);
}

.contact-link i {
  margin-right: 10px;
  font-size: 24px;
  color: #4CAF50; /* Warna ikon */
}
</style>