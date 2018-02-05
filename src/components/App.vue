<template>
    <section>
        <vmap-header />
        <router-view></router-view>
        <vmap-footer />
    </section>
</template>

<script>
import 'normalize.css';
import VmapHeader from './Header';
import VmapFooter from './Footer';

export default {
    name: 'VmapApp',
    components: { VmapHeader, VmapFooter }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');

html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
html {
    background-color: #373b3e;
}
body {
    background-color: #fff;
}
iframe.tmblr-iframe {
    display: none;
}
</style>

