<template>
  <div id="home" class="main">
    <div class="imgContainer">
      <img
        src="@/assets/images/cd-image.png"
        alt="CD"
        @click="scrollToSection"
      />
    </div>
    <div class="arrowContainer">
      <img
        src="@/assets/images/down-arrow.png"
        alt="arrow"
        @click="scrollToSectionArrow"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection() {
      const targetSection = document.getElementById("spotify");
      targetSection.scrollIntoView({ behavior: "smooth" });
    },
    scrollToSectionArrow() {
      const targetSection = document.getElementById("bio");
      targetSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url(../assets/images/main_pic1.jpg);
  background-repeat: no-repeat;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  .imgContainer {
    position: absolute;
    top: 90px;
    right: 50px;
    img {
      width: 100%;
      max-width: 300px;
      border: 1px solid #ffffff;
      cursor: pointer;
    }
  }
  .arrowContainer {
    position: absolute;
    bottom: 20px;
    left: 50%;
    img {
      width: 100%;
      max-width: 40px;
      cursor: pointer;
    }
  }
}

@media (max-width: $desktop-breakpoint-min) {
  .main {
    .imgContainer {
      right: 30px;
      img {
        max-width: 200px;
      }
    }
  }
}

@media (max-width: 500px) {
  .main {
    .imgContainer {
      top: 80px;
      right: 20px;
      img {
        max-width: 150px;
      }
    }
  }
}
</style>
