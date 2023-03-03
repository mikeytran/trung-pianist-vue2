<template>
  <div>
    <Navbar />
    <Home />
    <Bio v-bind="bio" />
    <Calendar v-bind="calendar" />
    <Cds v-bind="cds" />
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
import Cds from "./components/CDs.vue";
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
    Cds,
    Spotify,
    Videos,
    Gallery,
  },
  data() {
    return {
      bio: {
        imageUrl: "bio_img-v2.jpg",
        text: 'Wietnamski pianista urodzony 30 września 1996 roku w Ha Noi od dziecka mieszkający w Polsce. Aktualnie kontynuuje studia podyplomowe u prof. Katarzyny Popowej-Zydroń w Akademii Muzycznej w Bydgoszczy.<br /><br />Do jego ostatnich osiągnięć należą: zwycięstwo w XVII Ogólnopolskim Festiwalu Pianistycznym „Chopinowskie Interpretacje Młodych” w Koninie-Żychlinie (2021), V nagroda na Ogólnopolskim Konkursie im. Fryderyka Chopina w Warszawie (2020), Grand Prix na Międzynarodowym Konkursie Muzyki Kameralnej w Wietnamie (2019) i III nagroda na Międzynarodowym Konkursie Pianistycznym Karlovac w Chorwacji (2019). W 2021 wziął udział w drugim etapie XVIII Międzynarodowym Konkursie Pianistycznym im. Fryderyka Chopina w Warszawie.<br /><br /> Koncertował w Europie: Niemczech, Francji, Rosji, Ukrainie, Węgrzech i w Polsce, oraz w Stanach Zjednoczonych, Tajlandii, Korei Południowej, Japonii i Wietnamie. W trakcie wystawy światowej "Expo 2020" w Dubaju dał cykl recitali w ramach koncertów NIFC w Polskim Pawilonie. Jako solista wystąpił z Vietnam National Symphony Orchestra, Hanoi Symphonic Orchestra, Orkiestrą Filharmonii Narodowej w Warszawie, # Orkiestrą Polskiego Radia czy Orkiestrą Filharmonii Lubelskiej, m.in. pod batutą takich dyrygentów jak: Le Phi Phi, Honna Tetsuji, Łukasz Borowicz czy Marek Pijarowski. Pianista wykonuje także muzykę kameralną współpracując m.in z Ulysses Quartet, Arod Quartet oraz Arso Quintet. W dotychczasowym dorobku ma występy m.in. na festiwalach im. Artura Rubinsteina w Łodzi (2019), Frost Chopin Piano Festival w Miami (2018, 2019), na koncertach chopinowskich w Żelazowej Woli, Muzeum Fryderyka Chopina czy w Łazienkach Królewskich. <br /><br /> Brał udział w licznych kursach mistrzowskich, prowadzonych między innymi przez: Tatianę Shebanovą, Dang Thai Sona, Kevina Kennera, Dmitri Alexeeva czy Andrzeja Jaśinski.',
      },
      calendar: {
        item: {
          one: {
            date: "3CZE<br /><span style='font-weight:normal;font-size:16px;'>2022</span>",
            type: "Arctic Chamber Music Festival<br /><span style='font-weight:normal;font-size:16px;'>Chopin Concerto No. 2 in F minor and Chamber Concerts </span>",
            location:
              "Royal Albert Hall<br /><span style='font-weight:normal;font-size:16px;'>London, UK</span>",
            ctaLink: "https://google.com",
            ctaText: "TICKETS",
          },
          two: {
            date: "17LIP<br /><span style='font-weight:normal;font-size:16px;'>2022</span>",
            type: "Recital",
            location:
              "Filharmonia Naradowa<br /><span style='font-weight:normal;font-size:16px;'>Warszawa, Polska</span>",
          },
          three: {
            date: "7AUG<br /><span style='font-weight:normal;font-size:16px;'>2022</span>",
            type: "Recital",
            location:
              "Łazienki Królewskie<br /><span style='font-weight:normal;font-size:16px;'>Warszawa, Polska</span>",
            ctaLink: "https://google.com",
            ctaText: "MORE INFO",
          },
        },
      },
      cds: {
        item: {
          one: {
            imageUrl: "cd-image.png",
            date: "CD - June 3, 2022",
            type: "Chopin",
            desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
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
