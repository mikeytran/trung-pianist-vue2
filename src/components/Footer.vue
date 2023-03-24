<template>
  <div class="main">
    <div class="main__container">
      <p>
        Website by:
        <a href="https://www.linkedin.com/in/mike-tran-uk/" target="_blank"
          >Mike Tran</a
        >
      </p>
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
  padding: 20px 20px 10px;
  &__container {
    p {
      text-align: center;
    }
  }
}
</style>
