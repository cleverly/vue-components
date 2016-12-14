<style lang="scss" scoped>
    @import '~scss/vars';
    @import '~scss/mixins';
    .tag-cloud {
        &__active-tags {
            @include hoverable(2, 3);
            color: white;
            background-color: $shadow-color;
            display: inline-block;
            border-radius: 5px;
            margin-bottom: 10px;
            max-width: 50%;
        }
        &__inactive-tags {

        }
        &__tag {
            display: inline-block;
            background-color: rgba(white, 0.5);
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
        .tag-enter-active, .tag-leave-active, .tag-move {
            transition: all 500ms;
        }
        .tag-enter, .tag-leave-active {
            opacity: 0;
            transform: scale(0);
        }
        .tag-leave-active {
            position: absolute;
        }
    }
</style>
<template>
    <div :id="id" class="tag-cloud">
         <div class="tag-cloud__active-tags">
             <transition-group name="tag">
                 <span class="tag-cloud__tag tag-cloud__tag--active" v-for="tag in active" @click="toggleTag" :data-key="tag.key" :key="tag.key">{{tag.label}}</span>
             </transition-group>
         </div>
         <div class="tag-cloud__inactive-tags">
             <transition-group name="tag">
                 <span class="tag-cloud__tag tag-cloud__tag--inactive" v-for="tag in inactive" @click="toggleTag" :data-key="tag.key" :key="tag.key">{{tag.label}}</span>
             </transition-group>
         </div>
    </div>
</template>
<script>
    export default {
        name: 'TagCloud',
        data: () => ({
            id: `tag-cloud-${Math.random().toString(36).substring(7)}`,
            map: {},
        }),
        props: {
            value: {
                type: Array,
                required: true,
            }
        },
        computed: {
            active() {
                let active = [];
                this.value.forEach((tag) => {
                    if (tag.active) {
                        active.push(tag);
                        this.map[tag.key] = tag;
                    }
                });
                return active;
            },
            inactive() {
                let inactive = [];
                this.value.forEach((tag) => {
                    if (!tag.active) {
                        inactive.push(tag);
                        this.map[tag.key] = tag;
                    }
                });
                return inactive;
            },
        },
        methods: {
            toggleTag(e) {
                let key = e.currentTarget.dataset.key;
                let newVal = [];
                this.map[key].active = !this.map[key].active;
                Object.keys(this.map).forEach((tag) => {
                    newVal.push(this.map[tag]);
                });
                this.$emit('input', newVal);
            }
        },
    };
</script>
