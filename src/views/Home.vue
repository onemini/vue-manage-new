<template>
  <div class="home">
    {{ food }}
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getInfo">获取数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  methods: {
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log("res: ", res);
      });
    }
  }
};
</script>
