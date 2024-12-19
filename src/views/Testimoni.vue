<template>
  <div class="testimoni-container">
    <div class="section-title">
      <h1>Testimoni</h1>
    </div>
    <div style="margin-top: 20px;">
      
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimoniPage',
  mounted() {
    // Pastikan Swiper hanya diinisialisasi setelah DOM sepenuhnya tersedia
    this.$nextTick(() => {
      document.title = 'Testimoni di Jasa Tugas dan Skripsi';
    });
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

.testimoni-container {
  padding: 20px;
}

</style>
