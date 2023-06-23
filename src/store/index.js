import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      modalNewTaskActve: false,
      tasks: [],
      editableTasks: null,
      isTaskToday: false,
    }
  },
  mutations: {
    TOGGLE_MODAL (state) {
      state.modalNewTaskActve =!state.modalNewTaskActve
    },
    CLEARE_EDITABLE_TASK (state) {
      state.editableTasks = null
    },
    SET_EDITABLE_TASK (state, task) {
      state.editableTasks = task
    },
    ADD_TASK (state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK (state, id) {
      const index = state.tasks.findIndex((task) => task.id === id)
      state.tasks.splice(index, 1)
    },
    EDIT_TASK (state, changeTask) {
      const index = state.tasks.findIndex((task) => task.id === changeTask.id)
      state.tasks[index] = {...changeTask}
    },   
  },
  getters: {
  }
})
export default store