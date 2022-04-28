<template lang="pug">
  .content {{ title }}
</template>
<script>
export default {
  name: "RouterView",
  data() {
    return {
      title:
        "可切換頁面其實我不確定這邊是指畫面換組件切換就好還是router保險還是多做一頁",
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  margin: 60px auto 0px auto;
  width: 60vw;
  border-radius: 20px;
  border: 2px solid #93ad65;
  padding: 20px;
}
</style>
