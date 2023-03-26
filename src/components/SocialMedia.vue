<template>
  <div id="contact" class="main">
    <h2>FOLLOW ME</h2>
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
    <h2>BUSINESS INQUIRIES</h2>
    <div class="menager__container">
      <p>Zofia Rogala</p>
      <a href="mailto:rogala.zofia@gmail.com" target="_blank"
        >rogala.zofia@gmail.com</a
      >
      <a href="tel:+48 601 867 724">+48 601 867 724</a>
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
  h2 {
    &:nth-of-type(2) {
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }
  .menager__container {
    max-width: 400px;
    margin: 0 auto;
    p {
      text-align: center;
      font-size: 19px;
      margin-bottom: 0px;
    }
    a {
      display: block;
      text-align: center;
      font-size: 19px;
    }
  }
  &__container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    img {
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
