<template>
  <div class="main">
    <div class="main__container">
      <h2>GALLERY</h2>
      <!-- Gallery -->
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <a
            href="https://trung-pianist.netlify.app/img/piano.33bdc7fb.jpg"
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
            href="https://trung-pianist.netlify.app/img/img-black.d4c84b11.jpg"
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
          <a
            href="https://trung-pianist.netlify.app/img/portrait.78d95c23.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/portrait.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Portrait closeup"
            />
          </a>

          <a
            href="https://trung-pianist.netlify.app/img/piano-landscape.80ee85bf.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/piano-landscape.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Piano"
            />
          </a>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <a
            href="https://trung-pianist.netlify.app/img/piano-closeup.6691ca07.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/piano-closeup.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Piano performance"
            />
          </a>

          <a
            href="https://trung-pianist.netlify.app/img/portrait-2.f0598335.jpg"
            data-toggle="lightbox"
            data-gallery="gallery"
          >
            <img
              src="../assets/images/gallery/portrait-2.jpg"
              class="w-100 shadow-1-strong rounded mb-4 hover-shadow"
              alt="Portrait"
            />
          </a>
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
