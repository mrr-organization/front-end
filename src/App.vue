<template>
  <div class="">
    <nav class="fixed top-0 left-0 right-0 p-1 bg-white">
      <div class="w-full h-full">
        <div class="relative flex flex-row justify-center w-full">
          <router-link
            to="/"
            class="self-center p-2 text-2xl font-semibold uppercase rounded-lg"
            style="color: #384bb1"
            >MRR</router-link
          >
          <router-link
            to="/about"
            class="absolute self-end p-2 my-1 text-base font-semibold rounded right-4"
            style="color: #ffffff; background-color: #384bb1 "
            href="#"
            >About Me</router-link
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
