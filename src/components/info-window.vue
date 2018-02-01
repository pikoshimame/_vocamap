<template>
    <section class="infoWindow__contents">
        <h2 class="infoWindow__title" v-html="convertTitle"></h2>
        <p class="infoWindow__text" v-html="convertText"></p>
    </section>
</template>

<script>
import twitter from 'twitter-text';

export default {
    name: 'InfoWindow',
    props: ['title', 'text'],
    computed: {
        convertTitle () {
            return twitter.htmlEscape(this.title);
        },
        convertText () {
            return twitter.autoLink(twitter.htmlEscape(this.text).replace(/\r?\n/g, '<br>'), { targetBlank: true })
        }
    }
};
</script>

<style>

</style>
