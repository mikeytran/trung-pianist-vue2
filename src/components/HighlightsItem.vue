<template>
  <div class="perf-card">
    <div class="perf-card__date" v-html="date"></div>
    <div class="perf-card__content">
      <h3 class="perf-card__type" v-html="type"></h3>
      <!-- <div class="perf-card__location" v-html="location"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HighlightsItem",
  props: {
    date: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    // location: {
    //   type: String,
    //   default: "",
    // },
  },
};
</script>

<style lang="scss" scoped>
.perf-card {
  background-color: #111111 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;
  // This transition handles the "Lift"
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.4s ease !important;
  // 1. FORCE ALL TEXT WHITE BY DEFAULT
  color: #ffffff !important;

  &:hover {
    transform: translateY(-12px) !important;
    background-color: #1a1a1a !important;
    border-color: rgba(255, 255, 255, 0.4) !important;

    // Make spans brighter on hover
    ::v-deep span {
      opacity: 1 !important;
      color: #ffffff !important;
    }
  }

  // 2. TARGET THE SPANS (The year and city/country)
  &__date,
  &__location {
    ::v-deep span {
      display: block;
      color: #ffffff !important;
      font-weight: 300 !important;
      margin-top: 5px;
      font-size: 16px;
    }
  }

  &__date {
    margin-bottom: 25px;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__type {
    font-size: 19px;
    line-height: 1.5;
    color: #ffffff !important;
  }

  // &__location {
  //   flex-grow: 1;
  //   font-size: 1rem;
  //   color: #ffffff !important;
  // }
}
</style>
