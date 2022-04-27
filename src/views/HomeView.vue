<template lang="pug">
  #HomePage
    .content
      v-tabs.tab-group(v-model="tab" grow)
        v-tab(v-for="item in items" :key="item") {{item}}
      InputGroup(
        :items="items"
        :tab="tab"
        @on-submit="CreateChip"
      )
      v-chip(
        v-for="(item,index) in chips"
        class="ma-2"
        close
        color="orange"
        text-color="white"
        close-icon="mdi-delete"
        @click:close="DeleteChip(index)"
      ) {{item}}
        
</template>

<script>
import InputGroup from "../components/InputGroup.vue";
export default {
  name: "HomePage",
  components: { InputGroup },
  data() {
    return {
      items: ["text", "radio", "select"],
      tab: 2,
      chips: [],
    };
  },
  created() {
    this.GetCityList();
  },
  methods: {
    CreateChip(val) {
      this.chips.push(val);
    },
    DeleteChip(index) {
      this.chips.splice(index, 1);
    },
    // 獲得城市人名資料存入chips
    async GetCityList() {
      const res = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
        { method: "GET" }
      ).then((response) => response.json());
      this.chips = res.map((object) => {
        return object.name + " in " + object.city;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 50px;
  margin: 0 auto;
  width: 500px;
}
</style>
