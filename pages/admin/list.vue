<template>
  <el-table
    :data="posts"
    style="width: 100%"
  >
    <el-table-column
      prop="title"
      label="Title"
    >
      
    </el-table-column>

    <el-table-column label="Date">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="title" label="Views" >
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column> 

    <el-table-column prop="title" label="Comments" >
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-s-comment"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Actions">
      <template slot-scope="{row}">
        <el-button
          type="primary"
          circle 
          icon="el-icon-edit"
          @click="open(row._id)"
        />
        <el-button
          icon="el-icon-delete"
          type="danger"
          circle
          @click="remove(row._id)" 
        /> <!-- Can't use delete.. Reserved word.. -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },
  methods: {
    open(id) {
      console.log('open', id)
    },
    remove(id) {
      console.log('remove', id)
    }
  }
}
</script>
