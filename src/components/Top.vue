<template>
    <div>
        <vmap-map />
        <vmap-register />
    </div>
</template>

<script>
import VmapMap from './Map';
import VmapRegister from './Register';

export default {
    name: 'App',
    components: { VmapMap, VmapRegister }
};
</script>
