<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff8198'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.active {
  color: #f0f;
}
</style>