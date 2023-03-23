<template>
  <div>
    <Navbar />
    <Home />
    <Bio v-bind="bio" />
    <Calendar v-bind="calendar" />
    <Spotify />
    <Videos />
    <Gallery />
  </div>
</template>

<script>
import Router from "./router";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";
import Calendar from "./components/Calendar.vue";
import Spotify from "./components/Spotify.vue";
import Videos from "./components/Videos.vue";
import Gallery from "./components/GalleryCarousel.vue";

export default {
  name: "App",
  Router,
  components: {
    Home,
    Navbar,
    Bio,
    Calendar,
    Spotify,
    Videos,
    Gallery,
  },
  data() {
    return {
      bio: {
        imageUrl: "bio_img-v2.jpg",
        text: "Vietnamese pianist, born on September 30, 1996 in Ha Noi, living in Poland since childhood. Currently, he is continuing his postgraduate studies under prof. Katarzyna Popowa-Zydroń at the Academy of Music in Bydgoszcz.<br><br>His latest achievements include: victory at the 17th National Piano Festival “Chopin Interpretations of the Young” in Konin-Żychlin (2021), 5th prize at the Polish National Fryderyk Chopin Piano Competition in Warsaw (2020), Grand Prix at the International Chamber Music Competition in Vietnam (2019) and 3rd prize at the Karlovac International Piano Competition in Croatia (2019). In 2021 he participated in the 18th International Fryderyk Chopin Piano Competition in Warsaw.<br><br>He has performed in Europe: Germany, France, Russia, Ukraine, Hungary and Poland, as well as in the United States, Thailand, South Korea, Japan and Vietnam. During the world exhibition “EXPO2020” in Dubai, he gave a series of recitals at the Poland Pavilion.<br><br>As a soloist, he performed with the Vietnam National Symphony Orchestra, Hanoi Symphonic Orchestra, the Warsaw Philharmonic Orchestra, the Polish Radio Orchestra and the Lublin Philharmonic Orchestra, under the baton of conductors such as: Le Phi Phi, Honna Tetsuji, Łukasz Borowicz, Marek Pijarowski, Wojciech Rodek.<br><br>The pianist performs chamber music. He cooperates among others with Ulysses Quartet, Arod Quartet, Arso Quintet.<br><br>He has performed at the festivals: Artur Rubinstein Festival in Łódź (2019), Frost Chopin Piano Festival in Miami (2018, 2019), at the Chopin concerts in Żelazowa Wola, Fryderyk Chopin Museum, as well as in the Royal Łazienki Park.<br><br>He has participated in numerous master classes conducted by Dang Thai Son, Kevin Kenner, Tatiana Shebanowa, Dmitri Alexeev and Andrzej Jasiński.",
      },
      calendar: {
        item: {
          one: {
            date: "26 MAR<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Ballet Symphony and Orchestra<br /><span style='font-weight:normal;font-size:16px;'>S.Rachmaninoff: Rhapsody on a theme of Paganini Op.43</span>",
            location:
              "Ho Chi Minh City Opera House<br /><span style='font-weight:normal;font-size:16px;'>Ho Chi Minh, Vietnam</span>",
            ctaLink:
              "https://ticketbox.vn/ticket-booking/86750/widget/72452?fbclid=IwAR0MNvKUcotGSl-h_tZmEhz_KfSyQzhi-5vETyuyQ7diWupeh4MpesD3K38#/step-select-",
            ctaText: "TICKETS",
          },
          two: {
            date: "21 MAY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Nagaoka Lyric Hall<br /><span style='font-weight:normal;font-size:16px;'>Nagaoka, Japan</span>",
            ctaLink:
              "https://www.nagaoka-caf.or.jp/lyric/performance/event/230521-2/",
            ctaText: "TICKETS",
          },
          three: {
            date: "24 MAY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Maruhon Makkiart Terrace<br /><span style='font-weight:normal;font-size:16px;'>Ishinomaki, Japan</span>",
            ctaLink: "https://makiart.jp/foevent/event_230524/",
            ctaText: "TICKETS",
          },
          four: {
            date: "25 MAY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Suntory Hall Blue Rose<br /><span style='font-weight:normal;font-size:16px;'>Tokyo, Japan</span>",
            ctaLink:
              "https://www.suntory.com/culture-sports/suntoryhall/schedule/detail/20230525_S_3.html",
            ctaText: "TICKETS",
          },
          five: {
            date: "9 JULY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "F.Chopin: Piano Concerto in e-minor Op.11",
            location:
              "Hanoi Opera House<br /><span style='font-weight:normal;font-size:16px;'>Hanoi, Vietnam</span>",
          },
          six: {
            date: "12 JULY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Collegium Novum Hall<br /><span style='font-weight:normal;font-size:16px;'>Krakow, Poland</span>",
          },
          seven: {
            date: "22-23 JULY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Chopin Museum<br /><span style='font-weight:normal;font-size:16px;'>Warsaw, Poland</span>",
          },
          eight: {
            date: "30 JULY<br /><span style='font-weight:normal;font-size:16px;'>2023</span>",
            type: "Piano Recital",
            location:
              "Royal Lazienki Park<br /><span style='font-weight:normal;font-size:16px;'>Warsaw, Poland</span>",
          },
        },
      },
      // cds: {
      //   item: {
      //     one: {
      //       imageUrl: "cd-image.png",
      //       date: "CD - June 3, 2022",
      //       type: "Chopin",
      //       desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      //     },
      //   },
      // },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";
</style>
