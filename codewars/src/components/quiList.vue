<template>
    <div class="qui-list">
        <span class="list-tips">{{tipsText}}</span>
        <!--<qui-btn v-on:btnClickEvent="btnClickEvent" :msg=msg class="small"></qui-btn>-->
        <!-- 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。相当于『孩子，当你调用了increment函数的时候，我将调用incrementTotal函数来回应你』 -->
        <component :is="currentView" v-on:btnClickEvent="clickEvent" :msg=msg class="small" keep-alive></component>
    </div>
</template>

<script>
    // 组件内引用组件，实际上就是组件的嵌套
    import quiButton from '../components/quiButton'
    import quiArrow from '../components/quiArrow'
    export default{
        props : {
            msg : {
                default : '下载'
            },
            tipsText : {
                default : '默认的文案'
            },
            currentView : {
                default : 'qui-btn'
            },
            btnClickEvent1 : {    // 方便为每个组件分配自己的触发事件
                type : Function,
                default : function(){
                    alert(this.msg + '我是默认事件')
                }
            }
        },
        components : {
            'qui-btn' : quiButton,
            'qui-arrow' : quiArrow
        },
        methods : {
            clickEvent : function(){
                // 这里是调用公开属性的方法
                this.btnClickEvent1();
                // this.$emit(btnClickEvent) 即类似于子组件跟父组件说了一声“hi，爸爸 我调用了我自己的btnClickEvent函数”，通知父组件

                // 因为quiList是父组件，这里开放函数响应接口，quiList的父组件是pageQuiList组件，再次调用pageQuiList中定义的test方法
                this.$emit('btnClickEvent');    
            }
        }
    }
</script>

<style scoped>
    .qui-list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .qui-list .qui-btn{
    float: right;
    margin-right: 10px;

  }
  .qui-list .list-tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }
</style>