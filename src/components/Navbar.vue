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
            <my-button
                @click="$router.push('/composition')"
                style='margin-left: 20px;'
                >Composition API
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
    position: -webkit-sticky;
    position: sticky;    
    top: 0;
    height: 50px;
    background: rgba(0,0,0,4);
    padding: 0 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
}
.navbar__btns {
    margin-left: auto;
}
.logo {
    cursor: pointer;
    font-size: 24px;
}
</style>