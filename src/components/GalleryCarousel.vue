<template>
  <div class="main">
    <div class="main__container">
      <h2>GALLERY</h2>
      <!-- Gallery -->
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <a
            href="http://localhost:8080/img/piano.834b7e0e.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/piano.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Piano"
            />
          </a>
          <a
            href="http://localhost:8080/img/piano.834b7e0e.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/img-black.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Portrait"
            />
          </a>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../assets/images/gallery/portrait.jpg"
            class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
            alt="Portrait closeup"
          />

          <img
            src="../assets/images/gallery/piano-landscape.jpg"
            class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
            alt="Piano"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="../assets/images/gallery/piano-closeup.jpg"
            class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
            alt="Piano performance"
          />

          <img
            src="../assets/images/gallery/portrait-2.jpg"
            class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
            alt="Portrait"
          />
        </div>
      </div>
      <!-- Gallery -->
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
