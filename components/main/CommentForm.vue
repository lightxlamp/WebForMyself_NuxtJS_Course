<template>
    <el-form 
        ref="commentForm" 
        :model="controls" 
        :rules="rules"
        @submit.native.prevent="onSubmit"
    >

        <h1>Leave a comment</h1>

        <el-form-item label="Your name" prop="name">
            <el-input v-model.trim="controls.name" />
        </el-form-item>  
        
        <el-form-item label="Your comment" prop="text">
            <el-input 
                type="textarea"
                resize="none"
                :rows="2"
                v-model.trim="controls.text" 
            />
        </el-form-item>

        <el-form-item>
            <!-- native-type - чтобы вызвать событие submit у формы -->
            <el-button 
                type="primary" 
                round
                native-type="submit" 
                :loading="loading"
            >
                Leave a comment
            </el-button>
        </el-form-item>   
    </el-form>
</template>

<script>
export default {
    data () {
        return {
            loading: false,
             
            controls: {
                name: '',
                text: ''
            }, 

            rules: {
                name: [
                    { required: true, message: 'Please input your name', trigger: 'blur' },
                    { min: 1, max: 40, message: 'Length should be 1 to 40', trigger: 'blur' }
                ], 
                text: [
                    { required: true, message: 'Please enter a commentary', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.commentForm.validate(valid => {
                if (valid) { 
                    this.loading = true;
                    const formData = {
                        name: this.controls.name,
                        text: this.controls.text,
                        postId: '' // to which post we should add this comment
                    }

                    try {
                        setTimeout(() => {
                            this.$emit('created') // с помощью этого метода можем связывать родителя и дочерний компонент
                            this.$message.success('Comment added') // $message provided by Elements UI and extended bu Vue
                        }, 2000)
                    }

                    catch (e) {
                        this.loading = false;
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>