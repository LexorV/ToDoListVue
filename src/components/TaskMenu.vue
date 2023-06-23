<template>
    <el-row class="menu" >
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          default-active="/"
          text-color="#fff"
          router= true 
        >
        <el-menu-item route="/"  index="/">
        Создать задачу 
          </el-menu-item>
          <el-menu-item   route="tasks"  index="tasks">
        Общие задачи
          </el-menu-item>
        </el-menu>
    </el-row>
  </template>
  
  <script>
  export default {
    methods: {
    }
  }

  </script>
    <style scoped>
    @media screen and (max-width: 550px) {
  .menu{
    display: none;
  }
  }
   
    </style>