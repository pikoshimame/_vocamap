<template>
    <div class="register">
        <vmap-button class="btn">
            <router-link to="about">イベントを登録する</router-link>
        </vmap-button>
    </div>
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
    text-align: center;
    padding: 50px 0;
}
.btn {
    display: inline-block;
}
</style>
