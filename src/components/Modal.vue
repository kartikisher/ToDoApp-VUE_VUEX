
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Modal',
    props: {
        id: { required: true, type: String },
    },
    data() {
        return {
            todoId: this.$props.id
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        deleteItem() {
            this.close()
            this.deleteToDo({ id: this.todoId })
        },
        ...mapMutations([
            'deleteToDo',
        ]),
    },
};
</script>

<template>
    <div class="modal-backdrop">
        <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <div class="modal-header" id="modalTitle">
                <h2>Sure to Delete ?</h2>
                <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-green" @click="deleteItem()" aria-label="Close modal">Delete</button>
            </div>
        </div>
    </div>
</template>

<style >
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: red;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid red;
    border-radius: 2px;
    cursor: pointer;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>


