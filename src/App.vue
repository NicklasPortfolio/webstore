<template>
  <div id="app">
    <header>
      <div class="top-elements">
        <h1>WebTools</h1>
        <small>A webshop for all your handy needs</small>
        <div class="cart">
          <div>
            <router-link to="/cart"><v-icon name="bi-cart-check" scale="2"></v-icon></router-link>
          </div>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search...">
          <button type="submit"><v-icon name="hi-solid-search" scale="1"></v-icon></button>
        </div>
      </div>
      <div class="top-links">
        <router-link @hover="displayLogin" to="/login">Login</router-link>
        <small>or</small>
        <router-link to="/createacc">Create New Account</router-link>
      </div>
      <div class="nav">
        <nav v-for="(value, key) in navLinks" :key="key">
          <div class="nav-link">
            <div>
              <router-link :to="value.link">{{ value.name }}</router-link>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  components: [],

  data() {
    return {
      navLinks: {
        1: { link: '/', name: 'Home' },
        2: { link: '/products', name: 'Products' },
      },
    }
  },

  methods: {
    displayLogin() {
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #eee;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  position: relative;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 130px;

  background: rgb(250, 150, 0);
  border-bottom: 3px solid dimgray;
}

a {
  color: white;
  text-decoration: none;
}

.top-elements {
  display: inline-flex;
  padding-left: 8px;
}

.top-elements h1 {
  margin: 0;
}

.top-elements small {
  align-self: flex-end;

  font-style: italic;

  margin-left: 5px;
  padding-bottom: 5px;
}

.search-bar {
  position: absolute;
  top: 10px;
  right: 80px;
  display: flex;
  align-items: center;

  border: 2px solid white;
  border-radius: 3px;
}

.search-bar input {
  flex: 1;
  border: none;
  padding: 5px;

  background-color: #ccc;
}

.search-bar button {
  border: 0;
  padding: 5px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar button:hover {
  background-color: #aaa;
  cursor: pointer;
}

.cart {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 2px solid #fff;
}

.cart div {
  padding: 0;
  margin: 0;
}

.cart div:hover {
  background-color: #c36b00;
  opacity: 0.5;
}

.top-links {
  display: flex;
  align-items: flex-start;
  padding-left: 8px;
  position: relative;
}

.top-links small {
  padding-left: 5px;
  padding-right: 5px;
  font-style: italic;
}

.nav {
  display: flex;
  margin-top: auto;
}

.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #fff;
  border-bottom: none;
  border-right: none;

  width: fit-content;
  height: 35px;

  margin: 0;
}

.nav-link div {
  display: flex;
  justify-content: center;
  align-items: center;

  width: inherit;
  height: inherit;
}

.nav-link div:hover {
  background-color: #c36b00;
  opacity: 0.5;
}

.nav-link a {
  padding: 10px 25px 10px 25px;
}

.router-link-exact-active {
  color: navy;
  text-decoration: underline;
}
</style>
