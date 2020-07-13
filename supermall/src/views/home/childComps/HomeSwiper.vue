<template>
  <swiper>
    <swiper-item v-for="banner in banners" :key="banner.acm">
      <a :href="banner.link">
        <img :src="banner.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      defalut() {
        return []
      }
    }
  }
}
</script>
