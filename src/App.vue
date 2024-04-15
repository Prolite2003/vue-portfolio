<template>
  <nav>
    <router-link to="/">Who am i?</router-link>
    <router-link to="/articles">Articles</router-link>
    <router-link to="/contact">Contact</router-link>
    <h2>Stefan Schooneveld</h2>
  </nav>
  <router-view />
  <footer>
    <h3>Stefan Schooneveld</h3>
    <nav>
      <router-link to="/">Who am i?</router-link> |
      <router-link to="/articles">Articles</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div class="socials">
      <p>Follow me on</p>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  </footer>
</template>

<style></style>
