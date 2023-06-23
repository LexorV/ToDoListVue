<template>
    <el-card class="box-card">
        <div class="card-header">
        <span>{{ task.name }}</span>
        <span>{{ `${ new Date (task.date).toLocaleDateString()}
         ${ task.time ? `${new Date (task.time).getHours()}:${new Date (task.time).getMinutes()}`: ''}` }}</span>
        <span class="warning">{{ this.task.required? 'Обязательное': '' }}</span>
        <el-button  @click="deleteTask" :icon="Delete" circle >
          <el-icon><Delete /></el-icon>
        </el-button>
      </div>
      <div class="box-description">
        <span>{{ task.desc }} </span>
        <el-button @click="editTask" type="primary" :icon="Edit" circle>
        <el-icon><Edit /></el-icon>
        </el-button>
      </div>
    </el-card>
</template>

<script>
 import { Delete, Edit } from '@element-plus/icons-vue'
export default {
  components: {
    Delete,
    Edit,
  },
    props: {
        task: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    methods: {
        deleteTask() {
          this.$store.commit('DELETE_TASK', this.task.id)
        },
        editTask() {
          this.$store.commit('SET_EDITABLE_TASK', this.task)
        }
    }
}
</script>

<style scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.box-card {
  width: 480px;
  
}
@media screen and (max-width: 700px) {
  .box-card{
    width: 300px;
  }
  }
  @media screen and (max-width: 350px) {
  .box-card{
    width: 250px;
  }
  }
.box-description {
  display: flex;
  justify-content: space-between;
}
.warning {
  color: red;
}

</style>