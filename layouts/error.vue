<template>
    <div class="error-layout">
        <div class="error">
            <h1 class="error__title">Error  404</h1>
            <nuxt-link to="/">Back to Home Page</nuxt-link>
        </div> 
    </div>
</template>

<style lang="scss" scoped>
    .error-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;  
    }

    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;

        &__title {
            color: rgb(145, 5, 5 );
            margin-bottom: 1rem;
        }
    }
</style>