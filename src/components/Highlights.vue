<template>
  <section id="highlights" class="highlights-section">
    <div class="container">
      <h2 class="section-title">Past Performances Highlights</h2>

      <!-- Check for 'item' prop specifically -->
      <div class="grid" v-if="item">
        <HighlightsItem
          v-for="(val, key) in item"
          :key="key"
          :date="val.date"
          :type="val.type"
          :location="val.location"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HighlightsItem from "@/components/HighlightsItem.vue";

export default {
  name: "Highlights",
  components: { HighlightsItem },
  props: {
    // This MUST be 'item' to match the key in image_fe2171.png
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  overflow: visible !important;
}
.highlights-section {
  background-color: #000000;
  padding: 100px 20px;
  width: 100%;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 80px;
  }

  .grid {
    display: grid;
    // Creates the card look: 3 columns on wide screens, 1 on mobile
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .highlights-section .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
}
</style>
