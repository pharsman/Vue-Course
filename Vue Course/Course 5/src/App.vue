<script>
import { remove } from '@vue/shared'

export default {
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    remove(index) {
      this.goals.splice(index, 1)
    }
  },
}
</script>

<template>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section>
    <h1>My Course Goals</h1>
    <hr>
    <input v-model="enteredGoalValue" type="text">
    <button @click="addGoal()">Add Goal</button>
    <p v-if="goals.length === 0">No goals have been added yet - please start addingsome!</p>
    <ul v-else="goals.length > 0">
      <li v-for="(goal, index) in goals" :key="goal" @click="remove(index)">{{ goal }} - {{ index }}
      <br>  
        <input type="text" @click.stop>
      </li>
    </ul>

    <!-- <ul>
      <li v-for="num in 10">{{ num }}</li>
    </ul> -->
    <!-- <ul>
      <li v-for="(value, key, index) in { name: 'Max', age: 21 }">{{ index }} - {{ key }}-{{ value }}</li>
    </ul> -->
  </section>

</template>

<style scoped>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
}

p {
  margin-top: 10px;
  font-size: 24px;
}

ul li {
  font-size: 40px;
  font-weight: bold;
  background-color: #06a900;
  border-radius: 40px;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
}

header {
  width: 700px;
  padding: 50px 60px;
  background-color: #06a900;
  border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  margin: 50px auto;
}

header h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
}

hr {
  height: 10px;
  border-radius: 50px;
  background-color: #535353;
  margin-top: 20px;
}

section {
  width: 700px;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
}

section h1 {
  color: #06a900;
  font-size: 50px;
  font-weight: bold;
}

input {
  margin-top: 20px;
  outline: none;
}

button {
  cursor: pointer;
  background-color: #ff0077;
  border: 0;
  color: #ffffff;
  padding: 3px 30px;
}
</style>
