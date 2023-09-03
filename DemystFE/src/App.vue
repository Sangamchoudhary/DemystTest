<template>
  <div id="mainApp">
    <header-nav></header-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import HeaderNav from "./components/NavBar/HeaderNav.vue";
export default {
  components: { HeaderNav },
};
</script>

<style>
body {
  background-color: azure;
}
</style>
