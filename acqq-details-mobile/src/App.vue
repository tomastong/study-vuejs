<template>
  <div>
  <!--这里是向子组件传递父组件的head数据，子组件显示props声明属性-->
      <v-header :head="head">

      </v-header>
      <section class="mod-tab">
        <div class="tab-list">
            <a class="tab-list-item" :class="active" v-link="{path:'/dev'}">详情</a>
            <a class="tab-list-item" v-link="{path:'/menu'}">目录</a>
            <a class="tab-list-item" v-link="{path:'/tall'}">评论</a>
        </div>
     </section>
     <!--这里是向子组件传递父组件的head数据，子组件显示props声明属性-->
     <router-view :head="head"></router-view>
  </div>
</template>

<script>
    // 这里的app.vue是入口的打开的html页面，就是app.vue挂载在index.html下
    import header from './components/header/header.vue';

    export default{
        data(){
            return{
                head:{}
            };
        },
        created(){
            this.$http.get('/api/head').then((response)=>{
                response = response.body;
                //自己之前定义的errno值(下面自己定义的数据在data里)
                if(response.errno==0){
                  this.head = response.data;
                }
            });
        },
        components:{
            'v-header':header    // 自己定义的组件，需要引入相应的vue进行执行
        }
    }
</script>

<style lang="less">
//标签切换开始
.mod-tab{
    height: 2.25rem;
    background: #ffffff;
    border-bottom: 1px solid #F5F5EE;
    width: 100%;
    .tab-list{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        .tab-list-item{
            display: block;
            width: 5.75rem;
            text-align: center;
            height: 2.25rem;
            line-height: 2.25rem;
            font-size: 0.75rem;
            position: relative;
            color: #969696;
        }
        .active{
            color: #535252;
            &::after{
                content: '';
                width: 0.5rem;
                height: 0.15rem;
                left: 2.625rem;
                bottom: 0;
                position: absolute;
                background-color: #ff9a6a;
                border-radius: 0.15rem;
                display: block;
            }
        }
    }
}
//标签切换结束
</style>
