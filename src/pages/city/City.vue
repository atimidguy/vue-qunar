<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :cities="cities" :hot="hotCities" :letter="clickedLetter" />
    <city-alphabet :cities="cities" @alphabet="handleAlphabet" />
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      clickedLetter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/mock/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    handleAlphabet(letter) {
      this.clickedLetter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style>
</style>