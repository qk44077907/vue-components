<template>
  <transition name="collapse"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
              >
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "itcast-collapse-transition",
    componentName:'itcast-collapse-transition',
    methods:{
      beforeEnter(el){
        if (!el.dataset) el.dataset = {};
        el.style.height = '0'
      },
      enter(el){
        if(el.scrollHeight !== 0){
          el.dataset.oldOverflow = el.style.overflow;
          el.style.height = el.scrollHeight + 'px';
          el.style.overflow = 'hidden';
        }
      },
      afterEnter(el){
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el){
        if (!el.dataset) el.dataset = {};
        el.style.height = el.scrollHeight + 'px';
      },
      leave(el){
        //改变高度会引起重绘，浏览器内部的优化会将两个改变高度的操作合并成一个，而导致无法触发动画，因此需要在两次改变高度的操作中间强制触发重绘。此处使用全等判断scrollHeight触发。
        //注意强制触发重绘，并且不要写done参数
        if(el.scrollHeight !== 0){
          el.dataset.oldOverflow = el.style.overflow;
          el.style.height = '0';
          el.style.overflow = 'hidden';
        }
      },
      afterLeave(el) {
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
      }
    }
  }
</script>

<style>
  .collapse-enter-active{
    transition: height 0.3s;
  }
  .collapse-leave-active{
    transition: height 0.3s;
  }
</style>