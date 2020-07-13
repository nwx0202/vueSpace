<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultiData} from 'network/home'
// import {Swiper, SwiperItem} from 'components/common/swiper'
import HomeSwiper from './childComps/HomeSwiper'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommands: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommands = res.data.recommend.list;
    });
  }
}
</script>

<style>
.home-nav {
  background-color: #ff8198;
  color: #fff;
}
</style>