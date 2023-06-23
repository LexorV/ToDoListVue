<template>
     <el-main class="main">
    <el-col class="board">
        <OneTask
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        />
    </el-col>
    <ModalChangeTask v-if="$store.state.editableTasks" :task="$store.state.editableTasks" />
</el-main>
</template>

<script>
import OneTask from '@/components/OneTask.vue'
import ModalChangeTask from '@/components/ModalChangeTask.vue'
    export default {
        components: {
            OneTask,
            ModalChangeTask
        },
        data() {
            return {
                tasks: this.$store.state.tasks ||
                 JSON.parse(localStorage.getItem('tasks')) 
                 || [] 
            }
        },
        created () {
            const loacalTask =  JSON.parse(localStorage.getItem('tasks'))
            if(loacalTask) {
                this.$store.commit('INIT_LOCAL_TASK', loacalTask)
            }
        }
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