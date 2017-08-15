<template>
    <div class="list">
        <qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
        <!--这里在pageQuiList中定义了响应函数，所以点击第二个弹出三个框-->
        <qui-list v-on:btnClickEvent="test"></qui-list> 
        <qui-list ref="child1" tipsText="最右边是箭头" currentView="qui-arrow"></qui-list>
    </div>
</template>

<script>
    import quiList from '../components/quiList'
    import quiArrow from '../components/quiArrow'
    
    export default{
        name : 'pageQuiList',
        components : {
            'qui-list' : quiList
        },
        methods : {
            test: function(){
                alert('我是自定义方法');
            }
        }
    }
</script>