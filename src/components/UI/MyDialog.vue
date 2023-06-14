<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import toggleMixin from "../../mixins/toggleMixin"

export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
    mounted() {
        console.log('dialog mounted');
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}

.dialog__content{
    margin: auto;
    background: #fff;
    background: rgba(0,0,0,1);
    min-height: 80px;
    min-width: 450px;
    padding: 20px;
    font-size: 24px;
    border: 1px solid rgb(186, 215, 18);
    border-radius: 12px;
}
</style>