<template>
  <div id="contact" class="main">
    <h2>CONTACT</h2>
    <div class="main__container">
      <a href="https://www.instagram.com/trung_pianist/" target="_blank">
        <img src="@/assets/images/insta.png" alt="Insta" />
      </a>
      <a
        href="https://open.spotify.com/artist/5KfWFLWIq7WzmVu7JTsMIm?si=r5oAPR59SfKLpTp5MYhntQ"
        target="_blank"
      >
        <img src="@/assets/images/spotify.png" alt="Spotify" />
      </a>
      <a href="https://www.youtube.com/@TrungNguyen-bc7ln" target="_blank">
        <img src="@/assets/images/yt-icon.png" alt="Youtube" />
      </a>
      <a href="https://www.facebook.com/trungvietnguyenpianist" target="_blank">
        <img src="@/assets/images/fb.png" alt="Facebook" />
      </a>
      <a href="mailto:viettrung96@gmail.com" target="_blank">
        <img src="@/assets/images/gmail.png" alt="Gmail" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: #000000;
  &__container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 100%;
      max-height: 40px;
    }
  }
}

@media (max-width: 600px) {
  .main {
    &__container {
      max-width: 350px;
      img {
        max-height: 35px;
      }
    }
  }
}
@media (max-width: 450px) {
  .main {
    &__container {
      max-width: 300px;
      img {
        max-height: 30px;
      }
    }
  }
}
</style>
