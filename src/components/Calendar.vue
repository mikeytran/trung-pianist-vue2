<template>
  <div id="calendar" class="main">
    <h2>KALENDARZ</h2>
    <div class="main__container">
      <div class="items">
        <CalendarItem v-bind="item.one" />
        <CalendarItem v-bind="item.two" />
        <CalendarItem v-bind="item.three" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarItem from "@/components/CalendarItem.vue";
export default {
  name: "Calendar",
  components: {
    CalendarItem,
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
  background-color: #f7f7f7;
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
}
</style>
