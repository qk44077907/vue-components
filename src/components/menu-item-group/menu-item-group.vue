<template>
  <li class="itcast-menu-item-group">
    <div class="itcast-menu-item-group__title" :style="paddingStyle">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'itcast-menu-item-group',

    componentName: 'itcast-menu-item-group',

    inject: ['rootMenu'],
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        paddingLeft: 20
      };
    },
    computed: {
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
    }
  };
</script>

<style>

</style>