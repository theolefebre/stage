<template>
  <div class="services-page">
    <h1>Nos Services</h1>
    <ul>
      <li>
        <router-link to="/services/couvreur-zingueur">Couverture-Zinguerie</router-link>
      </li>
      <li>
        <router-link to="/services/bardage-isolation">Bardage-Isolation</router-link>
      </li>
      <li>
        <router-link to="/services/plomberie-sanitaire">Plomberie-Sanitaire</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
.services-page {
  padding-top: 7em;
  text-align: center;
}

ul {
  list-style: none;
  padding-bottom: 3em;
}

li {
  margin: 15px 0;
}

a {
  text-decoration: none;
  color: #3498db;
  font-size: 1.2em;
}

a:hover {
  color: #2c3e50;
}
</style>
