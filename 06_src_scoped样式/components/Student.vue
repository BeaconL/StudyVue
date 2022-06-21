<template>
    <div class="demo">
        <h2 class="title">姓名:{{ name }}</h2>
        <h2>性别: {{ sex }}</h2>
    </div>
</template>

<script>

export default {
    name: "StudentItem",
    data() {
        console.log(this);
        return {
            name: '新手',
            sex: '男'
        };
    }
};
</script>

<style scoped>
  .demo{
    background: orange;
  }
</style>
