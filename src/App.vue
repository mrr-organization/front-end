<template>
<div class="min-h-screen ">
  <nav class="bg-white p-1 fixed left-0 right-0">
    <div class="w-full h-full ">
    <div class="flex flex-row justify-center w-full relative ">
      <router-link to="/" class="text-2xl font-semibold self-center uppercase rounded-lg p-2" style="color:#312A21">MRR</router-link>
      <router-link to="/about" class=" my-1 text-base self-end font-semibold absolute right-4 rounded p-2  " style="color:#312A21; background-color: #FEF1E6; " href="#">About Me</router-link>
    </div>
  </div>

  </nav>
  <router-view/>
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
