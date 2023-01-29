<template>
  <div class="main">
    <h2>DISCOGRAPHY</h2>
    <iframe
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/artist/5KfWFLWIq7WzmVu7JTsMIm?utm_source=generator&theme=0"
      width="100%"
      height="340"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
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
  max-width: 800px;
  padding: 0px 20px;
  margin: 0 auto;
}
@media (max-width: $desktop-breakpoint-min) {
  .main {
  }
}
</style>
