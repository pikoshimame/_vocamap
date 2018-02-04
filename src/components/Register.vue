<template>
    <vmap-button class="register">
        <router-link to="about">イベントを登録する</router-link>
    </vmap-button>
</template>

<script>
import VmapButton from './Button';

export default {
    name: 'VmapRegister',
    components: { VmapButton }
};
</script>

<style scoped>
.register {
    background-color: #137a7f;
    padding: 50px 0;
}
.register >>> a {
    margin: 0 auto;
}
</style>
