<template>
  <div id="spotify" class="main">
    <div class="main__container">
      <h2>DISCOGRAPHY</h2>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/artist/5KfWFLWIq7WzmVu7JTsMIm?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
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
  background-image: url(../assets/images/wall-bg-v2.png);
  background-repeat: no-repeat;
  background-position: right center;
  &__container {
    max-width: 1100px;
    margin: 0 auto;
    h2 {
      color: #ffffff;
    }
  }
}
</style>
