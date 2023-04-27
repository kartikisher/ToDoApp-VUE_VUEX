<script>
export default {
    data() {
        return {
            label: "",
            selectedDate: null,
            errors:[],
            dateValid:false,
        }
    },
    computed: {
        taskValid() {
            return this.label.length >= 3;
        },
    },    
    methods: {
        onSubmit() {
            if (this.label === "") {
                return;
            }
            if (this.selectedDate === "") {
                return;
            }
            this.$emit("todo-added",{ toDoLabel:this.label, dueDate:this.selectedDate});

            this.selectedDate = null;
            this.label = "";
        }
    }

};
</script>

<template>
    <div>
        <form id="form" @submit.prevent="onSubmit">
            <h2 class="label-wrapper">
                <label for="new-todo-input" class="label__lg">What needs to be done?</label>
            </h2>
            <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label" class="input__lg"/>
            <span v-if="!taskValid" class="error">Valid Task is Required.</span>
            <div>
                <label for="date-input"><b>Select Due Date:</b></label>
                <input name="due-date" id="date-input" type="date" v-model="selectedDate" value="2023-04-20" min="2023-04-27">
                <span v-if="!dateValid" class="error">Due Date is Required.</span>
            </div>
            <button type="submit" class="btn btn__primary btn__lg">Add</button>
        </form>
    </div>
</template>

<style>
input[type="date"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.error{
    color: red;
    font-size: small;
}
</style>
