<template>
    <article class="post">
        <header class="post__header">
            <div class="post__title">
            <h1>Post Title</h1>
            <nuxt-link to="/">
                <i class="el-icon-back"></i> 
            </nuxt-link>
            </div>

            <div class="post__info">
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>

            <small>
                <i class="el-icon-view"></i>
                42 
                </small>
            </div>

            <div class="post__image">
            <img 
                src="https://netmaddy.com/wp-content/uploads/2017/02/qbeats-blog-post-how-does-qbeats-integrate-with-wordpress-5.jpg"
                alt="Notebook image"
                class="post__image" 
            /> 
            </div>
        </header>
        <main class="post__content ">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
            </p>    
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
            </p>    
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore voluptas eius.
            </p>
        </main> 

        <footer>

            <app-comment-form /> 

            <div class="post__comments" v-if="false">
                <app-comment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
                />
            </div>
             
            <div class="text-center" v-else>No comments </div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
    // Nuxt расширяет возможности VueJS и добавляет параметр validate 
    // Nuxt adds to VueJS parameters one more -  "validate"
    // Метод принимает ctx и в ctx мы можем получить объект params - с параметрами адресной строки
    // Если в строке есть ID - показываем страницу, если нет - показываем 404
    validate ({params}) {
        return Boolean(params.id)   
    },
    components: {
        AppComment, 
        AppCommentForm 
    }
}
</script> 

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;

        &__header {
            margin-bottom: 1.5rem; 
        }

        &__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem; 
        }

        &__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: .5 rem; 
        }

        &__image img {
            width: 100%;
            height: auto ;
        }

        &__content {
            margin-bottom: 2rem;
        }
    }
</style>