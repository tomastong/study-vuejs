<template>
    <div id="pageQuiButton">
        <!--监听子组件的事件-->
        <qui-btn msg="确定" class="small" v-on:btnClickEvent="doSth1">
            <!-- 插槽代码，添加dom结构，可以有也可以没有 -->
            <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png">
        </qui-btn>
        <qui-btn msg="取消" class="small" v-on:btnClickEvent="doSth2"></qui-btn>
    </div>
</template>

<script>
    import quiBtn from '../components/quiButton' // 引用组件，不带vue后缀
    // 页面中引用子组件并监听子组件的事件
    export default{
        name : 'pageQuiButton',
        components : {
            'qui-btn': quiBtn   // 注册自定义标签，应用为该组件
        },
        methods : {
            doSth1 : function(){
                alert('111');
            },
            doSth2 : function(){   // 返回重新触发父组件自定义函数
                alert('111');
            }
        }
    }

</script>

<style scoped>
  .mod-module.mod-btn .bar-flex{
    display: -webkit-flex; /* Safari */
    display: flex;
  }
  .mod-module.mod-btn .btn-bar{
    padding:5px 12px;
    font-size: 0;
    text-align: center;
  }
  .mod-module.mod-btn .text-r{
    text-align: right;
  }
</style>