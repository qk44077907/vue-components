<template>
  <div id="app">
    <button @click="open">点击</button>
    <!--<itcast-menu>
      <itcast-submenu index="1">
        <span slot="title">导航一</span>
        <itcast-menu-item-group>
          <template slot="title">分组一</template>
          <itcast-menu-item index="1-1">选项1</itcast-menu-item>
          <itcast-menu-item index="1-2">选项2</itcast-menu-item>
        </itcast-menu-item-group>
        <itcast-menu-item-group title="分组2">
          <itcast-menu-item index="1-3">选项3</itcast-menu-item>
        </itcast-menu-item-group>
        <itcast-submenu index="1-4">
          <template slot="title">选项4</template>
          <itcast-menu-item index="1-4-1">选项1</itcast-menu-item>
        </itcast-submenu>
      </itcast-submenu>
      <itcast-menu-item index="2">
        <span slot="title">导航二</span>
      </itcast-menu-item>
      <itcast-menu-item index="3" disabled>
        <span slot="title">导航三</span>
      </itcast-menu-item>
      <itcast-menu-item index="4">
        <span slot="title">导航四</span>
      </itcast-menu-item>
    </itcast-menu>-->
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return {

    }
  },
  components: {

  },
  methods:{
    open(){
      this.$msgBox({
        title:'标题',
        message:'内容',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
            }, 3000);
          } else {
            done();
          }
        }
      })
    }
  },
  mounted(){


  }
}
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
</style>
