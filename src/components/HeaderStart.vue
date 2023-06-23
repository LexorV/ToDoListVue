<template>
   <el-container >
      <el-header class="header">
      <h1 class="heading">Ваши задачи</h1>
      </el-header>
    </el-container>
  </template>
  
  <script>
  export default {
    name: 'headerStart',
    components: {
    },
    methods: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .header {
    background-color: #545c64;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 40px;
  }
  .heading {
    color: white;
    margin: 0;
    width: 100%;
  }
  .create-btn {
    display: flex;
    gap: 8px;  
  }
  @media screen and (max-width: 450px) {
  .heading{
    font-size: 16px;
  }
  }
 
  </style>
  