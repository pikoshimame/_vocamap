<template>
    <div class="about">
        <section class="main">
            <h2 class="title">イベントの新規登録</h2>
            <p class="text">
                イベントの新規登録は、以下より登録してください。
            </p>
            <div class="form">
                <vmap-button class="btn">
                    <a class="conversion" href="https://docs.google.com/forms/d/e/1FAIpQLScSL5GiJkJuQjPAS4qtUR0TuCOgJ6actvlZohD7nPbxUo8esQ/viewform?usp=pp_url&entry.912383164&entry.1875204912&entry.149526239&entry.363869672=%E5%85%AC%E9%96%8B" target="_blank">新規登録</a>
                </vmap-button>
            </div>
            <section class="sub">
                <h3 class="title">メールアドレス</h3>
                <p class="text">
                    登録が完了すると、入力したメールアドレス宛に確認メールが自動送信されます。
                </p>
                <ul class="notes">
                    <li>登録内容の編集ページのURLも確認メールに記載されています。</li>
                </ul>
            </section>
            <section class="sub">
                <h3 class="title">イベント名</h3>
                <p class="text">
                    マーカーの吹き出し内に表示されます。
                </p>
            </section>
            <section class="sub">
                <h3 class="title">開催場所の名称または住所</h3>
                <p class="text">
                    開催場所の名称から、マーカーの緯度経度が自動計算されます。
                </p>
                <ul class="notes">
                    <li>開催場所の名称で正しい位置にマーカーが表示されない場合は<b>住所</b>を入力してください。</li>
                </ul>
            </section>
            <section class="sub">
                <h3 class="title">イベント情報</h3>
                <p class="text">
                    マーカーの吹き出し内に表示されます。
                </p>
                <ul class="notes">
                    <li>イベントの情報を<b>100文字</b>以内で入力してください。</li>
                    <li>URLは自動的にリンクテキストに変換されます。</li>
                    <li>ハッシュタグ（#イベント名）やメンション（@ユーザ名）などは自動的にTwitterへのリンクテキストに変換されます。</li>
                </ul>
            </section>
            <section class="sub">
                <h3 class="title">公開設定</h3>
                <p class="text">
                    <b>【非公開】</b>へ設定すると、マップ上にマーカーが表示されなくなります。
                </p>
            </section>
        </section>
        <section class="main">
            <h2 class="title">イベント登録内容の編集</h2>
            <p class="text">
                登録時に入力したメールアドレス宛に確認メールが届きます。<br>
                確認メール内に記載の<b>【回答を編集】</b>ボタンから編集画面へ移動し、登録内容を編集してください。
            </p>
        </section>
        <section class="main">
            <h2 class="title">その他お問い合わせ</h2>
            <p class="text">
                その他のお問い合わせにつきましては、以下よりお問い合わせください。
            </p>
            <div class="form">
                <vmap-button class="btn">
                    <a class="conversion" href="https://docs.google.com/forms/d/e/1FAIpQLSfsC1oi-NOgwAf4mkoHdZRFX7G4SF7yO3vR-mscA1bwEaaWTw/viewform" target="_blank">お問い合わせ</a>
                </vmap-button>
            </div>
        </section>
        <vmap-button class="back">
            <router-link to="/">MAPへ戻る</router-link>
        </vmap-button>
    </div>
</template>

<script>
import VmapButton from './Button';

export default {
    name: 'About',
    components: { VmapButton }
};
</script>

<style scoped>
.about {
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
.sub {
    padding: 20px 0;
}
.form {
    text-align: center;
    padding: 20px 0;
}
.form >>> .btn {
    display: inline-block;
}
.back {
    background-color: #137a7f;
    padding: 50px 0;
}
.back >>> a {
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
h3.title {
    border-left: #137a7f solid 10px;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    margin-bottom: 20px;
}
h3.title+.text {
    font-size: 14px;
}
.notes {
    padding: 0;
    margin: 0;
}
.notes >>> li {
    color: #666;
    font-size: 12px;
    line-height: 1.5em;
    list-style: none;
    text-indent: -1em;
    padding-left: 1em;
    margin: 5px 0;
}
.notes >>> li::before {
    content: "※";
    margin-right: 0.5em;
}
a {
    color: #e12885;
}
a:hover {
    text-decoration: none;
}
@media (min-width: 480px) and (max-width: 600px) {
    .text {
        line-height: 2em;
    }
    .main {
        padding: 40px;
    }
    .sub {
        padding: 20px 0;
    }
    .form {
        padding: 20px 0;
    }
    h2.title {
        font-size: 30px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    h2.title+.text {
        font-size: 14px;
    }
    h3.title {
        font-size: 18px;
        margin-bottom: 20px;
    }
    h3.title+.text {
        font-size: 14px;
    }
    .notes >>> li {
        font-size: 12px;
    }
}
@media (min-width: 600px) {
    .text {
        line-height: 2em;
    }
    .main {
        padding: 40px;
    }
    .sub {
        padding: 20px 0;
    }
    .form {
        padding: 20px 0;
    }
    h2.title {
        font-size: 32px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    h2.title+.text {
        font-size: 16px;
    }
    h3.title {
        font-size: 20px;
        margin-bottom: 20px;
    }
    h3.title+.text {
        font-size: 16px;
    }
    .notes >>> li {
        font-size: 14px;
    }
}
</style>

