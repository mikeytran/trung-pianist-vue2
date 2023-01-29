<template>
  <div id="bio" class="main">
    <h2>BIOGRAFIA</h2>
    <div class="main__container">
      <div class="left-block">
        <img :src="require(`@/assets/images/${imageUrl}`)" />
      </div>
      <div class="right-block">
        <p v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 0 20px;
  &__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .left-block {
      width: 30%;
      img {
        width: 100%;
      }
    }
    .right-block {
      width: 60%;
      p {
        text-align: justify;
        margin-left: 30px;
      }
    }
  }
}

@media (max-width: $desktop-breakpoint-min) {
  .main {
    &__container {
      flex-direction: column;

      .left-block {
        width: 100%;
      }
      .right-block {
        width: 100%;
        p {
          margin-top: 30px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
