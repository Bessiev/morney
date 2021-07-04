<template>
    <div class="nav-wrapper">
        <div class="content">Money.vue</div>
        
        <Nav/>
    </div>
</template>

<script lang="ts">

export default {
    name:'Money',
}
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border:1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;//固定高度
    }
    .content{
        border:1px solid blue;
        flex-grow: 1;//尽量把所有高度给content
        overflow:auto;//内容多的时候可滚动
    }
</style>