<template>
   <div class="modal-background"></div>
     <el-col class="modal" :span="12" :offset="6">
        <el-button 
         @click="closeForm" 
          class="close-icon"
           size="large" 
           :icon="Search" circle>
            <el-icon size="30px"><Close /></el-icon>
        </el-button>
        <h4>Изменить задачу</h4>
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item class="field" label="Название" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item class="field" label="Дата начала" prop="date">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="Выберете дату"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
        <el-form-item class="field" prop="time" label="Время начала">
        <el-col :span="11">
          <el-time-picker
            v-model="form.time"
            placeholder="Время выполнения"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Срочная">
        <el-switch v-model="form.required" />
      </el-form-item>
      <el-form-item class="field" label="Описание">
        <el-input rows="12" v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">Изменить</el-button>
      </el-form-item>
    </el-form>
</el-col>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { Close } from '@element-plus/icons-vue'
  export default {
    components: {
        Close
    },
    data () {
        return {
            form: reactive({
                name: this.task.name || '',
                date: this.task.date || '',
                time: this.task.time || '',
                required:this.task.required || false,
                desc: this.task.desc || ''
            }),
            rules: {
          name: [
            { required: true, message: 'Пожалуйста, укажите название задачи', trigger: 'blur' },
            { min: 3, message: 'Не меньше 3 символов', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: 'Укажите дату задачи', trigger: 'change' }
          ],
          time: [
            { type: 'date', required: false, message: 'Укажите время', trigger: 'change' }
          ],
          desc: [
            { required: false, message: 'Пожалуйста, укажите описание', trigger: 'blur' }
          ]
        }
        }
    },
    props: {
      task: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      closeForm () {
        this.$store.commit('CLEARE_EDITABLE_TASK')
        this.name = ''
        this.date=''
        this.time=''
        this.required = false
        this.desc = ''
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('EDIT_TASK', {id:this.task.id, ...this.form})
            this.closeForm()
          } else {
            console.log('error validation');
            return false;
          }
        });
      },
      
    }
}
  </script>
  <style scoped>
 .modal {
    background-color: white;
    border: 1px solid #020202;
    border-radius: 20px;
    padding: 40px;
    min-width: 45%;
    position: absolute;
    top: 20%;
    left: 1%;
    z-index: 60;
  }
  .modal-background {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }
  .close-icon {
    position: absolute;
    right: 30px;
    top: 30px;
  }
  @media screen and (max-width: 1000px) {
    .modal {
      min-width: 70%;
      left: 0;
      padding: 10px;
    }
    .field{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .close-icon {
    right: 10px;
    top: 10px;
  }
  }

  </style>