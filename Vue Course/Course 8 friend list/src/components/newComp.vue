<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    },
}
</script>

<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<style scoped>
form {
    width: 700px;
    padding: 50px 60px;
    background-color: #ffffff;
    border-radius: 43px 43px 43px 43px;
    box-shadow: 0px 0px 42px -10px rgba(0, 0, 0, 0.75);
    margin: 50px auto;
}

label {
    color: #000000;
    font-weight: bold;
}

input {
    margin-top: 20px;
    outline: none;
    margin-left: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
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