<template>
  <v-app>
    <v-main class="body-bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
}

.body-bg {
  background-image: linear-gradient(
    to right,
    #4f6c97,
    #3c557c,
    #2a3f61,
    #182a48,
    #061730
  );
}
</style>
