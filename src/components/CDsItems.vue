<template>
  <div class="item">
    <div class="left-block">
      <img :src="require(`@/assets/images/${imageUrl}`)" />
    </div>
    <div class="right-block">
      <p>{{ date }}</p>
      <p>{{ type }}</p>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CDs",
  components: {},
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  .left-block {
    width: 100%;
    img {
      width: 100%;
      max-width: 350px;
    }
  }
  .right-block {
    width: 100%;
    padding: 0 30px;
    p {
      text-align: left;
      &:nth-of-type(1) {
        font-size: 14px;
      }
      &:nth-of-type(2) {
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 615px) {
  .item {
    flex-direction: column;
    align-items: center;

    .right-block {
      padding: 0;
      margin-top: 20px;
    }
  }
}
</style>
