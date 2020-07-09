<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);
}
</style>