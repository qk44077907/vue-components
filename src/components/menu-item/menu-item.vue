<template>
  <li class="itcast-menu-item"
      :style="paddingStyle"
      @click="handleClick"
      :class="{
      'is-active': active,
      'is-disabled':disabled
    }"
  >
    <slot></slot>
    <slot name="title"></slot>
  </li>
</template>

<script>
  export default {
    name: "itcast-menu-item",
    componentName: "itcast-menu-item",
    inject: ['rootMenu'],
    props: {
      index: {
        default: null,
        validator: val => typeof val === 'string' || val === null
      },
      route: [String, Object],
      disabled: Boolean
    },
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
      },
      paddingStyle() {
        let padding = 20;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'itcast-menu') {
          if (parent.$options.componentName === 'itcast-submenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }

        return {paddingLeft: padding + 'px'};
      }
    },
    methods:{
      handleClick() {
        if (!this.disabled) {
          this.rootMenu.$emit('item-click', this);
          this.$emit('click', this);
        }
      }
    }
  }
</script>

<style scoped>

</style>