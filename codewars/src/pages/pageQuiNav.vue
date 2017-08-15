<template>
    <!--这里引用自定义标签就行了，点击父组件（整个列表）不需要调用子方法-->
    <qui-nav></qui-nav>
</template>

<script>
    import quiNav from '../components/quiNav'
    export default{
        name : 'pageQuiNav',
        components : {
            'qui-nav' : quiNav
        },
        methods : {
        }
    }
</script>