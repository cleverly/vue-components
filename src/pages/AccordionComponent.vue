<template>
    <div id="accordion-component" class="accordion-component">
        <h1>Accordion</h1>
        <div class="row">
            <div class="col s12 m8 mo2">
                <h2>Normal</h2>
                <accordion :items="accordionItems" />
                <h2>Multi Open</h2>
                <accordion :items="accordionItems" :multiOpen="true" />
            </div>
        </div>
    </div>
</template>
<script>
    import Accordion from 'components/Accordion';
    export default {
        name: 'AccordionComponent',
        data: () => ({
            accordionItems: [
                {
                    header: 'Test 1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi unde ipsum, reprehenderit tempore voluptas, enim reiciendis fuga provident illum inventore repellat deleniti illo aliquam quos soluta delectus ad deserunt commodi in dignissimos sequi. Delectus possimus quam cum earum nisi, optio dolorem quisquam provident animi obcaecati quo maxime illum, accusantium inventore iusto, temporibus corporis. Suscipit nihil ab sunt, natus aut tenetur vel voluptas, soluta, velit, enim id libero. Officiis esse, quos excepturi incidunt nostrum dolorem odio fugit facilis assumenda ab dolorum facere ea atque, deleniti voluptate dignissimos temporibus aspernatur. Voluptatum accusamus doloremque ipsam ratione nesciunt. Facilis magni amet voluptate optio!',
                },
                {
                    header: 'Test 2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi unde ipsum, reprehenderit tempore voluptas, enim reiciendis fuga provident illum inventore repellat deleniti illo aliquam quos soluta delectus ad deserunt commodi in dignissimos sequi. Delectus possimus quam cum earum nisi, optio dolorem quisquam provident animi obcaecati quo maxime illum, accusantium inventore iusto, temporibus corporis. Suscipit nihil ab sunt, natus aut tenetur vel voluptas, soluta, velit, enim id libero. Officiis esse, quos excepturi incidunt nostrum dolorem odio fugit facilis assumenda ab dolorum facere ea atque, deleniti voluptate dignissimos temporibus aspernatur. Voluptatum accusamus doloremque ipsam ratione nesciunt. Facilis magni amet voluptate optio!',
                },
                {
                    header: 'Test 3',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi unde ipsum, reprehenderit tempore voluptas, enim reiciendis fuga provident illum inventore repellat deleniti illo aliquam quos soluta delectus ad deserunt commodi in dignissimos sequi. Delectus possimus quam cum earum nisi, optio dolorem quisquam provident animi obcaecati quo maxime illum, accusantium inventore iusto, temporibus corporis. Suscipit nihil ab sunt, natus aut tenetur vel voluptas, soluta, velit, enim id libero. Officiis esse, quos excepturi incidunt nostrum dolorem odio fugit facilis assumenda ab dolorum facere ea atque, deleniti voluptate dignissimos temporibus aspernatur. Voluptatum accusamus doloremque ipsam ratione nesciunt. Facilis magni amet voluptate optio!',
                },
                {
                    header: 'Test 4',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi unde ipsum, reprehenderit tempore voluptas, enim reiciendis fuga provident illum inventore repellat deleniti illo aliquam quos soluta delectus ad deserunt commodi in dignissimos sequi. Delectus possimus quam cum earum nisi, optio dolorem quisquam provident animi obcaecati quo maxime illum, accusantium inventore iusto, temporibus corporis. Suscipit nihil ab sunt, natus aut tenetur vel voluptas, soluta, velit, enim id libero. Officiis esse, quos excepturi incidunt nostrum dolorem odio fugit facilis assumenda ab dolorum facere ea atque, deleniti voluptate dignissimos temporibus aspernatur. Voluptatum accusamus doloremque ipsam ratione nesciunt. Facilis magni amet voluptate optio!',
                },
                {
                    header: 'Test 5',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nisi unde ipsum, reprehenderit tempore voluptas, enim reiciendis fuga provident illum inventore repellat deleniti illo aliquam quos soluta delectus ad deserunt commodi in dignissimos sequi. Delectus possimus quam cum earum nisi, optio dolorem quisquam provident animi obcaecati quo maxime illum, accusantium inventore iusto, temporibus corporis. Suscipit nihil ab sunt, natus aut tenetur vel voluptas, soluta, velit, enim id libero. Officiis esse, quos excepturi incidunt nostrum dolorem odio fugit facilis assumenda ab dolorum facere ea atque, deleniti voluptate dignissimos temporibus aspernatur. Voluptatum accusamus doloremque ipsam ratione nesciunt. Facilis magni amet voluptate optio!',
                },
            ],
        }),
        components: {
            Accordion,
        },
    };
</script>
