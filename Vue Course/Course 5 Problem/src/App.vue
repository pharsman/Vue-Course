<script>
export default {
  data() {
    return {
      inputText: '',
      list: [],
      show: true
    }
  },
  methods: {
    add() {
      this.list.push(this.inputText)
      this.inputText = ''
    },
    del(item){
      this.list.splice(item,1)
    }
  },
  computed: {
    change() {
      if (this.show) {
        return 'Hide'
      } else {
        return 'Show'
      }
    },
  }
}
</script>

<template>
  <header>
    <h1>Vue List and Conditional Content</h1>
  </header>
  <section>
    <h1>Assignment</h1>
    <hr>
    <input type="text" v-model="inputText">
    <button @click="add()">Add Task</button>
    <ul v-if="show">
      <li @click="del()" v-for="(item,index) in list" :key="index">{{ item }}</li>
    </ul>
    <br>
    <button @click="show = !show" v-show="list.length > 0">{{ change }}</button>
    <p v-if="this.list.length === 0">List is empty</p>
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

hr {
  height: 10px;
  border-radius: 50px;
  background-color: #535353;
  margin-top: 20px;
}

input {
  padding: 15px;
  font-size: 20px;
}

ul li {
  font-size: 40px;
  font-weight: bold;
  background-color: #06a900;
  border-radius: 40px;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  color: #ffffff;
}

button {
  cursor: pointer;
  background-color: #ff0077;
  border: 0;
  color: #ffffff;
  padding: 3px 30px;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 25px;
  padding: 10px 20px;
}
p{
  font-size: 40px;
  color: red;
  font-weight: bold;
}
</style>
