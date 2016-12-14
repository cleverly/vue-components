<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    .snow-container-container {
        background-color: $grey-color;
        padding: 50px;
        border-radius: 5px;
        .snow-container {
            @include hoverable(2, 3);
            border-radius: 5px;
            position: relative;
            background-color: $shadow-color;
            height: 500px;
            .snow {
                position: absolute;
                z-index: 1;
            }
        }
    }
    .scroll-to-top {
        position: static !important;
        display: inline-block;
    }
</style>
<template>
    <div id="effects-components" class="effects-components">
        <h1>Effects</h1>
        <div class="row">
            <div class="col s12 m6 mo3">
                <h2>Snow</h2>
                <div class="snow-container-container">
                    <div class="snow-container">
                        <snow :max-particles="50" />
                    </div>
                </div>
                <br />
                <strong>code</strong>:
                <pre><code>&lt;div class="snow-container"&gt;
    &lt;snow :max-particles="50" /&gt;
&lt;/div&gt;</code></pre>
            </div>
            <div class="col s12 m6 mo3">
                <ripple color="secondary" :step="20">
                    <h2>Ripple</h2>
                </ripple>
                <div class="card">
                    <ripple :step="10">
                        <img src="http://lorempixel.com/1280/720/abstract/Placeholder Image" alt="" class="image-responsive rounded center--block">
                    </ripple>
                    <br />
                    <br />
                    <ripple :step="5" color="primary">
                        <a href="#!" class="button raised" @click.prevent>Primary</a>
                    </ripple>
                    <ripple :step="5" color="secondary">
                        <a href="#!" class="button raised" @click.prevent>Secondary</a>
                    </ripple>
                </div>
            </div>
            <div class="col s12 m6 mo3 center">
                <h2>Scroll To Top</h2>
                <p class="left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dignissimos similique quas vero, sed consequuntur explicabo aspernatur porro eos eaque quod numquam? Tempore omnis architecto corrupti illo magni voluptates iure magnam id voluptas in labore voluptate ex nesciunt, ad, deserunt alias recusandae minus vero, hic inventore nobis nam voluptatibus ratione dignissimos? Modi pariatur similique, distinctio repudiandae fugiat debitis temporibus ad odio! Cum iure placeat quae maxime asperiores voluptatem, laborum eligendi quasi ullam voluptatum ab nemo. Officiis corporis, accusamus porro maxime expedita quisquam similique officia inventore laboriosam quis sit laudantium quam totam facere error. Numquam delectus praesentium pariatur fugiat, voluptas minima non veniam dignissimos beatae rerum consectetur corrupti, voluptates facilis deserunt velit obcaecati maxime, possimus laudantium? Temporibus magnam blanditiis in distinctio rerum laudantium, eligendi reiciendis ut! Aliquam molestias recusandae, officiis cumque hic dolorem consectetur odit dolorum facilis fugit nulla maxime perspiciatis consequatur libero in quae, excepturi totam mollitia fugiat id consequuntur saepe alias. Consectetur quidem minus doloribus beatae sapiente, sit quas ducimus laborum nulla dolorem, aliquam voluptates animi assumenda accusamus. Ad qui eius quasi, temporibus magni illo amet, nesciunt repellendus laudantium, atque, cum reprehenderit tenetur consequatur. Impedit, corporis aperiam reiciendis. Consequatur amet, maiores voluptates! Velit distinctio dolorum explicabo, quidem iure sed quod perspiciatis tempore doloremque. Temporibus culpa cumque in quae, placeat officia minima! Quo doloremque libero id ratione, suscipit labore quis autem iure accusamus distinctio? Unde magnam itaque aspernatur placeat deserunt qui, voluptatibus quo atque dolore vero at culpa ipsam officiis saepe nostrum, provident repudiandae modi, ullam voluptatum. Dolores reiciendis recusandae impedit rerum perspiciatis sunt nesciunt. Odit suscipit vero earum, sed? Harum reprehenderit excepturi sapiente in alias quis aut expedita odit minus saepe reiciendis suscipit soluta consequatur asperiores, nihil laudantium deserunt. Alias harum obcaecati molestias, at dolor ut perferendis tempore ab aperiam qui iste autem deserunt laborum expedita, vel veritatis. Sunt vel eum, numquam doloremque sapiente voluptatem atque maiores, nihil quia rerum. Sit architecto, nisi, alias odio atque, officiis ipsa at temporibus velit totam earum nam magnam tempora dolores eaque ex blanditiis similique, sed adipisci amet dicta excepturi! Cupiditate nostrum, voluptate doloribus eaque quae ad adipisci corporis et, rerum dicta neque dolorum expedita maiores amet ratione tempore quas ea, laboriosam tempora architecto ullam eos, beatae magnam doloremque. Cumque suscipit delectus laudantium illo enim dignissimos possimus odit eum, tenetur reprehenderit ipsa doloremque! Quae veritatis assumenda suscipit quos, dolorem consequuntur doloremque a eius labore id accusantium, ipsa quia reiciendis facilis laboriosam deserunt ea, vero est impedit necessitatibus, consequatur eligendi animi voluptatibus. Illum ad itaque minima voluptatum quaerat ullam quod porro eius, officia fugit harum aliquid hic. Odio ea nisi beatae nam sint magni, necessitatibus eum est, unde facere tempore. Omnis quasi blanditiis et dignissimos eveniet sunt? Voluptate vel excepturi, a aliquam libero recusandae obcaecati ipsam mollitia. Harum quos aut illo ducimus accusamus laborum possimus ratione modi cupiditate. Laboriosam veritatis saepe labore quod sed, inventore est repellendus, maiores illum cupiditate beatae possimus. Laborum asperiores optio, deleniti consequatur, dignissimos, vero nemo aliquid, assumenda totam eveniet cumque natus. Ipsum excepturi, doloribus expedita! Minus accusantium deserunt, quae repellat, nostrum cupiditate sapiente deleniti excepturi veniam odio, amet enim. Numquam, impedit accusantium magni quod ea vero, placeat expedita ipsa! Est fugit nisi officia illum esse, culpa ipsa praesentium. Aliquid dolores sint explicabo omnis quas asperiores consequuntur at, nesciunt, suscipit, dolor ullam ex quis cupiditate nemo labore harum quo, quae eaque excepturi quos necessitatibus. Repellendus reprehenderit exercitationem eaque, impedit eligendi commodi in laudantium, modi quibusdam atque deleniti fugiat nisi nam debitis ut, autem voluptate ratione totam numquam. Quae commodi at asperiores nisi enim voluptatum obcaecati voluptatem, aliquam ullam animi laudantium voluptates? Omnis dolorem maxime quae inventore, totam excepturi velit eos ea iusto? Sunt, fugit, provident tempore sed accusantium saepe cum id. Temporibus unde, iste consequatur porro pariatur voluptas reiciendis optio repellat dicta nemo tempora dolorum, maiores harum, delectus beatae explicabo id magni saepe in illum voluptatum sit itaque! Mollitia, inventore. Nemo nobis repellendus non ipsa magnam, quos dolor error nisi facere totam vitae, tenetur debitis quam architecto soluta perferendis recusandae molestias commodi odio minus dolores. Aliquid blanditiis ipsam quaerat aliquam fugit reiciendis culpa ipsum atque deserunt magnam itaque, praesentium autem doloribus eos fugiat rem, earum, aperiam eveniet eligendi in ea eaque repellat. Quod veritatis error rerum dolore! Nihil eveniet sapiente dolore amet, nemo architecto provident voluptas. Ducimus nisi, et eum sunt vel labore! Provident ex quidem vitae quis expedita enim accusantium nihil ducimus aspernatur ad reprehenderit aperiam minima vel ea, eligendi non! Aspernatur, in ea aut rerum, recusandae nobis aliquid, tenetur perspiciatis eligendi quam animi incidunt. Odio veritatis quibusdam necessitatibus obcaecati. Quisquam adipisci facilis aut exercitationem, illo quidem voluptate amet perspiciatis maiores autem dolorum, cumque repudiandae, sequi consequatur quis officiis dolore quo nam? Eum eligendi corporis velit maiores, voluptates sit neque blanditiis atque at fugit tempore esse quod repellat, magnam doloribus reiciendis nostrum minus molestiae veniam in officia mollitia repellendus odio architecto praesentium! Minima reiciendis iure officiis aut, quibusdam, voluptatum reprehenderit cum vero aliquid ab nesciunt assumenda quidem. Harum ratione animi ad enim laboriosam, alias ipsam veniam nostrum repudiandae provident cumque at nulla rerum quibusdam! Blanditiis fuga sint aut, alias, tempora similique dolor doloremque odit, ipsum ullam, vel dicta omnis voluptates. Porro praesentium repellendus tempore animi est dolorem perferendis dignissimos error suscipit, ducimus beatae provident officia incidunt recusandae mollitia ut quisquam facere ex quia eligendi quae! Eum odio aut quas doloribus, expedita beatae quo illo iste ducimus exercitationem eligendi tempore dolore dicta sapiente praesentium nam incidunt ratione asperiores pariatur corporis possimus nobis, modi aperiam. Officiis architecto aliquam voluptate distinctio, laudantium nam omnis nihil eum quo odio? Ducimus amet fugit quibusdam tempore aliquam cupiditate, deleniti at nulla, optio sit necessitatibus libero aperiam harum asperiores? Quam expedita ut, temporibus earum nemo dicta ipsum reiciendis, alias sit asperiores unde. Magnam quo itaque vero accusamus officia saepe. Nam distinctio nostrum veniam voluptate sequi a harum sit maiores eveniet iure eum tenetur facilis error cupiditate omnis repellat, enim voluptatibus non vel. Vitae mollitia qui sequi provident error laborum corporis voluptatem! Fugiat officia, quibusdam nisi. Maiores saepe odio vitae suscipit minima consequatur laboriosam, dolores dolorem alias.
                </p>
                <scroll-to-top></scroll-to-top>
            </div>
        </div>
    </div>
</template>
<script>
    import Snow from 'components/Snow';
    import Ripple from 'components/Ripple';
    import ScrollToTop from 'components/ScrollToTop';
    export default {
        name: 'EffectComponents',
        components: {
            Snow,
            Ripple,
            ScrollToTop,
        },
    };
</script>
