import ItcastCollapseTransition from './collapse-tranisiton/collapse-transition'
import ItcastMenu from './menu/menu'
import ItcastSubMenu from './sub-menu/sub-menu'
import ItcastMenuItem from './menu-item/menu-item'
import ItcastMenuItemGroup from './menu-item-group/menu-item-group'
import initMsgBox from './message-box/index'


const components = [
  ItcastCollapseTransition,
  ItcastMenu,
  ItcastSubMenu,
  ItcastMenuItem,
  ItcastMenuItemGroup,
]
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  })
  initMsgBox(Vue)
}
export default {
  install,
  ItcastCollapseTransition,
  ItcastMenu,
  ItcastSubMenu,
  ItcastMenuItem,
  ItcastMenuItemGroup
}