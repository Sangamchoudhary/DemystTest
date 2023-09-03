<template>
  <nav class="navigation-bar">
    <v-toolbar color="#232323">
      <img
        src="https://demyst.com/_next/static/media/DemystLogo.72890529.svg"
        style="width: 7%; height: 60%; margin-left: 2%; filter: invert(90%)"
        class="logo"
      />
      <p class="temp"></p>
      <router-link to="/">
        <v-btn text="" class="mr-2 header-text1" color="white"> HOME </v-btn>
      </router-link>

      <router-link to="/">
        <v-btn text="" class="mr-2 header-text2" color="white"> LOAN </v-btn>
      </router-link>

      <router-link to="/">
        <v-btn text="" class="mr-2 header-text2" color="white">
          ABOUT-US
        </v-btn>
      </router-link>
    </v-toolbar>
  </nav>
</template>

<style>
.header-text {
  font-weight: bold;
  color: white;
}
.navigation-bar {
  display: flex;
}
.temp {
  flex: 70%;
}
</style>
