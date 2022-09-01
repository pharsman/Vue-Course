<template>
    <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure enter at least few characters into each input field</p>
        </template>
        <template #actions>
            <BaseButton @click="confirmError">Okay</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput" v-model="tInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" row="3" ref="descInput" v-model="txInput" />
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput" v-model="uInput">
                <div>
                    <BaseButton type="submit">Add Resources</BaseButton>
                </div>
            </div>
        </form>
    </BaseCard>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue'
import BaseButton from '../UI/BaseButton.vue';
export default {
    inject: ["addResource"],
    data() {
        return {
            inputIsInvalid: false,
            tInput: '',
            txInput: '',
            uInput: ''
        };
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredUrl = this.$refs.linkInput.value;
            if (enteredTitle.trim() === "" || enteredDesc.trim() === "" || enteredUrl.trim() === "") {
                this.inputIsInvalid = true;
                return;
            }
            this.addResource(enteredTitle, enteredDesc, enteredUrl);
            this.tInput = ''
            this.txInput = ''
            this.uInput = ''

        },
        confirmError() {
            this.inputIsInvalid = false
        }
    },
    components: { BaseDialog, BaseButton }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    outline: none;
}

.form-control {
    margin: 1rem 0
}

button {
    margin-top: 14px;
}
</style>