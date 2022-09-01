<template>
    <div>
        <h2>Manage Goals </h2>
        <input type="text" ref="goal">
        <button @click="setGoasl">Set Goal</button>
        <teleport to="body">
            <ErrorAlert v-if="inputIsInvalid">
                <h2>Input is Invalid</h2>
                <p>Please enter at least a few characters...</p>
                <button @click="confirmError">Okay</button>
            </ErrorAlert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
    data() {
        return {
            inputIsInvalid: false,
        };
    },

    methods: {
        setGoasl() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === "") {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false
        }
    },

    components: {
        ErrorAlert,
    }
}
</script>