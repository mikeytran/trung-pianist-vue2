<template>
  <div class="main" id="videos">
    <div class="main__container">
      <h2>VIDEOS</h2>
      <iframe
        width="1100"
        height="600"
        src="https://www.youtube.com/embed/videoseries?list=PLJjC4LnTQeL4MmoEfEIj7Bq7h6-r6iZIy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
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
  &__container {
    iframe {
      width: 100%;
      max-width: 1100px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
