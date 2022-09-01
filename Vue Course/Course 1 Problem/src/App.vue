<script>
export default {
  data() {
    return {
      name: 'Tengo',
      age: 21,
      numb: Math.random(),
      url: 'https://cdn.shopify.com/s/files/1/0601/5349/5720/files/heroImg-2_92a243fb-7e79-480c-ab29-714df3d8bff0.png?v=1634298374'
    }
  },
}
</script>

<template>
  <div class="box">
    <h1>{{name}}</h1>
    <div class="line"></div>
    <h2>{{age}}</h2>
    <h2>{{age + 5}} in 5 years</h2>
    <h2>{{numb}}</h2>
    <div class="img">
      <img
        :src="url">
    </div>
    <input type="text" :value="name">
  </div>

</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-decoration: none;
}

.box {
  border-radius: 43px 43px 43px 43px;
  -webkit-border-radius: 43px 43px 43px 43px;
  -moz-border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
  width: 700px;
  margin: 50px auto;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

h1 {
  font-weight: bold;
  font-size: 50px;
  color: #8e007f;
}

.line {
  border-radius: 10px;
  background-color: #939393;
  padding: 4px;
  width: 600px;
  margin: 0 auto;
}

h2 {
  width: 650px;
  margin: 0 auto;
  background-color: #8e007f;
  border-radius: 40px;
  margin-top: 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
}

.img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
}

.img img {
  width: 100%;
}
input{
  margin-top: 10px;
  outline: none;
}
</style>
