<template>
  <ul class="itcast-menu">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: "itcast-menu",
    componentName: "itcast-menu",
    provide() {
      return {
        rootMenu: this
      };
    },
    data(){
      return {
        openedMenus:[],
        activeIndex:null
      }
    },

    methods:{
      handleSubmenuClick(submenu) {
        console.log(submenu);
        const { index } = submenu;
        let isOpened = this.openedMenus.indexOf(index) !== -1;

        if (isOpened) {
          this.closeMenu(index);
          this.$emit('close', index);
        } else {
          this.openMenu(index);
          this.$emit('open', index);
        }
      },
      handleItemClick(item){
        const { index } = item;
        const hasIndex = index !== null;

        if (hasIndex) {
          this.activeIndex = index;
        }

        this.$emit('select', item);
      },
      openMenu(index, indexPath) {
        let openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1) return;
        // 将不在该菜单路径下的其余菜单收起
        // collapse all menu that are not under current menu item
        if (this.uniqueOpened) {
          this.openedMenus = openedMenus.filter(index => {
            return indexPath.indexOf(index) !== -1;
          });
        }
        this.openedMenus.push(index);
      },
      closeMenu(index) {
        const i = this.openedMenus.indexOf(index);
        if (i !== -1) {
          this.openedMenus.splice(i, 1);
        }
      },
    },
    mounted(){
      this.$on('submenu-click', this.handleSubmenuClick);
      this.$on('item-click', this.handleItemClick);
    },

  }
</script>

<style scoped>

</style>