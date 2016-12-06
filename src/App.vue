<template>
    <div id="app">
        <scroll-to-top>
        </scroll-to-top>
        <h1>Vue Components</h1>
        <div class="row">
            <div class="col s12 m6 mo3 l4 lo4">
                <h2>Form Input</h2>
                <form-input v-model="formInputValue" label="Form Input"></form-input>
            </div>
            <div class="col s12 m6 mo3 l4 lo4">
                <h2>Text Box</h2>
                <text-box v-model="textBoxValue" label="Text Box"></text-box>
            </div>
            <div class="col s12 m6 mo3 l4 lo4">
                <h2>Select Input</h2>
                <select-input v-model="selectInputValue.value" :options="selectInputValue.options" label="Select Input"></select-input>
            </div>
            <div class="col s12 m6 mo3 l4 lo4">
                <h2>Toggle</h2>
                <toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2"></toggle>
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true"></toggle>
                <br />
                <toggle v-model="toggleValue" label="Toggle"></toggle>
                <br />
                <toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1"></toggle>
                <toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2"></toggle>
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true" multi="true" multi-label="Toggle2" disabled="true"></toggle>
                <br />
                <toggle v-model="toggleValue" label="Toggle" slider="true" disabled="true"></toggle>
                <br />
                <toggle v-model="toggleValue" label="Toggle" disabled="true"></toggle>
                <br />
                <toggle v-model="radioValue" radio="true" radio-value="radio-1" label="Toggle Radio 1" disabled></toggle>
                <toggle v-model="radioValue" radio="true" radio-value="radio-2" label="Toggle Radio 2" disabled></toggle>
            </div>
            <div class="col s12 m6 mo3 l4 lo4">
                <ripple color="secondary">
                    <h2>Ripple</h2>
                </ripple>
                <div class="card">
                    <ripple>
                        <img src="http://lorempixel.com/1280/720/abstract/Placeholder Image" alt="" class="image-responsive rounded center--block">
                    </ripple>
                    <br />
                    <br />
                    <ripple :step="1" color="primary">
                        <a href="#!" class="button raised" @click.prevent>Primary</a>
                    </ripple>
                    <ripple :step="1" color="secondary">
                        <a href="#!" class="button raised" @click.prevent>Secondary</a>
                    </ripple>
                </div>
            </div>
            <div class="col s12 m6 mo3 l4 lo4 center">
                <h2>Modal</h2>
                <a class="button primary raised" href="#!" @click.prevent="modal1State=true">Open Modal</a>
                <a class="button cancel raised" href="#!" @click.prevent="modal2State=true">With Buttons</a>
            </div>
            <div class="col s12 m6 mo3 l4 lo4 center">
                <h2>DropDown</h2>
                <dropdown :close-after="2500">
                    Dropdown Label
                    <div slot="menu">
                        <a href="#!" @click.prevent>Test 1</a>
                        <a href="#!" @click.prevent>Test 2</a>
                        <a href="#!" @click.prevent>Test 3</a>
                        <a href="#!" @click.prevent>Test 4</a>
                    </div>
                </dropdown>
            </div>
            <div class="col s12 m6 mo3 l4 lo4 center">
                <h2>Read More</h2>
                <read-more class="card" :compressed-height="168">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos exercitationem dolores. Deserunt odit quod, officiis, aut in, dolore ad voluptas aliquid voluptates pariatur quae laborum. Quos illo expedita ex, sed quisquam porro hic labore, sint excepturi facere. Eligendi dolorum, enim ullam quod minima temporibus, nam quo. Et animi, veniam molestiae. Sunt ex ullam est quaerat commodi molestias. Amet aliquam dicta fugit eaque maxime minima, libero, voluptates quod reiciendis placeat earum maiores. Vitae sed quia quam molestiae quos eaque nobis, consequuntur accusamus est illo explicabo dignissimos qui pariatur laudantium facilis nisi sequi, sunt quod quaerat repudiandae placeat officiis? Aliquid commodi quis dolore quo animi, et, ullam aspernatur totam. Eligendi architecto animi, exercitationem error consectetur. Tempora architecto neque quos reiciendis quod suscipit fuga deleniti temporibus voluptate. Eum adipisci magnam delectus corporis culpa quo voluptate nesciunt eligendi esse ad hic perspiciatis aliquam mollitia, voluptates accusantium officia suscipit quis, distinctio deserunt dolorem quaerat saepe doloremque. Dicta quasi, alias doloribus nesciunt nulla cupiditate! Est reiciendis non, labore, accusantium numquam nobis? Odit excepturi, modi numquam, autem voluptatum ratione doloribus asperiores rem totam commodi at, repudiandae earum fugit reprehenderit quam accusamus esse doloremque ad delectus quae unde quis amet. Velit, earum recusandae ut consequatur, minus laboriosam.</p>
                    <p>Consequatur vitae modi dolore ullam quis asperiores nobis reprehenderit illo quo a ab, minima repellat! Rem, nisi quasi, nam corporis mollitia omnis. Molestiae, ducimus unde, numquam officiis harum provident soluta excepturi. Debitis, alias veritatis tempore delectus suscipit molestias harum aspernatur fugit cupiditate voluptate est, velit, vitae odit vero adipisci dolore aliquam cumque accusantium necessitatibus dolor similique! Quam voluptates excepturi culpa nihil quo asperiores illum nisi laboriosam sunt dolor, velit, distinctio optio minima harum illo esse est quidem nesciunt modi. Beatae aperiam unde ut animi provident, hic nam itaque ipsam quaerat non at dolores neque consectetur assumenda! Fugiat autem reprehenderit consequuntur rem beatae doloremque voluptates modi ut excepturi, delectus iste quos dignissimos inventore velit necessitatibus iusto, blanditiis dolorem, consequatur fugit est soluta libero suscipit esse! Maxime, non, culpa. Consequatur aperiam impedit ipsam nulla quisquam! Eos aspernatur sequi, dolore minus quos nisi maxime beatae at deserunt itaque ex, iure fuga ipsum. Eius ut harum, beatae fugit iure doloremque sint ducimus doloribus quae excepturi minima, vero nisi adipisci iusto tempore dignissimos aspernatur sed! Perferendis obcaecati quos assumenda tenetur quis a iste inventore blanditiis atque quaerat, voluptates nulla ipsa minus ex ea id odit illo sit fugiat voluptate vero voluptatum doloribus delectus. Est, eos!</p>
                    <p>Quidem earum obcaecati deserunt tempore eos nam cumque unde atque aliquid reiciendis, fuga hic cum corrupti animi officia distinctio quas enim veniam, incidunt, autem eligendi illum magni. Porro quos aut quo velit autem laborum ratione rerum nihil dolore sequi cum ipsum modi dolor reprehenderit praesentium quia tempora ut unde aliquid, quod. Veritatis quod quae debitis fuga, repellendus itaque aliquam, similique, obcaecati nihil qui vel hic necessitatibus asperiores accusamus distinctio illo alias iure nesciunt incidunt voluptatum ab! Molestiae quaerat corporis, facilis incidunt cumque eos odit minus adipisci? Distinctio neque dolores officia, modi debitis voluptates consequuntur minus architecto tempore placeat fugiat quam asperiores cupiditate! Fugiat non eum, nisi quisquam voluptate dolor repellendus optio unde magnam dignissimos odio quidem possimus libero inventore quasi quas molestiae esse vero iste doloremque, fugit facere, aspernatur ad! Inventore labore quam ipsa sed tempore cum ducimus ullam modi dicta voluptates necessitatibus hic sunt laborum possimus, culpa ea soluta sequi! Praesentium, excepturi itaque libero repellendus alias ipsa sint totam, aut, fugiat delectus ratione in sequi minima porro maiores soluta mollitia quisquam. Veritatis molestias hic minus praesentium quidem, in sapiente minima nisi sit totam numquam qui velit, quod dolorem maiores dignissimos, temporibus optio officiis eos iste harum fugiat asperiores. Consectetur.</p>
                    <p>Nihil error culpa numquam aspernatur voluptatem optio, expedita sint debitis totam incidunt consectetur. Iste labore officiis, cum fugit architecto vitae, fuga debitis dignissimos et! Ex dolorem eveniet quibusdam ratione assumenda consectetur sapiente doloremque esse quo culpa similique, omnis ducimus sint, reiciendis impedit minima voluptas ab, ipsam nobis. Eveniet hic aperiam a veniam mollitia, aliquid! Facilis, pariatur perferendis ipsum quos doloremque. Voluptatibus rerum similique perferendis eveniet, officiis sequi soluta officia, enim voluptate adipisci ea pariatur laboriosam, exercitationem rem. Totam earum, perspiciatis at nulla autem temporibus harum ullam animi, eius necessitatibus velit repellendus soluta quaerat consequatur ad quo reprehenderit aspernatur. Error ullam nesciunt sunt quibusdam velit ex perferendis perspiciatis, vitae iure mollitia itaque! Itaque id quae nam ipsum dolor, recusandae aliquam similique nulla molestiae, adipisci inventore deserunt voluptatum. Nam, voluptas. Ad exercitationem debitis blanditiis, suscipit fugit quos numquam repellendus architecto delectus iure facilis necessitatibus nam obcaecati enim nulla optio dignissimos inventore ipsum dolorem nisi ipsam a impedit autem eum. Culpa obcaecati, totam aspernatur tempora doloremque rerum unde, dolor corrupti asperiores excepturi expedita adipisci quia iste quo, ut. Temporibus excepturi nesciunt incidunt quae nulla dignissimos et labore minima, assumenda dicta laborum accusamus, veniam eveniet aut eius voluptatum eligendi animi alias reprehenderit perspiciatis architecto!</p>
                    <p>Eaque eos unde at nisi ad cumque ut, animi nam consequuntur, adipisci minus. Adipisci recusandae soluta minus, veniam nihil asperiores ipsum! Sequi consequuntur aperiam quae, autem nihil odit a accusantium mollitia, doloremque. Dolore ullam voluptate, quibusdam non ut facilis odio saepe accusantium, voluptatem aliquam suscipit libero expedita temporibus sint! Earum totam eaque quaerat, perspiciatis adipisci dicta, quas rem in hic pariatur consequatur alias, sed impedit! Facilis quod porro, amet? Voluptates numquam minima dolor fugit placeat mollitia id! Numquam est molestiae corporis natus deserunt laboriosam, sequi hic odio nisi. Explicabo corporis est perferendis nisi, nobis. Esse aliquid, quos amet et nihil corporis nulla doloremque in commodi dicta doloribus itaque, exercitationem quam nostrum eaque praesentium, nobis odio. Quisquam impedit vitae deleniti commodi, expedita repellendus aperiam, quod, eveniet saepe dolorem sapiente deserunt tempora veniam ducimus possimus consequuntur in illum. Consectetur, facilis autem, obcaecati, aliquid velit nam illum inventore at, eaque est modi doloribus quidem eos maxime officiis. Delectus quasi alias natus maiores harum consequuntur ipsam ad incidunt voluptatem quas assumenda vero at cum quibusdam, ipsum, sapiente quae quaerat quidem eligendi possimus qui, voluptatibus beatae laudantium saepe esse! Qui, architecto hic. Aliquam quos quo nostrum porro velit, dolore perferendis assumenda, iure omnis fugit accusamus!</p>
                </read-more>
            </div>
            <div class="col s12 m6 mo3 l4 lo4 center">
                <h2>ErrorMessage</h2>
                <error-message v-model="errorMessage"></error-message>
                <br />
                <a href="#!" class="button primary raised" @click.prevent="errorMessage='I Am Error!'">Make An Error</a>
                <a href="#!" class="button cancel raised" @click.prevent="errorMessage='I Am Another Error!'">Make Another Error</a>
            </div>
            <div class="col s12 m6 mo3 l4 lo4 center">
                <h2>Map</h2>
                <google-map address="36 S Central, Medford OR, 97501" map-key="AIzaSyAXzYlMjV_q3m8WnXnHO41TVOyUuq5IIVk" :zoom="18" custom-marker="http://eecs.mines.edu/Courses/csci448/resources/images/app_icons/doge_icon.png"></google-map>
            </div>
        </div>
        <modal title="I Am Modal" :open="modal1State" @close="modal1State=false">
            <ripple color="primary">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis aperiam, rem placeat! Laboriosam a explicabo accusantium quisquam eveniet itaque nam incidunt saepe eius provident asperiores, necessitatibus in rerum consequatur. Esse atque recusandae vero, beatae sit alias, aperiam doloribus tempore itaque fugiat ad tempora ab excepturi officiis a nam quaerat accusamus eaque. Necessitatibus obcaecati voluptas animi ratione quam quidem commodi illo alias impedit, quisquam ipsa similique, aperiam mollitia labore sunt ut molestiae et voluptatem. Laudantium amet ut iste sapiente voluptates voluptatem neque. Saepe, eum. Velit, illum, expedita! Inventore molestias temporibus pariatur exercitationem aperiam nobis consectetur, nisi error dolor praesentium esse facere unde? Repudiandae quam molestiae quibusdam illo ut a est placeat asperiores laboriosam, minima, architecto earum nostrum at laudantium. Sunt obcaecati sint perferendis beatae, incidunt et a inventore. Maxime repellendus dolore beatae velit nostrum autem ea sunt reiciendis, ipsa ducimus ut tenetur nihil, ab repellat earum laudantium aspernatur consectetur. Odit qui distinctio praesentium accusantium, sint voluptate, delectus excepturi quisquam blanditiis incidunt, necessitatibus a earum facilis. Similique earum aspernatur, ex blanditiis fugiat repudiandae cum quae amet reprehenderit magni ea omnis ad quas quis iusto! Culpa odit obcaecati facilis repudiandae, voluptatibus, dolore nulla quia veritatis cum et provident id in, ut distinctio error. Excepturi repellendus a magnam quisquam eum, rem sit! Temporibus officia eos nesciunt dignissimos, cumque officiis, nulla quia non doloremque quisquam in veniam possimus ex, maxime sint eum ducimus consequuntur! Vitae, quo veniam saepe quis quae aut autem voluptas quidem inventore praesentium similique repellat aliquam doloribus rem amet labore quam illo consequatur ea, aspernatur officiis nemo. Nihil corporis doloribus cumque, doloremque nam at facere nisi culpa incidunt provident veniam magnam dolorum repellendus expedita unde dolor, aut blanditiis quae possimus numquam itaque! Eum quia tempora doloremque unde veritatis perferendis repellendus quasi? A, libero, nam? Iusto accusamus delectus eos ex distinctio quidem aut sunt non corrupti tempora libero voluptates perferendis repellat iure ut maiores mollitia, omnis quibusdam. At obcaecati fuga inventore itaque amet, reiciendis, labore cum, esse mollitia aliquam qui sunt nisi laudantium magnam ex! Reiciendis tempora obcaecati possimus alias, impedit ut molestiae numquam sint nam a eum voluptas sequi amet eaque, rerum perspiciatis consectetur odit autem ipsum, magnam facere. Aut, sequi accusantium. Expedita error, accusantium reiciendis adipisci repellendus dicta voluptatum, neque officiis unde, vel in. Perferendis quidem, aliquam accusantium fugiat omnis accusamus? Ratione, neque fugit, ducimus iste ullam eaque architecto odio asperiores animi vero deleniti repellat laudantium officia, tenetur ipsa ex aspernatur quaerat odit omnis quibusdam est reiciendis labore blanditiis pariatur? Eveniet minus quod tempora voluptate reprehenderit facilis ad placeat eligendi asperiores rem assumenda praesentium cum, voluptatem dolorum perferendis mollitia sint harum nemo dicta illum incidunt ex esse? Nostrum facilis, optio quia incidunt ex laudantium vero quaerat rerum autem molestiae tempore et omnis quas consequatur, libero hic? Tempora exercitationem ducimus, beatae non numquam necessitatibus voluptatem corporis. Sapiente ipsum, accusantium rerum nisi dignissimos nulla expedita dolor vel quibusdam porro quisquam, fugit adipisci doloremque quod? Illo, ullam obcaecati optio quibusdam voluptas nesciunt corporis quia iste quo vero esse quam ipsam hic, sint doloremque nostrum magni quod? Alias obcaecati deleniti est recusandae illum molestiae, eius qui natus delectus facere aperiam laudantium odit iusto ut voluptatibus animi maxime accusamus quia ipsam, error nemo voluptate molestias impedit nisi! Mollitia ipsam ex officiis, illo voluptatibus, eveniet non minus. Debitis sequi, neque provident aliquam nihil eaque, animi qui maxime placeat commodi a autem impedit saepe temporibus est, possimus, laudantium harum in! Praesentium tempora, libero officia pariatur veritatis quidem rerum debitis, possimus hic unde, illo ducimus nostrum veniam obcaecati et harum accusamus beatae est sed neque. Facere, vel, earum. Ab ducimus ipsam explicabo placeat nisi impedit aperiam, voluptatem. Labore fugiat fuga est neque odit perspiciatis, facere tenetur, architecto laudantium, magni eligendi ipsa placeat ipsam voluptatum nostrum reiciendis magnam cum. Atque nam officia architecto est accusamus similique incidunt possimus ratione, soluta quod rem porro totam provident! Consectetur, saepe, libero. Quidem id sunt nisi possimus, exercitationem omnis nesciunt excepturi, ad culpa. Tempora eveniet vitae alias ut a. Laboriosam velit doloremque assumenda totam eos, eaque animi. Quam veniam tempore, ratione porro ea aliquid distinctio quo nisi similique earum eum quisquam enim illum recusandae quibusdam iste ipsa, officia, praesentium. Voluptatibus praesentium reprehenderit commodi veritatis dolorem quia laborum, ducimus nobis. Omnis ullam consequuntur illo officia modi quis beatae doloremque, iusto doloribus dicta aliquam quidem in, possimus sunt vero iste totam quia sequi cumque error, sapiente accusamus. Iure fugit, magni nobis, veniam reiciendis mollitia sequi porro consequatur dolorem error corporis veritatis doloribus aliquam iusto laboriosam amet ratione minima voluptatibus unde autem, commodi quas fugiat eos. Odit aliquam at tenetur deserunt omnis necessitatibus amet porro nesciunt officiis beatae molestiae non, doloremque consectetur explicabo eius quisquam aspernatur labore aut numquam sit. Veritatis maiores, cumque voluptas repudiandae ipsa eum alias fugit earum molestiae. Modi repudiandae voluptas eum nisi magni consequatur eius esse. Consectetur architecto sunt odit eligendi sequi sint eaque alias temporibus optio. Eum sapiente exercitationem sint voluptate vel sed vitae et ex saepe inventore quidem doloribus asperiores dolorum quia expedita, distinctio commodi, hic. Accusantium aperiam excepturi natus sequi sunt a porro, blanditiis, atque sapiente ad sit nihil totam! Eum molestiae consequatur ratione, repellat impedit facere, fugiat minus officiis explicabo quos, distinctio voluptate nulla excepturi quasi beatae commodi ab debitis cum minima atque. Excepturi eveniet consequatur, optio. Provident voluptates tempora natus quam esse placeat ut debitis quibusdam eos, aliquid odit at fugiat eum iusto non laudantium soluta enim quidem doloribus eius, cupiditate perspiciatis magni. Atque alias quibusdam tempora sapiente hic sit nesciunt? Excepturi laudantium dolore ratione adipisci aut ipsum voluptatibus, tempore explicabo dolorum quibusdam molestias sed esse doloremque officia ipsam amet ab, mollitia architecto. Voluptas officiis provident facere mollitia, odit culpa qui sint quis cum fugiat sit tempora deleniti debitis rem dolores inventore dolor nostrum tenetur similique quod, unde alias voluptatum est eveniet. Aliquid repudiandae illo nam, iure rerum quaerat necessitatibus minima. Optio similique repellat qui quasi facilis a modi ipsum, accusantium laboriosam quibusdam esse aspernatur rem pariatur recusandae animi saepe fugit corporis tempore expedita. Itaque totam blanditiis quis repudiandae, deserunt, quisquam, quae magnam in dolore iure minima quos.
                </div>
            </ripple>
        </modal>
        <modal title="Modal With Buttons" :open="modal2State" @close="modal2State=false">
            <ripple color="primary">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis aperiam, rem placeat! Laboriosam a explicabo accusantium quisquam eveniet itaque nam incidunt saepe eius provident asperiores, necessitatibus in rerum consequatur. Esse atque recusandae vero, beatae sit alias, aperiam doloribus tempore itaque fugiat ad tempora ab excepturi officiis a nam quaerat accusamus eaque. Necessitatibus obcaecati voluptas animi ratione quam quidem commodi illo alias impedit, quisquam ipsa similique, aperiam mollitia labore sunt ut molestiae et voluptatem. Laudantium amet ut iste sapiente voluptates voluptatem neque. Saepe, eum. Velit, illum, expedita! Inventore molestias temporibus pariatur exercitationem aperiam nobis consectetur, nisi error dolor praesentium esse facere unde? Repudiandae quam molestiae quibusdam illo ut a est placeat asperiores laboriosam, minima, architecto earum nostrum at laudantium. Sunt obcaecati sint perferendis beatae, incidunt et a inventore. Maxime repellendus dolore beatae velit nostrum autem ea sunt reiciendis, ipsa ducimus ut tenetur nihil, ab repellat earum laudantium aspernatur consectetur. Odit qui distinctio praesentium accusantium, sint voluptate, delectus excepturi quisquam blanditiis incidunt, necessitatibus a earum facilis. Similique earum aspernatur, ex blanditiis fugiat repudiandae cum quae amet reprehenderit magni ea omnis ad quas quis iusto! Culpa odit obcaecati facilis repudiandae, voluptatibus, dolore nulla quia veritatis cum et provident id in, ut distinctio error. Excepturi repellendus a magnam quisquam eum, rem sit! Temporibus officia eos nesciunt dignissimos, cumque officiis, nulla quia non doloremque quisquam in veniam possimus ex, maxime sint eum ducimus consequuntur! Vitae, quo veniam saepe quis quae aut autem voluptas quidem inventore praesentium similique repellat aliquam doloribus rem amet labore quam illo consequatur ea, aspernatur officiis nemo. Nihil corporis doloribus cumque, doloremque nam at facere nisi culpa incidunt provident veniam magnam dolorum repellendus expedita unde dolor, aut blanditiis quae possimus numquam itaque! Eum quia tempora doloremque unde veritatis perferendis repellendus quasi? A, libero, nam? Iusto accusamus delectus eos ex distinctio quidem aut sunt non corrupti tempora libero voluptates perferendis repellat iure ut maiores mollitia, omnis quibusdam. At obcaecati fuga inventore itaque amet, reiciendis, labore cum, esse mollitia aliquam qui sunt nisi laudantium magnam ex! Reiciendis tempora obcaecati possimus alias, impedit ut molestiae numquam sint nam a eum voluptas sequi amet eaque, rerum perspiciatis consectetur odit autem ipsum, magnam facere. Aut, sequi accusantium. Expedita error, accusantium reiciendis adipisci repellendus dicta voluptatum, neque officiis unde, vel in. Perferendis quidem, aliquam accusantium fugiat omnis accusamus? Ratione, neque fugit, ducimus iste ullam eaque architecto odio asperiores animi vero deleniti repellat laudantium officia, tenetur ipsa ex aspernatur quaerat odit omnis quibusdam est reiciendis labore blanditiis pariatur? Eveniet minus quod tempora voluptate reprehenderit facilis ad placeat eligendi asperiores rem assumenda praesentium cum, voluptatem dolorum perferendis mollitia sint harum nemo dicta illum incidunt ex esse? Nostrum facilis, optio quia incidunt ex laudantium vero quaerat rerum autem molestiae tempore et omnis quas consequatur, libero hic? Tempora exercitationem ducimus, beatae non numquam necessitatibus voluptatem corporis. Sapiente ipsum, accusantium rerum nisi dignissimos nulla expedita dolor vel quibusdam porro quisquam, fugit adipisci doloremque quod? Illo, ullam obcaecati optio quibusdam voluptas nesciunt corporis quia iste quo vero esse quam ipsam hic, sint doloremque nostrum magni quod? Alias obcaecati deleniti est recusandae illum molestiae, eius qui natus delectus facere aperiam laudantium odit iusto ut voluptatibus animi maxime accusamus quia ipsam, error nemo voluptate molestias impedit nisi! Mollitia ipsam ex officiis, illo voluptatibus, eveniet non minus. Debitis sequi, neque provident aliquam nihil eaque, animi qui maxime placeat commodi a autem impedit saepe temporibus est, possimus, laudantium harum in! Praesentium tempora, libero officia pariatur veritatis quidem rerum debitis, possimus hic unde, illo ducimus nostrum veniam obcaecati et harum accusamus beatae est sed neque. Facere, vel, earum. Ab ducimus ipsam explicabo placeat nisi impedit aperiam, voluptatem. Labore fugiat fuga est neque odit perspiciatis, facere tenetur, architecto laudantium, magni eligendi ipsa placeat ipsam voluptatum nostrum reiciendis magnam cum. Atque nam officia architecto est accusamus similique incidunt possimus ratione, soluta quod rem porro totam provident! Consectetur, saepe, libero. Quidem id sunt nisi possimus, exercitationem omnis nesciunt excepturi, ad culpa. Tempora eveniet vitae alias ut a. Laboriosam velit doloremque assumenda totam eos, eaque animi. Quam veniam tempore, ratione porro ea aliquid distinctio quo nisi similique earum eum quisquam enim illum recusandae quibusdam iste ipsa, officia, praesentium. Voluptatibus praesentium reprehenderit commodi veritatis dolorem quia laborum, ducimus nobis. Omnis ullam consequuntur illo officia modi quis beatae doloremque, iusto doloribus dicta aliquam quidem in, possimus sunt vero iste totam quia sequi cumque error, sapiente accusamus. Iure fugit, magni nobis, veniam reiciendis mollitia sequi porro consequatur dolorem error corporis veritatis doloribus aliquam iusto laboriosam amet ratione minima voluptatibus unde autem, commodi quas fugiat eos. Odit aliquam at tenetur deserunt omnis necessitatibus amet porro nesciunt officiis beatae molestiae non, doloremque consectetur explicabo eius quisquam aspernatur labore aut numquam sit. Veritatis maiores, cumque voluptas repudiandae ipsa eum alias fugit earum molestiae. Modi repudiandae voluptas eum nisi magni consequatur eius esse. Consectetur architecto sunt odit eligendi sequi sint eaque alias temporibus optio. Eum sapiente exercitationem sint voluptate vel sed vitae et ex saepe inventore quidem doloribus asperiores dolorum quia expedita, distinctio commodi, hic. Accusantium aperiam excepturi natus sequi sunt a porro, blanditiis, atque sapiente ad sit nihil totam! Eum molestiae consequatur ratione, repellat impedit facere, fugiat minus officiis explicabo quos, distinctio voluptate nulla excepturi quasi beatae commodi ab debitis cum minima atque. Excepturi eveniet consequatur, optio. Provident voluptates tempora natus quam esse placeat ut debitis quibusdam eos, aliquid odit at fugiat eum iusto non laudantium soluta enim quidem doloribus eius, cupiditate perspiciatis magni. Atque alias quibusdam tempora sapiente hic sit nesciunt? Excepturi laudantium dolore ratione adipisci aut ipsum voluptatibus, tempore explicabo dolorum quibusdam molestias sed esse doloremque officia ipsam amet ab, mollitia architecto. Voluptas officiis provident facere mollitia, odit culpa qui sint quis cum fugiat sit tempora deleniti debitis rem dolores inventore dolor nostrum tenetur similique quod, unde alias voluptatum est eveniet. Aliquid repudiandae illo nam, iure rerum quaerat necessitatibus minima. Optio similique repellat qui quasi facilis a modi ipsum, accusantium laboriosam quibusdam esse aspernatur rem pariatur recusandae animi saepe fugit corporis tempore expedita. Itaque totam blanditiis quis repudiandae, deserunt, quisquam, quae magnam in dolore iure minima quos.
                </div>
            </ripple>
            <div slot="buttons">
                <a href="#!" class="button cancel raised" @click.prevent="modal2State=false">Close Modal</a>
                <ripple color="secondary">
                    <a href="#!" class="button raised" @click.prevent>Do Other Things</a>
                </ripple>
            </div>
        </modal>
    </div>
