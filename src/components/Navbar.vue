<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#home">Viet Trung Nguyen</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li
          class="nav-item"
          v-for="(route, index) in routes"
          :key="index"
          @click="navbarCollapse"
        >
          <router-link
            class="nav-link"
            :to="route.path"
            @click.native="scrollTo(route.id)"
            >{{ route.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: "Bio", path: "/bio", id: "bio" },
        { name: "Calendar", path: "/calendar", id: "calendar" },
        { name: "Discography", path: "/discography", id: "spotify" },
        { name: "Videos", path: "/videos", id: "videos" },
        { name: "Gallery", path: "/gallery", id: "gallery" },
      ],
    };
  },
  mounted() {
    window.eventListener("resize", () => {
      const navbar = document.getElementById("navbarNav");
      if (window.innerWidth > 992) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
    });
  },
  methods: {
    scrollTo(id) {
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
    navbarCollapse() {
      if (window.innerWidth < 992) {
        const navbar = document.getElementById("navbarNav");
        navbar.classList.remove("show");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-dark {
  background-color: black !important;
}

.navbar-dark .navbar-brand {
  color: #ffffff !important;
  font-size: 20px !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: #ffffff !important;
  font-size: 20px !important;
}

.navbar-expand-lg .navbar-nav {
  margin-left: auto !important;
}

.navbar {
  padding: 0.5rem 2rem !important;
}

.navbar-dark .navbar-toggler {
  color: #ffffff !important;
  border-color: #ffffff;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
