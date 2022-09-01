<template>
  <BaseContainer v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <BaseSearch v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm" />
    <ul v-if="hasProjects">
      <ProjectItem v-for="prj in availableProjects" :key="prj.id" :title="prj.title" />
    </ul>
    <h3 v-else>No projects found.</h3>
  </BaseContainer>
  <BaseContainer v-else>
    <h3>No user selected.</h3>
  </BaseContainer>
</template>

<script>
import { ref, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')

    const hasProjects = computed(() => {
      return props.user.projects && availableProjects.value.length > 0;
    })

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) => prj.title.toLocaleLowerCase().includes(activeSearchTerm.value.toLocaleLowerCase()));
      }
      return props.user.projects;
    })

    function updateSearch(val) {
      enteredSearchTerm.value = val
    }

    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val
        }
      }, 300);
    })

    const { user } = toRefs(props)

    watch(user, () => {
      enteredSearchTerm.value = ''
    })

    return {
      updateSearch, availableProjects, hasProjects, enteredSearchTerm
    }
  }
  //   data() {
  //     return {
  //       enteredSearchTerm: '',
  //       activeSearchTerm: '',
  //     };
  //   },
  //   computed: {
  //     hasProjects() {
  //       return this.user.projects && this.availableProjects.length > 0;
  //     },
  //     availableProjects() {
  //       if (this.activeSearchTerm) {
  //         return this.user.projects.filter((prj) =>
  //           prj.title.toLocaleLowerCase().includes(this.activeSearchTerm.toLocaleLowerCase())
  //         );
  //       }
  //       return this.user.projects;
  //     },
  //   },
  //   methods: {
  //     updateSearch(val) {
  //       this.enteredSearchTerm = val;
  //     },
  //   },
  //   watch: {
  //     enteredSearchTerm(val) {
  //       setTimeout(() => {
  //         if (val === this.enteredSearchTerm) {
  //           this.activeSearchTerm = val;
  //         }
  //       }, 300);
  //     },
  //     user() {
  //       this.enteredSearchTerm = '';
  //     },
  //   },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>