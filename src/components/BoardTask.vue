<template>
     <el-main class="main">
    <el-col class="board">
        <OneTask
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        />
    </el-col>
</el-main>
</template>

<script>
import OneTask from '@/components/OneTask.vue' 
    export default {
        components: {
            OneTask
        },
        created () {
            this.checkedTasks()
        },
        watch: {
    '$store.state.isTaskToday': {
      handler() {
        this.checkedTasks()
      },
      immediate: true
    } 
            },     
        methods: {
            checkedTasks() {
                if(this.$store.state.isTaskToday) {
                this.tasks = this.$store.getters.tasksToday()
                }
                else  this.tasks = this.$store.state.tasks 
            }
        },
        data() {
            return {
                tasks: [] 
            }
        },
    }
</script>

<style scoped>
.board {
    display: flex;
    gap: 10px;
    box-sizing: border-box;
    flex-direction: column;
    align-items:flex-start;
}
@media screen and (max-width: 700px) {
    .board {
    align-items:center;
  }
  }
.main {
    padding: 10px;
    background-color: rgb(217, 224, 230);
    height: 100vh;
}


</style>