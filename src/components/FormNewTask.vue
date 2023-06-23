<template>
     <el-col class="form" :span="12">
        <h4>Новая задача</h4>
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
        <el-button type="primary" @click="onSubmit('form')">Создать</el-button>
      </el-form-item>
    </el-form>
</el-col>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { uniqid } from '@/helpers'
  export default {
    components: {
    },
    data () {
        return {
            form: reactive({
                name: '',
                date: '',
                time: '',
                required: false,
                desc: ''
            },
            ),
            rules: {
          name: [
            { required: true, message: 'Пожалуйста, укажите название задачи', trigger: 'blur' },
            { min: 3, max: 5, message: 'Не меньше 3 символов', trigger: 'blur' }
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
    
    
    methods: {
      uniqid,
      clearForm () {
        this.$router.push('/tasks')
        this.name = ''
        this.date=''
        this.time=''
        this.required = false
        this.desc = ''
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('ADD_TASK', {id:uniqid(), ...this.form})
            this.clearForm()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
  </script>
  <style scoped>
  .form {
    padding: 40px;
    min-width: 50%;
  }
  @media screen and (max-width: 1000px) {
    .form {
      min-width: 70%;
      left: 0;
      padding: 10px;
    }
    .field{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  }

  </style>