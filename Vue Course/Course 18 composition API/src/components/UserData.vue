<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ age }}</h3>
        <slot></slot>
    </div>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context) {
        const userName = computed(() => {
            return props.firstName + ' ' + props.lastName
        })

        const age = inject('userAge')

        // context.emit('saveData')


        onBeforeMount(() => {
            console.log('onBeforeMont')
        })

        onMounted(() => {
            console.log('onMounted')
        })

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })

        onUpdated(() => {
            console.log('onUpdated')
        })

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        return { userName, age }

    }
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName
    //     }
    // },
} 
</script>