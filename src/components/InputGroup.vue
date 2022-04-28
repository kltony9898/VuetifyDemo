<template lang="pug">
  #InputGroup
    .input-group
      v-text-field(
        v-if="items[tab] === `text`"
        v-model.trim="trim"
        label="請輸入文字"
      )
      .radio-group(v-if="items[tab] === `radio`")
        v-radio-group(v-model="radioGroup")
          v-radio(
            v-for="(item,index) in radioItems"
            :key="item"
            :label="item"
            :value="index"
        )
      v-select(
        v-model="selected"
        v-if="items[tab] === `select`"
        :items="selectItems"
        item-text="text"
        solo
      )
    v-btn.btn-submit(
      elevation="4"
      @click="InputSubmit"
      color="secondary"
      right
    ) {{"送出"}}
</template>

<script>
export default {
  name: "InputGroup",
  components: {},
  props: {
    // tab所對應選項["text", "radio", "select"]
    items: {
      type: Array,
      default: () => [],
    },
    // tab項目
    tab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      inputString: "", //輸入框字串
      radioItems: ["新增第一項", "新增第二項", "新增第三項"], //Radio選項
      radioGroup: 0, // Radio選擇中
      selected: 0, // select選擇中
      selectItems: [
        { text: "下拉選項1", value: 0 },
        { text: "下拉選項2", value: 1 },
        { text: "下拉選項3", value: 2 },
      ], // select選項
    };
  },
  computed: {
    trim: {
      // 過濾頭尾空白
      get() {
        return this.inputString;
      },
      set(value) {
        this.inputString = value.trim();
      },
    },
  },
  methods: {
    // 分流不同選項所送出的內容
    InputSubmit() {
      switch (this.items[this.tab]) {
        case "text": {
          this.SubmitText();
          break;
        }
        case "radio": {
          this.SubmitRadio();
          break;
        }
        case "select": {
          this.SubmitSelect();
        }
      }
    },
    SubmitText() {
      const result = `這是Text選項 : ${this.inputString}`;
      this.$emit("on-submit", result);
    },
    SubmitRadio() {
      const result = `這是Radio選項 : ${this.radioItems[this.radioGroup]}`;
      this.$emit("on-submit", result);
    },
    SubmitSelect() {
      const result = `這是Select選項 : ${this.selectItems[this.selected].text}`;
      this.$emit("on-submit", result);
    },
  },
};
</script>
<style lang="scss" scoped>
.input-group {
  margin: 30px 0px 0px 0px;
}
.btn-submit {
  float: right;
}
</style>
