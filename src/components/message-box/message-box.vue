<template>
  <div class="itcast-msgbox-wrapper">
    <transition name="fade">
      <div class="itcast-mask" v-show="visible" @click="close">

      </div>
    </transition>
    <transition name="slide">
      <div class="itcast-msgbox" v-show="visible">
        <div class="itcast-msgbox-header">{{title}}</div>
        <div class="itcast-msgbox-content">{{message}}</div>
        <div class="itcast-msgbox-btns">
          <button class="itcast-cancel-btn" @click="handleAction('cancel')">取消</button>
          <button class="itcast-confirm-btn" @click="handleAction('confirm')">{{confirmButtonText}}</button>
        </div>
        <button class="itcast-close-btn" @click="handleAction('cancel')">×</button>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    name: "message-box",
    data() {
      return {
        title: '',
        message: '',
        confirmButtonText:'',
        cancelButtonText:'',
        visible: false,
      };
    },
    methods: {
      handleAction(action) {
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(action, this, this.close);
        } else {
          this.close();
        }
      },
      close() {
        let action = this.action
        if (action === 'confirm') {
          this.resolve(action);
        } else {
          this.reject(action);
        }
        this.visible = false
      }
    }

  }
</script>

<style lang="less" scoped>
  /*.itcast-msgbox{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }*/
  .itcast-msgbox-header {
    padding: 15px 15px 10px;
  }

  .itcast-msgbox-content {
    padding: 10px 15px;
    color: #606266;
    font-size: 14px;
  }

  .itcast-msgbox-btns {
    text-align: right;
    padding: 5px 15px 0;
    font-size: 18px;
  }

  .itcast-cancel-btn, .itcast-confirm-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 9px 15px;
    cursor: pointer;
    font-size: 12px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #dcdfe6;
    outline: none;
    color: #606266;
  }

  .itcast-confirm-btn {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    margin-left: 10px;
  }

  .itcast-close-btn {
    color: #909399;
    position: absolute;
    background-color: transparent;
    top: 15px;
    right: 15px;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }

  .itcast-msgbox {
    width: 420px;
    padding-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    text-align: left;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .itcast-mask {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.5);
    opacity: 0.5;
    top: 0;
    left: 0;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.3s;
  }

  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .slide-enter, .slide-leave-to {
    margin-top: -10px;
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }
</style>