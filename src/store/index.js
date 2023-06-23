import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      tasks: [],
      editableTasks: null,
      isTaskToday: false,
    }
  },
  mutations: {
    CLEARE_EDITABLE_TASK (state) {
      state.editableTasks = null
    },
    INIT_LOCAL_TASK (state, tasks) {
      state.tasks = tasks
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