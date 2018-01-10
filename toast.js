import Toast from './toast.vue';
var toastPlugin = {};

toastPlugin.install = function (Vue, options = {}) {

    const ToastController = Vue.extend(Toast);

    // 实现toast的关闭方法
    ToastController.prototype.close = function () {
        this.visible = false;
    };

    Vue.prototype.$toast = (option = {}) => {
         // toast实例挂载到刚创建的div
         toastPlugin.instance =toastPlugin.instance || new ToastController().$mount(document.createElement('div'));
         let instance = toastPlugin.instance;
         let duration = option.duration || options.duration || 2000;
         instance.message = typeof option === 'string' ? option : option.message;
         instance.visible = true ;  
         // 将toast的DOM挂载到body上
         document.body.appendChild(instance.$el);

         // 自动关闭
         setTimeout(function () {
            instance.close()
        }, duration);
    };
};

export default toastPlugin;