</template>

<script>
    import FormInput from 'components/FormInput';
    import TextBox from 'components/TextBox';
    import SelectInput from 'components/SelectInput';
    import Toggle from 'components/Toggle';
    import Ripple from 'components/Ripple';
    import Modal from 'components/Modal';
    import Dropdown from 'components/Dropdown';
    import ErrorMessage from 'components/ErrorMessage';
    import GoogleMap from 'components/GoogleMap';
    import ReadMore from 'components/ReadMore';
    import ScrollToTop from 'components/ScrollToTop';

    // UA-23658547-7
    // TODO: spinner
    // TODO: Code view
    // TODO: date picker
    // TODO: slider
    // TODO: accordion
    export default {
        name: 'app',
        data: () => ({
            formInputValue: '',
            textBoxValue: '',
            selectInputValue: {
                value: '',
                options: [
                    {text: 'Cleverly', value: 'cleverly'},
                    {text: 'Snapshot', value: 'snapshot'},
                ],
            },
            toggleValue: false,
            radioValue: '',
            modal1State: false,
            modal2State: false,
            errorMessage: '',
        }),
        components: {
            FormInput,
            TextBox,
            SelectInput,
            Toggle,
            Ripple,
            Modal,
            Dropdown,
            ErrorMessage,
            GoogleMap,
            ReadMore,
            ScrollToTop,
        }
    }
</script>

<style lang="scss">
    @import '~scss/app';
</style>
