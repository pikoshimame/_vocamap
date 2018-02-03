<template>
    <div>
        <section v-for="info in infos" :key="info.title">
            <h2 v-html="convertTitle(info.title)"></h2>
            <p v-html="convertText(info.text)"></p>
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
section {
    border-bottom: #999 dotted 1px;
    padding: 10px 0;
}
section:last-child {
    border-bottom: none;
}
h2 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 0.5em;
}
p {
    font-size: 10px;
    margin: 0;
}
p >>> a {
    color: #e12885;
}
p >>> a:hover {
    text-decoration: none;
}
@media (min-width:480px) and ( max-width:600px) {
    h2 { font-size: 16px; }
    p { font-size: 12px; }
}

@media (min-width:600px) {
    h2 { font-size: 18px; }
    p { font-size: 14px; }
}
</style>
