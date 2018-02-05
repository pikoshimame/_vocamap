<template>
    <div class="notFound">
        <section class="main">
            <h2 class="title">Not Found</h2>
            <p class="text">The requested URL was not found on this server.</p>
        </section>
        <vmap-link-area :areaStyle="'clear'" :to="'/'" :text="'MAPへ戻る'" />
    </div>
</template>

<script>
import VmapLinkArea from './LinkArea';

export default {
    name: 'VmapNotFound',
    components: { VmapLinkArea }
};
</script>

<style scoped>
.notFound {
    background-color: #fff;
    color: #373b3e;
}
.title,
.text {
    margin: 0;
}
.text {
    line-height: 1.5em;
}
.main {
    max-width: 800px;
    padding: 40px 20px;
    margin: 0 auto;
}
h2.title {
    border-bottom: #bec8d1 solid 1px;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
h2.title+.text {
    font-size: 14px;
}
.back {
    text-align: center;
    padding: 50px 0;
}
.back >>> .btn {
    display: inline-block;
}
@media (min-width: 480px) and (max-width: 600px) {
    .text {
        line-height: 2em;
    }
    .main {
        padding: 40px;
    }
    h2.title {
        font-size: 30px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    h2.title+.text {
        font-size: 14px;
    }
}
@media (min-width: 600px) {
    .text {
        line-height: 2em;
    }
    .main {
        padding: 40px;
    }
    h2.title {
        font-size: 32px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    h2.title+.text {
        font-size: 16px;
    }
}
</style>

