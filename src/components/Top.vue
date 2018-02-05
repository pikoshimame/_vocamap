<template>
    <div>
        <vmap-map />
        <vmap-link-area :to="'about'" :text="'イベントを登録する'" />
    </div>
</template>

<script>
import VmapMap from './Map';
import VmapLinkArea from './LinkArea';

export default {
    name: 'VmapTop',
    components: { VmapMap, VmapLinkArea }
};
</script>
