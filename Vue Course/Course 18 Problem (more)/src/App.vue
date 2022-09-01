<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
  <section>
    <div>Available Funds: {{ availableFunds }}</div>
    <div>Total Expenses: {{ currentExpenses }}</div>
    <hr>
    <div>Funds left: {{ remainingFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExpense">
      <div>
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="enteredExpense">
      </div>
      <button>Add Expense</button>
    </form>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const availableFunds = ref(100)
    const currentExpenses = ref(0)
    const enteredExpense = ref(null)

    const remainingFunds = computed(() => {
      return availableFunds.value - currentExpenses.value
    })

    function addExpense() {
      currentExpenses.value += enteredExpense.value
      enteredExpense.value = null
    }

    watch(remainingFunds, (val) => {
      if (val < 0) {
        alert('you are broke!')
      }
    })

    return {
      availableFunds, currentExpenses, enteredExpense, remainingFunds, addExpense
    }
  }
  // data() {
  //   return {
  //     availableFunds: 100,
  //     currentExpenses: 0,
  //     enteredExpense: null
  //   }
  // },
  // computed: {
  //   remainingFunds() {
  //     return this.availableFunds - this.currentExpenses
  //   }
  // },
  // methods: {
  //   addExpense() {
  //     this.currentExpenses += this.enteredExpense
  //     this.enteredExpense = null
  //   }
  // },
  // watch: {
  //   remainingFunds(val) {
  //     if (val < 0) {
  //       alert('you are broke!')
  //     }
  //   }
  // }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
}

header {
  background-color: #3700cf;
  padding: 3rem;
}

h1 {
  text-align: center;
  color: #ffffff;
}

section {
  border-radius: 40px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 3rem auto;
  text-align: center;
  max-width: 40rem;
  padding: 1rem 3rem;
}

div,
hr {
  margin-top: 1rem;
  font-weight: bold;
}

button {
  background-color: #a30cd1;
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
}

label {
  display: block;
}
</style>
