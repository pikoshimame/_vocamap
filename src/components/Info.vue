<template>
    <div>
        <section class="info" v-for="info in infos" :key="info.title">
            <h2 class="title" v-html="convertTitle(info.title)" />
            <p class="text" v-html="convertText(info.text)" />
        </section>
    </div>
</template>

<script>
import twitter from 'twitter-text';

export default {
    name: 'VmapInfo',
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

<style scoped>
.info {
    border-bottom: #999 dotted 1px;
    padding: 10px 0;
}
.info:last-child {
    border-bottom: none;
}
.title {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 0.5em;
}
.text {
    font-size: 10px;
    margin: 0;
}
.text >>> a {
    color: #e12885;
}
.text >>> a:hover {
    text-decoration: none;
}
@media (min-width:480px) and ( max-width:600px) {
    .title { font-size: 16px; }
    .text { font-size: 12px; }
}
@media (min-width:600px) {
    .title { font-size: 18px; }
    .text { font-size: 14px; }
}
</style>
