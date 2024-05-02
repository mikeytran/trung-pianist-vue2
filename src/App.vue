<template>
  <div>
    <Navbar />
    <Home />
    <Bio v-bind="bio" />
    <Calendar v-bind="calendar" />
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
        text: "Born on September 30, 1996, in Ha Noi, Viet Trung Nguyen's latest achievements include a victory at the 17th National Piano Festival &#8220;Chopin's Interpretations of the Young&#8220; in Konin-Zychlin (2021), 5th prize at the Polish National Frydery Chopin Piano Competition in Warsaw (2020), Grand Prix at the International Chamber Music Competition in Vietnam (2019), and 3rd prize at the Karlovac International Piano Competition in Croatia (2019). In 2021, he participated in the 18th International Fryderyk Chopin Piano Competition in Warsaw.<br><br>He has performed in many countries, such as Germany, France, Russia (Saint Petersburg Philharmonic Grand Hall), Ukraine, Hungary, and Poland, as well as in the United States, Thailand, South Korea (Seoul Arts Center). Japan (Suntory Hall), and Vietnam. During the world exhibition &#8220;EXPO2020&#8220; in Dubai, he gave a series of recitals at the Poland Pavilion.<br><br>As a soloist, he performed with the Sun Symphony Orchestra, the Vietnam National Symphony Orchestra, the Hanoi Symphonic Orchestra, the Ho Chi Minh Ballet Symphony Orchestra, the Japan-Vietnam Festival Orchestra, the Warsaw Philharmonic Orchestra, the Polish Radio Orchestra, the Lublin Philharmonic Orchestra, the Podkarpackie Philharmonic Orchestra under the baton of Honna Tetsuji, Olivier Ochanine, Phi Phi, Tran Vuong Thach, Dong Quang Vinh, Wojciech Czepiel, Łukasz Borowicz, Marek Pijarowski, Wojciech Rodek, and Jacek Rogala.<br><br>As a chamber musician, he collaborated with, among others, the Ulysses Quartet, Arod Quartet, and Arso Quintet.<br><br>He has performed at festivals such as A. Rubinstein in Łódz (2019,2022) and Frost Chopin Festival in Miami (2018, 2019), at Chopin concerts in Zelazowa Wola and the Fryderyk Chopin Museum, as well as at the Royal Lazienki Park. He has participated in numerous master classes by Dang Thai Son, Kevin Kenner, Tatiana Shebanova, Dmitri Alexeev, and Andrzej Jasinski.<br><br>He graduated from his studies under Prof. Katarzyna Popowa-Zydron at the Academy of Music in Bydgoszcz. He continues his Doctor of Musical Arts studies under Prof. Kevin Kenner at Frost School of Music in Miami.",
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
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";
</style>
