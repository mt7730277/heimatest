<template>
  <el-container>
  <el-header>
    <img src="../assets/images/logo.png" alt="">
    <h3 class="title">电商后台管理系统</h3>
    <el-button type="info" @click="logout">退出</el-button>
  </el-header>

  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import mix from './Home-mixins.js'
 export default {
   mixins:[mix]
 }
</script>

<style lang="less" scoped>
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
    height: 60px;
    background-color: #373d41;
    padding: 0;
    user-select: none;
    img {
      float: left;
    }
    .title {
      float: left;
      color:white;
      font-weight: 200;
      margin-left: 15px;
    }
    .el-button {
      float: right;
      margin: 10px 20px 0 0;
    }
  }
  .el-aside {
    background-color: #333744;
    user-select: none;
    font-size: 12px;
}
</style>
