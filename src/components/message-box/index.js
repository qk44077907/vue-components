import MessageBox from './message-box'

let instance
let defaults ={
  title:'',
  message:'',
  confirmButtonText:'确定',
  cancelButtonText:'取消',
  beforeClose:null
}
function initMsgBox(Vue) {
  const MessageBoxConstructor = Vue.extend(MessageBox);
  const msgBox = function (options, callback) {
    if(instance && instance.visible === true){
      return
    }
    if (!instance) {
      instance = new MessageBoxConstructor({
        el: document.createElement('div')
      });
      document.body.appendChild(instance.$el);
    }


    return new Promise((resolve, reject) => { // eslint-disable-line
      Object.assign(instance,defaults,options)
      instance.visible = true
      instance.resolve = resolve
      instance.reject = reject
    });
  };
  Vue.prototype.$msgBox = msgBox
}
export default initMsgBox

