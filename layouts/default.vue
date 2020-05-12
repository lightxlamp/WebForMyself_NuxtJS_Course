<template>
  <el-container>
    <el-header>
      <AppNavigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation.vue' // strange name? According to style guide..
export default {
   components: {
    AppNavigation 
   }
}
</script>
 