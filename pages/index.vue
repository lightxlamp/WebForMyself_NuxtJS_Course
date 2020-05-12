<template>
  <el-row type="flex" justify="center ">
    <!-- Takes 24 columns in mobile view -->
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post 
        v-for="post in 3"
        :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  head: {
    head: 'Main Page'
  },
  components: {
    AppPost
  }
}
</script> 