<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges
  ">Save Changes</button>
  <ul>
    <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role" />
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouteEnter')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('usersList cmp beforeRouteLeave')
    console.log(to, from)
    if (this.changesSaved === true) {
      next()
    } else {
      const userWantsToLeav = confirm('Are You sure> you got unsaved Changes!')
      next(userWantsToLeav)
    }
  },
  unmounted() {
    console.log('unmounted')
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>