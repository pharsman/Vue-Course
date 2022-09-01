<template>
    <TheHeader title="Remember me" />
    <TheResources />
</template>

<script>
import TheResources from './components/learning-resourses/TheResources.vue'
import TheHeader from './components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader,
        TheResources
    },
}
</script>

<style >
* {
    box-sizing: border-box;
    font-weight: bold;
}

body {
    margin: 0;
}
</style>
