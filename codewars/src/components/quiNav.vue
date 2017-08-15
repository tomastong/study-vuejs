<template>
    <div class="qui-nav nav-type-1">
        <a v-for="(item, index) in items" :class="[commonClass, item.active?activeClass:'']" v-on:click="navClickEvent(items, index)">
            <span class="nav-txt">{{item.text}}</span>
        </a>
    </div>
</template>

<script>
    export default{
        data : function(){  // data中定义当前组件的数据
            return {
                commonClass : 'nav-item',
                activeClass : 'active',
                items : [
                    {
                        text : '首页',
                        active : true
                    },
                    {   
                        text : '列表',
                        active : false
                    },
                    {
                        text : '关于',
                        active : false
                    },
                    {
                        text : '招聘',
                        active : false
                    }
                ]
            }
        },
        methods: {  // 公共调用方法
            navClickEvent : function(items, index){
                // 自定义切换动作
                items.forEach(function(el){
                    el.active = false;
                })
                items[index].active = true;
                // 开放用户自定义接口
                this.$emit('navClickEvent', items, index);
            }
        }
    }
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-nav.import.css';
</style>