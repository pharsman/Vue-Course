<template>
  <h2>My Course Goals</h2>
  <h3 v-if="goals.show">{{ goals.goal }}</h3>
  <button @click="hideShow">Toggle Goal</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {

    
    const goals = reactive({
      goal: 'Finish the course!',
      show: true
    })

    function toggle() {
      goals.show = !goals.show
    }

    return {
      goals: goals,
      hideShow: toggle
    }
  }
}
</script>

<style>
* {
  text-align: center;
  font-weight: bold;
}
</style>