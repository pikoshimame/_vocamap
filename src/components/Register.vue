<template>
    <div>
        <a href="#">イベントを登録する</a>
    </div>
</template>

<script>
export default {
    name: 'VmapRegister'
};
</script>

<style scoped>
div {
    text-align: center;
    background-color: #137a7f;
    padding: 50px 0;
}
a {
    display: block;
    background-color: #373b3e;
    border-radius: 25px;
    color: #fffeec;
    font-size: 16px;
    text-decoration: none;
    line-height: 50px;
    width: 250px;
    height: 50px;
    margin: 0 auto;
    box-shadow: inset 0 -3px 0 0 #2c2f32;
    transition: 0.3s background-color;
}
a:hover {
    background-color: #494f52;
}
</style>
