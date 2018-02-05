<template>
    <div :class="className">
        <vmap-button class="btn">
            <router-link :to="getLink">{{ text }}</router-link>
        </vmap-button>
    </div>
</template>

<script>
import VmapButton from './Button';

export default {
    name: 'VmapLinkArea',
    components: { VmapButton },
    props: ['areaStyle', 'to', 'text'],
    computed: {
        className() {
            const classNames = ['default'];
            if(this.areaStyle) { classNames.push(this.areaStyle) };
            return classNames;
        },
        getLink() {
            if (this.to) { return this.to };
            return '/';
        }
    }
};
</script>

<style scoped>
.default {
    background-color: #137a7f;
    text-align: center;
    padding: 50px 0;
}
.clear {
    background-color: transparent;
}
.btn {
    display: inline-block;
}
</style>
