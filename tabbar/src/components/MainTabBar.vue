<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#f0f00f">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg">
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#f0f00f">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg">
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#f0f00f">
      <img slot="item-icon" src="../assets/img/tabbar/shopcart_active.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#f0f00f">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg">
      <div slot="item-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>