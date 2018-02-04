<template>
    <header class="header">
        <h1 class="title"><b>VOCALOID</b> CLUB&nbsp;EVENT MAP</h1>
    </header>
</template>

<script>
export default {
    name: 'VmapHeader'
};
</script>

<style scoped>
/* ヘッダー */
.header {
    text-align: center;
    background-color: #373b3e;
    color: #fff;
    padding: 20px 0;
}
.title {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 900;
    margin: 0;
}
.title >>> b {
    color: #e12885;
}
@media (min-width: 480px) and (max-width: 600px) {
    .header {
        padding: 30px 0;
    }
    .title {
        font-size: 30px;
    }
}
@media (min-width: 600px) and (max-width: 960px) {
    .header {
        padding: 40px 0;
    }
    .title {
        font-size: 40px;
    }
}
@media (min-width: 960px) {
    .header {
        padding: 50px 0;
    }
    .title {
        font-size: 50px;
    }
}
</style>
