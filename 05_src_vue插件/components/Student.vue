<template>
    <div>
        <h2>姓名:{{ name }}</h2>
        <h2>性别: {{ sex }}</h2>
        <input v-fbind:value="name">
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

