<template>
    <el-card class="comment">
        <!-- TODO Ask/Think is it ok to use <header> here. Instead <div> like it was in a lesson -->
        <!-- Update: 
        The <header> element represents a container for introductory content or a set of navigational links.
        You can have several <header> elements in one document. -->

        <header class="comment__header">
            <span class="comment__author">Person name</span>
            <span>     
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </span>
        </header>

        <!-- Ask about main / div -  <main class="comment__text"></main> -->
        <!-- Update: The <main> tag specifies the main content of a document.
        The content inside the <main> element should be unique to the document. -->
        <div class="comment__text">
            Wow! Very interesting post!
        </div>
    </el-card>
</template>

<script>
export default {
    props: ['comment']
}
</script>

<style lang="scss" scoped>
    .comment {
        margin-bottom: 1rem;

        &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.8rem;
        }

        &__text {
            // Sequences of whitespace will collapse into a single whitespace. 
            // Text will wrap when necessary, and on line breaks
            // В тексте пробелы не учитываются, текст автоматически переносится на следующую строку,
            // если он не помещается в заданную область.
            white-space: pre-line;
        }
    }
</style>