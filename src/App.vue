<template>
    <div id="app">
        <h1 id="hello1" ref="hello2">Hello World</h1>
        <img ref="img" alt="Vue logo" src="./assets/logo.png">
        <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
        <HelloWorld ref="helloo" msg="Welcome to Your Vue.js App" />
        <button @click="showDoom">点我打印doom</button>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'App',
    components: {
        HelloWorld
    },
    methods: {
        showDoom() {
            console.log(document.getElementById("hello1"));
            console.log(this.$refs.img);
            console.log(this.$refs.hello);
            console.log(this.$refs.helloo);
            console.log(this.$refs.hello2);
        }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
