<template>
    <ul>
        <LearningResources v-for="res in resourses" :id="res.id" :key="res.id" :title="res.title" :desc="res.desc"
            :link="res.link" />
    </ul>
    <h2 v-if="resourses.length === 0"> Resources is Empty &#129301</h2>
</template>

<script>
import LearningResources from './LearningResources.vue'
export default {
    components: {
        LearningResources
    },
    inject: ['resourses']
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}

h2 {
    color: #ff0000;
    text-align: center;
}
</style>