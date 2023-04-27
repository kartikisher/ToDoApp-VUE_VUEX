import Vuex from 'vuex'
import Vue from 'vue'
import uniqueId from "lodash.uniqueid";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        newLabel:'',
        ToDoItems: [
            { id: uniqueId("to-do"), label: "Learn Vue", done: false , dueDate: '2023-05-01'},
            { id: uniqueId("to-do"), label: "Create a Vue Project with the CLI", done: false , dueDate: '2023-05-01'},
            { id: uniqueId("to-do"), label: "Have Fun", done: false , dueDate: '2023-05-01'},
            { id: uniqueId("to-do"), label: "Create a to-do list", done: false , dueDate: '2023-05-01'},
          ]
        },
        mutations: {
                addToDo(state,{toDoLabel, dueDate}) {
                state.ToDoItems.push({ id: uniqueId('to-do'), label: toDoLabel, done: false, dueDate });
                },
                updateDoneStatus(state,id) {
                const toDoToUpdate = state.ToDoItems.find((ToDoItems) => ToDoItems.id === id)
                toDoToUpdate.done = !toDoToUpdate.done;
                },
                deleteToDo(state,{id}) {
                const index = state.ToDoItems.findIndex((ToDoItem) => ToDoItem.id === id)
                state.ToDoItems.splice(index,1)
                },

                setNewLabel(state,{newLabel,id}){
                    const toDoToUpdate = state.ToDoItems.find((ToDoItems) => ToDoItems.id === id)
                    toDoToUpdate.label = newLabel;
                },
            },
        getters: {
            listSummary(state) {
                const numberFinishedItems = state.ToDoItems.filter((item) => item.done).length
                return `${numberFinishedItems} out of ${state.ToDoItems.length} items completed`
              }
            },
        
})