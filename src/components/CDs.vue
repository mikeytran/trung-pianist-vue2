<template>
  <div id="cds" class="main">
    <h2>CDs</h2>
    <div class="main__container">
      <div class="items">
        <CDsItems v-bind="item.one" />
      </div>
    </div>
  </div>
</template>

<script>
import CDsItems from "@/components/CDsItems.vue";
export default {
  name: "CDs",
  components: {
    CDsItems,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
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
    .items {
      max-width: 1100px;
      margin: 0 auto;
    }
  }
}

@media (max-width: $desktop-breakpoint-min) {
  .main {
    &__container {
    }
  }
}
</style>
