<template>
  <BaseContainer>
    <h2>Active Users</h2>
    <BaseSearch @search="updateSearch" :search-term="enteredSearchTerm" />
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</button>
    </div>
    <ul>
      <UserItem v-for="user in displayedUsers" :key="user.id" :user-name="user.fullName" :id="user.id"
        @listProjects="$emit('listProjects', $event)" />
    </ul>
  </BaseContainer>
</template>

<script>
import { toRefs } from 'vue';
import UserItem from './UserItem.vue';
import useSearch from '../../hooks/search.js'
import useSort from '../../hooks/sort';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  emits: ['listProjects'],
  setup(props) {

    const { users } = toRefs(props)

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(users, 'fullName')

    const { sorting, displayedUsers, sort } = useSort(availableItems, 'fullName')

    return {
      enteredSearchTerm,
      updateSearch,
      displayedUsers,
      sorting,
      sort,

    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>