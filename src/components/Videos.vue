<template>
  <div class="main" id="videos">
    <h2>VIDEOS</h2>
    <div class="main__container">
      <div class="main__container__videos">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLJjC4LnTQeL4MmoEfEIj7Bq7h6-r6iZIy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/10r5O28JHsQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="main__container__videos">
        <iframe
          src="https://drive.google.com/file/d/1GvSdY8JzuV1TGjbzmlc7Sd-gL8KlrPQs/preview"
          allow="autoplay"
        ></iframe
        ><iframe
          src="https://drive.google.com/file/d/1faFXzfYSlXjLYX7dlj7hCnnoaX8p-pNa/preview"
          allow="autoplay"
        ></iframe>
      </div>
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
    &__videos {
      display: flex;
      flex-direction: row;
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      iframe {
        width: 50%;
        height: 400px;
        display: block;
        margin: 0 auto;
        &:nth-of-type(odd) {
          margin-right: 30px;
          margin-bottom: 30px;
        }
      }
    }
  }
}

@media (max-width: $desktop-breakpoint-min) {
  .main {
    &__container {
      &__videos {
        flex-direction: column;
        iframe {
          width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
