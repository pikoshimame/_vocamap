<template>
    <div id="app">
        <section>
            <vmap-header />
            <router-view></router-view>
            <vmap-footer />
        </section>
    </div>
</template>

<script>
import 'normalize.css';
import VmapHeader from './Header';
import VmapTop from './Top';
import VmapFooter from './Footer';

export default {
    name: 'App',
    components: { VmapHeader, VmapTop, VmapFooter }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');

html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
iframe.tmblr-iframe {
    display: none;
}
</style>

