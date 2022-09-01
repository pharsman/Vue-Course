<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addNum(num) {
      return this.count += num
    },
  },
  computed: {
    result() {
      if (this.count > 37) {
        return 'Too mutch'
      } else if (this.count < 37) {
        return 'Not there yet'
      } else if(this.count === 37){
         return this.count
      }
    }
  },
  watch: {
    result() {
        setTimeout(() => {
          const that = this
          that.count = 0
        }, 5000);
      console.log(this.result)
    }
  }
}
</script>

<template>
  <div class="header">
    <h1>Reactivity in Action</h1>
  </div>
  <div class="header white">
    <button @click="addNum(5)">Add 5</button>
    <button @click="addNum(1)">add 1</button>
    <h1>Result: {{ result }}</h1>
  </div>
</template>

<style scoped>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
}

.white {
  background-color: #ffffff;
}

.header {
  border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  width: 700px;
  padding: 50px 60px;
  background-color: #00ff73;
  margin: 30px auto;
  text-align: center;
}

.header h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
}

.white {
  background-color: #ffffff;
}

.white h1 {
  color: #000000;
  font-size: 40px;
  margin-top: 10px;
  background-color: #00ff73;
  padding: 15px;
  border-radius: 40px;
}

button {
  background-color: #ff0066;
  color: #ffffff;
  border-radius: 40px;
  font-size: 20px;
  border: 0px;
  margin-left: 20px;
  cursor: pointer;
  padding: 10px 30px;
}
</style>