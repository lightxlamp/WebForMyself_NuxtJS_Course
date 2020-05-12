<template>
    <el-card
        shadow="hover"
        :body-style="{ padding: 0}"
        class="post"
    >
        <header slot="header" class="post__header">
            <h3>Post title</h3>
            <small>
                <i class="el-icon-time "></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>

        <div class="post__body">
            <img 
                src="https://netmaddy.com/wp-content/uploads/2017/02/qbeats-blog-post-how-does-qbeats-integrate-with-wordpress-5.jpg"
                alt="Notebook image"
                class="post__image"
            /> 
        </div>

        <footer class="post__footer">
            <!-- Если указываем атрибут и не указываем свойство, то это значит, что мы передаем его значение как true -->
            <!-- На днях только это узнал/осознал, поэтому для закрепления запишу еще раз сюда -->
            <el-button round @click="openPost">Open</el-button>

            <span>
                <i class="el-icon-message"></i>
                5
            </span>
        </footer>
    </el-card>
</template>

<script> 
export default {
    methods: {
        openPost() {
            const id = '78212'
            this.$router.push(`/post/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem; 

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__image {
            width: 100%;
            height: auto ;
        } 

        &__footer {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>