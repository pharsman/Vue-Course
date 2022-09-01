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
import { ref, computed, watch } from 'vue';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  emits: ['listProjects'],
  setup(props) {
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')

    const availableUsers = computed(() => {
      let users = [];
      if (activeSearchTerm.value) {
        users = props.users.filter((usr) => usr.fullName.toLocaleLowerCase().includes(activeSearchTerm.value.toLocaleLowerCase()));
      } else if (props.users) {
        users = props.users;
      }
      return users;
    })


    const sorting = ref(null)
    const displayedUsers = computed(() => {
      if (!sorting.value) {
        return availableUsers.value;
      }
      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (sorting.value === 'asc') {
          return -1;
        } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    })

    function updateSearch(val) {
      enteredSearchTerm.value = val
    }
    function sort(mode) {
      sorting.value = mode
    }

    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val
        }
      }, 300);
    })

    return {
      enteredSearchTerm,
      updateSearch,
      sorting,
      sort,
      displayedUsers,
    }
  }
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //     sorting: null,
  //   };
  // },
  // computed: {
  //   availableUsers() {
  //     let users = [];
  //     if (this.activeSearchTerm) {
  //       users = this.users.filter((usr) =>
  //         usr.fullName.toLocaleLowerCase().includes(this.activeSearchTerm.toLocaleLowerCase())
  //       );
  //     } else if (this.users) {
  //       users = this.users;
  //     }
  //     return users;
  //   },
  //   displayedUsers() {
  //   if (!this.sorting) {
  //     return this.availableUsers;
  //   }
  //   return this.availableUsers.slice().sort((u1, u2) => {
  //     if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
  //       return 1;
  //     } else if (this.sorting === 'asc') {
  //       return -1;
  //     } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
  //       return -1;
  //     } else {
  //       return 1;
  //     }
  //   });
  // },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  //   sort(mode) {
  //     this.sorting = mode;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   }
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>