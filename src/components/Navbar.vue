<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Beranda</router-link></li>
        <li><router-link to="/tentang-kami">Tentang Kami</router-link></li>
        <li><router-link to="/testimoni">Testimoni</router-link></li>
        <li><router-link to="/kontak-kami">Kontak Kami</router-link></li>
        <li><router-link to="/pelayanan">Pelayanan</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
  }
  
  .navbar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .navbar li {
    display: inline;
    margin-right: 20px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>