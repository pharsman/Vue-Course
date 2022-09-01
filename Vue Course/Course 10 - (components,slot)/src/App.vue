<template>

    <TheHeader />
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
    <CourseGoal #default="slotProps">
        <h2> {{ slotProps.item }} </h2>
        <p>{{ slotProps['anotherProp'] }}</p>
    </CourseGoal>
    <button @click="setSelectedComponent('activeGoals')">Active Goals</button>
    <button @click="setSelectedComponent('manageGoals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectComponent === 'activeGoals'"/>
    <ManageGoals v-if="selectComponent === 'manageGoals'"/> -->
    <keep-alive>
      <component :is="selectComponent" />
    </keep-alive>

</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectComponent: 'activeGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectComponent = cmp
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>