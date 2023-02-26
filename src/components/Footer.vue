<template>
  <div class="main">
    <div class="main__container">
      <h2>KONTAKT</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spotify",
  props: {},
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: 0 auto;
  background-color: #000000;
  &__container {
    iframe {
      width: 100%;
      max-width: 1100px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
