<template>
  <div class="main">
    <div class="main__container">
      <div class="left-block">
        <p>&#169; 2023 Nguyen Viet Trung</p>
      </div>
      <div class="right-block">
        <p>
          Website by:
          <a href="https://www.linkedin.com/in/mike-tran-uk/" target="_blank"
            >Mike Tran</a
          >
        </p>
      </div>
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
  padding-top: 30px;
  padding-bottom: 10px;
  &__container {
    max-width: 1760px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .left-block,
    .right-block {
      width: 50%;
    }
    .right-block {
      p {
        text-align: right;
      }
    }
  }
}

@media (max-width: 600px) {
  .main {
    &__container {
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
