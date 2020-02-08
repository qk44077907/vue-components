<template>
  <li class="itcast-submenu">
    <div class="itcast-submenu__title" @click="handleClick" :style="paddingStyle">
      <slot name="title"></slot>
    </div>
    <itcast-collapse-transition>
      <ul
          class="itcast-menu"
          v-show="opened"
      >
        <slot></slot>
      </ul>
    </itcast-collapse-transition>

  </li>
</template>

<script>
  export default {
    name: "itcast-submenu",
    componentName: "itcast-submenu",
    props: {
      index: {
        type: String,
        required: true
      },
    },
    inject: ['rootMenu'],
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
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
    methods: {
      handleClick() {
        this.rootMenu.$emit('submenu-click', this);
      }
    }
  }
</script>

<style scoped>

</style>