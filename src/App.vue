<template>
  <div id="app">
    <nav class="navbar-fixed">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <div class="navbar">
        <div :class="['navbar-links', { open: isMenuOpen }]">
          <router-link to="/" class="navbar-link" @click="toggleMenu">Home</router-link>
          <router-link to="/pelayanan" class="navbar-link" @click="toggleMenu">Layanan</router-link>
          <router-link to="/testimoni" class="navbar-link" @click="toggleMenu">Testimoni</router-link>
          <router-link to="/tentang-kami" class="navbar-link" @click="toggleMenu">Tentang Kami</router-link>
          <router-link to="/kontak-kami" class="navbar-link" @click="toggleMenu">Kontak Kami</router-link>
        </div>
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <div class="content">
      <router-view />
    </div>

    <footer>
      <p>&copy; {{ currentYear }} <a href="https://niradigital.id" target="_blank" rel="noopener noreferrer">NiraDigital</a>. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isMenuOpen: false, // Track if the menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu visibility
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo img {
  height: 50px; /* Sesuaikan tinggi logo sesuai kebutuhan */
}

.navbar-fixed {
  position: fixed; /* Navbar tetap di atas */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f1f1f1; /* Warna latar belakang navbar */
  z-index: 1000; /* Pastikan navbar berada di atas konten lainnya */
}

.navbar {
  display: flex;
  justify-content: flex-end; /* Menjaga navbar tetap di sebelah kanan */
  align-items: center;
  width: 100%;
}

.navbar-links {
  display: flex;
  gap: 20px; /* Jarak antar tautan */
}

.navbar-link {
  font-weight: bold;
  color: #2c3e50; /* Warna teks navbar */
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-link:hover {
  background-color: #ddd; /* Warna background saat hover */
}

.menu-toggle {
  display: none; /* Menyembunyikan menu toggle pada desktop */
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle .bar {
  width: 30px;
  height: 4px;
  background-color: #2c3e50;
  border-radius: 5px;
}

.content {
  margin-top: 80px; /* Tambahkan margin atas untuk menghindari konten tertutup oleh navbar */
}

footer {
  margin-top: 20px;
  padding: 10px 0;
  background-color: #f1f1f1;
  color: #2c3e50;
}

footer a {
  color: #2c3e50;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Responsivitas untuk mobile */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
    background-color: #f1f1f1; /* Warna latar belakang navbar pada mobile */
    padding: 20px 0;
  }

  .navbar-links.open {
    display: flex; /* Tampilkan navbar links ketika tombol hamburger diklik */
  }

  .menu-toggle {
    display: flex; /* Menampilkan menu toggle pada mobile */
  }

  .navbar-link {
    color: #2c3e50;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  .navbar-link:hover {
    background-color: #ddd;
  }
}
</style>
