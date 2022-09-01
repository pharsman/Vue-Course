<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            enteredName: '',
            enteredage: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-user', this.enteredName, this.enteredage)
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitData">
        <label>Username</label>
        <input type="text" v-model="enteredName">
        <br>
        <label>Age</label>
        <input type="number" v-model="enteredage">
        <br>
        <button>Add</button>
    </form>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    list-style-type: none;
}

input {
    margin-top: 10px;
    font-size: 30px;
    outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

form {
    width: 50%;
    margin: 50px auto;
    background-color: #ffffff;
    box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
    border-radius: 40px;
    padding: 50px 60px;
}

label {
    margin-right: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #f30404;
}

input[type=number] {

    margin-left: 86px;
    -moz-appearance: textfield;
}

button {
    cursor: pointer;
    background-color: #ff0077;
    border: 2px solid black;
    color: #ffffff;
    padding: 8px 20px;
    margin-top: 20px;
}
</style>