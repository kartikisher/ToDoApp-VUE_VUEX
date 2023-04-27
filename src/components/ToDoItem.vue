<template>
    <div class="stack-small">
        <div class="custom-checkbox">
            <input type="checkbox" class="checkbox" :id="item.id" :checked="isDone" @change="$emit('checkbox-changed')" />
            <label :for="id" class="checkbox-label" :on-change="{newLabel:$store.state.newLabel}">{{ item.label }}<pre></pre><b>DUE DATE:</b>{{ formattedDate }}</label>
        </div>
        <div class="btn-group">
            <button type="button" class="btn" @click="taskEditModal">
                Edit <span class="visually-hidden">{{ item.label }}<b>DUE DATE:</b>{{ item.DueDate }}</span>
            </button>
            <button type="button" class="btn btn__danger" @click="showModal">
                Delete <span class="visually-hidden">{{ item.label }}<b>DUE DATE:</b>{{ item.DueDate }}</span>
            </button>
            <Modal v-if="isModalVisible" @close="closeModal" @delete-item="deleteToDo" :id="item.id" />
            <to-do-item-edit-form v-if="isEditModalVisible" :id="item.id" :label="item.label"  @close="closeEditModal">
            </to-do-item-edit-form>
        </div>
    </div>

</template>
  
<script>
import ToDoItemEditForm from './ToDoEditForm.vue'
import Modal from './Modal.vue'

export default {
    name:'ToDoItem',
    data() {
        return {
            isEditModalVisible:false,
            isModalVisible: false
        };
    },
    computed: {
        isDone() {
            return this.done;
        },
        formattedDate() {
           return new Date(this.$props.item.dueDate).toDateString()
        }
    },

    methods: {
        taskEditModal() {
            this.isEditModalVisible = true;
        },
        itemEdited(newLabel) {
            this.$emit('item-edited', newLabel);
            this.isEditing = false;
        },
        editCancelled() {
            this.isEditing = false;
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        deleteToDo(id) {
            this.$emit('item-deleted', id);
        },
        closeEditModal(){
            this.isEditModalVisible = false;
        }

    },
    components: {
        ToDoItemEditForm,
        Modal,
    },
    props: {

        item: { required: true, type: Object },

    }
};
</script>