<template>
    <div class="navbar">
        <div
            class='logo'
            @click="$router.push('/')"
            >APP
        </div>
        <div class="navbar__btns">
            <my-button
                @click="$router.push('/posts')"
                >Posts
            </my-button>
            <my-button
                @click="$router.push('/about')"
                style='margin-left: 20px;'
                >About app
            </my-button>
            <my-button
                @click="$router.push('/store')"
                style='margin-left: 20px;'
                >Store
            </my-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    height: 50px;
    background: lightgray;
    padding: 0 15px;
    box-shadow: 2px 2px 4px gray;
}
.navbar__btns {
    margin-left: auto;
}

.logo {
    cursor: pointer;
}
</style>