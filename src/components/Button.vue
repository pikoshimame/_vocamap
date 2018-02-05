<template>
    <div>
        <span :class="className">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'VmapButton',
    props: ['btnStyle'],
    computed: {
        className() {
            const classNames = ['default'];
            if(this.btnStyle) { classNames.push(this.btnStyle) };
            return classNames;
        }
    }
};
</script>

<style scoped>
.default >>> a {
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
.default >>> a:hover {
    background-color: #535659;
}
.primary >>> a {
    background-color: #e12885;
    box-shadow: inset 0 -3px 0 0 #b4206a;
}
.primary >>> a:hover {
    background-color: #ee7fb7;
}
</style>
