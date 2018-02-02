<template>
    <div>
        <section class="infoWindow__contents" v-for="info in infos" :key="info.title">
            <h2 class="infoWindow__title" v-html="convertTitle(info.title)"></h2>
            <p class="infoWindow__text" v-html="convertText(info.text)"></p>
        </section>
    </div>
</template>

<script>
import twitter from 'twitter-text';

export default {
    name: 'InfoWindow',
    props: ['infos'],
    methods: {
        convertTitle (title) {
            return twitter.htmlEscape(title);
        },
        convertText (text) {
            return twitter.autoLink(twitter.htmlEscape(text).replace(/\r?\n/g, '<br>'), { targetBlank: true })
        }
    }
};
</script>

<style>

</style>
