<script>
export default{
  props: {
        label: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        }
      },
      data() {
        return {
          newLabel:this.$props.label,
        }
      },

      methods: {
        close() {
          this.$emit('close');
        },
        saveChanges(){
          this.$store.commit('setNewLabel',{id:this.$props.id,newLabel:this.newLabel})
          this.$emit('close');
        }
      }
}
</script>

<template>
  <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-header" id="modalTitle">
              <h2>SURE TO CHANGE?</h2>
              <button type="button" class="btn-close" aria-label="Close modal" @click="close">x</button>
          </div>
          <div class="modal-header" id="modalTitle">
            <input v-model="newLabel" placeholder="Enter the Task Name" align-items:center ref="fetchChanges" value="changes">
          </div>
          <div class="modal-footer">
              <button type="button" class="btn-green" @click="saveChanges()" aria-label="Close modal">Save</button>
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

  