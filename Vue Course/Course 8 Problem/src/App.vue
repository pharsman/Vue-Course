<script>
import UserDataVue from './components/userData.vue'
import activeUserVue from './components/activeUser.vue'
export default {
  components: {
    UserDataVue,
    activeUserVue
  },
  data() {
    return {
      user: {
        name: 'Tengo Gogisvanidze',
        age: 21
      }
    }
  },
  methods: {
    addData(name, age) {
      this.user = {
        name: name,
        age: +age
      }
    }
  },
}
</script>

<template>
  <UserDataVue @add-user="addData" />
  <activeUserVue :user-name="user.name" :user-age="user.age" />
</template>

<style scoped>
@import './assets/base.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
}
</style>
