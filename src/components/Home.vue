<template>
  <div id="home" class="main"></div>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url(../assets/images/main_pic1.jpg);
  background-repeat: no-repeat;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
