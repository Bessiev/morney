<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
        <Icon name="money"/>
        记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
        <Icon name="label"/>
        标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
        <Icon name="statistics"/>
        统计
        </router-link>
  </nav>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg';
console.log(x)
    export default {
        name:'Nav'
    }
</script>

<style lang="scss" scoped>
    
    .nav{
        border:1px solid red;

    }
</style>