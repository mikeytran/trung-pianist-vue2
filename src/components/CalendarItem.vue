<template>
  <div class="item">
    <div class="left-block">
      <div class="date">
        <p v-html="date"></p>
      </div>
    </div>
    <div class="right-block">
      <div class="type">
        <p v-html="type"></p>
      </div>
      <div class="location">
        <p v-html="location"></p>
      </div>
      <div class="cta__container">
        <a href="#">{{ ctaText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    date: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    ctaText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  &:nth-of-type(1) {
    margin-top: 0;
  }
  p {
    text-align: left;
    font-size: 19px;
    line-height: 22px;
    font-weight: bold;
    padding: 0 10px;

    span {
      font-size: 16px;
      font-weight: normal;
    }
  }

  .left-block {
    display: flex;
    flex-direction: row;
    width: 10%;
    .date {
      width: 100%;
      p {
        padding-left: 0;
      }
    }
  }

  .right-block {
    display: flex;
    flex-direction: row;
    width: 90%;

    .type {
      width: 45%;
      max-width: 400px;
      margin: 0 auto;
    }
    .location {
      width: 35%;
      max-width: 250px;
      margin: 0 auto;
    }
    .cta__container {
      width: 20%;
      margin: 0 auto;
      background-color: hsl(356, 86%, 42%);
      max-height: 40px;
      margin: 5px 0 0;
      padding: 7px;
      max-width: 300px;
      text-align: center;
      a {
        background-color: hsl(356, 86%, 42%);
        color: #ffffff;
      }
    }
  }
}
@media (max-width: 615px) {
  .item {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px 0 30px;
    &:nth-of-type(1) {
      padding-top: 0;
    }
    p {
      padding: 0;
      font-size: 18px;
    }
    .left-block {
      border-right: 1px solid #ffffff;
      width: 20%;
    }
    .right-block {
      flex-direction: column;
      padding: 0 0 0 15px;
      width: 80%;
      .type {
        width: 100%;
        margin: 0;
      }
      .location {
        width: 100%;
        margin: 0;
      }
      .cta__container {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
