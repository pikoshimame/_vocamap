<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VmapButton'
};
</script>

<style scoped>
.btn >>> a {
    display: block;
    background-color: #373b3e;
    border-radius: 25px;
    color: #fffeec;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    line-height: 50px;
    width: 250px;
    height: 50px;
    box-shadow: inset 0 -3px 0 0 #2c2f32;
    transition: 0.3s background-color;
}
.btn >>> a:hover {
    background-color: #494f52;
}
</style>
