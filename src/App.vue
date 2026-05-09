<template>
  <div>
    <Navbar />
    <Home />
    <Bio v-bind="bio" />
    <Calendar v-bind="calendar" />
    <Highlights v-bind="highlights" />
    <Spotify />
    <Videos />
    <Gallery />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import Router from "./router";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";
import Calendar from "./components/Calendar.vue";
import Highlights from "./components/Highlights.vue";
import Spotify from "./components/Spotify.vue";
import Videos from "./components/Videos.vue";
import Gallery from "./components/GalleryCarousel.vue";
import SocialMedia from "./components/SocialMedia.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  Router,
  components: {
    Home,
    Navbar,
    Bio,
    Calendar,
    Highlights,
    Spotify,
    Videos,
    Gallery,
    SocialMedia,
    Footer,
  },
  data() {
    return {
      bio: {
        imageUrl: "bio_img-v2.jpg",
        text: "Viet Trung Nguyen is a Vietnamese pianist born in Hanoi who has lived in Poland since childhood. He graduated in 2020 from the Academy of Music in Bydgoszcz, where he studied under Professor Katarzyna Popowa-Zydroń. He is currently continuing his studies with Professor Kevin Kenner at the Frost School of Music.<br><br>His recent achievements include first prize at the 17th National Piano Festival Chopin Interpretations of the Young in Konin-Żychlin (2021), fifth prize at the Polish National Fryderyk Chopin Piano Competition in Warsaw (2020), Grand Prix at the International Chamber Music Competition in Vietnam (2019), and third prize at the Karlovac International Piano Competition in Croatia (2019). In 2021 and 2025, he represented both Vietnam and Poland at the 18th and 19th International Fryderyk Chopin Piano Competition in Warsaw.<br><br>He has performed throughout Europe, including in Germany, France, Denmark, Russia (at the Saint Petersburg Philharmonia), Ukraine, Hungary, and Poland, as well as in the United States, Thailand, South Korea (Seoul Arts Center), Japan (Suntory Hall), and Vietnam. During Expo 2020 in Dubai, he presented a series of recitals at the Poland Pavilion.<br><br>As a soloist, he has appeared with the Vietnam National Symphony Orchestra, Hanoi Symphony Orchestra, Ho Chi Minh City Ballet Symphony Orchestra and Opera, Japan-Vietnam Festival Orchestra, Warsaw Philharmonic Orchestra, Polish Radio Orchestra, and Lublin Philharmonic Orchestra under the baton of conductors including Wojciech Czepiel, Le Phi Phi, Honna Tetsuji, Łukasz Borowicz, Marek Pijarowski, Wojciech Rodek, Jacek Rogala, Dong Quang Vinh, and Tran Vuong Thach.<br>An active chamber musician, he collaborates with ensembles including the Ulysses Quartet, Arod Quartet, and Arso Quintet.<br><br>He has performed at numerous prestigious festivals and venues, including the Artur Rubinstein Festival in Łódź (2019, 2022), the Frost Chopin Piano Festival in Miami (2018, 2019), the Chopin Concerts in Żelazowa Wola, the Fryderyk Chopin Museum, and the Royal Łazienki Park.",
      },
      calendar: {
        item: {
          one: {
            date: "22 MAY<br /><span style='font-weight:normal;font-size:16px;'>2026</span>",
            type: "Piano duo recital with Kevin Kenner",
            location:
              "Ho Guom Opera House<br /><span style='font-weight:normal;font-size:16px;'>Ha Noi, Vietnam</span>",
            ctaLink: "https://www.orchestars.vn/",
            ctaText: "TICKETS",
          },
          two: {
            date: "24 MAY<br /><span style='font-weight:normal;font-size:16px;'>2026</span>",
            type: "Piano duo recital with Kevin Kenner",
            location:
              "Ho Chi Minh Opera House<br /><span style='font-weight:normal;font-size:16px;'>Ho Chi Minh, Vietnam</span>",
            ctaLink: "https://www.orchestars.vn/",
            ctaText: "TICKETS",
          },
          three: {
            date: "31 MAY<br /><span style='font-weight:normal;font-size:16px;'>2026</span>",
            type: "Piano Recital",
            location:
              "Ho Guom Opera House<br /><span style='font-weight:normal;font-size:16px;'>Hanoi, Vietnam</span>",
            ctaLink: "https://www.orchestars.vn/",
            ctaText: "TICKETS",
          },
        },
      },
      highlights: {
        item: {
          // one: {
          //   date: "22 MAY<br /><span>2026</span>",
          //   type: "Piano duo recital with Kevin Kenner",
          // },
          two: {
            date: "FEB<br /><span>2026</span>",
            type: "Chopin Effect - series of concerts organized by Chopin Institute",
          },
          three: {
            date: "30-31 JAN<br /><span>2026</span>",
            type: "Performance with the Tubingen Academy Orchestra, Tubingen, Germany",
          },
          four: {
            date: "18 JAN<br /><span>2026</span>",
            type: "Acecook Concert in Ho Guom Opera house with Vietnam National Symphony Orchestra",
          },
          five: {
            date: "17 JAN<br /><span>2026</span>",
            type: "Performance with Eric Lu with the Vietnam National Symphony Orchestra and Sun Symphony Orchestra",
          },
          six: {
            date: "9 JAN<br /><span>2026</span>",
            type: "Acecook Concert in Ho Chi Minh Opera House with the Vietnam National Symphony Orchestra",
          },
          seven: {
            date: "21-22 DEC<br /><span>2025</span>",
            type: "Performance with Tubingen Academy Orchestra in Ho Guom Opera house, Hanoi ",
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";
</style>
