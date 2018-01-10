<template>
    <transition name="scale">
        <div id="toast" class="toast" v-show="visible" @click.prevent @touchmove.prevent>
            <span>
                {{message}}
            </span>
        </div>
    </transition>
</template>
<style>
.toast{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.toast span{
    position: absolute;
    width: 50%;
    padding:20px 10px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    top:40%;
    left: 25%;
    text-align: center;
    color:#fff;
}
.scale-enter-active, .scale-leave-active {
  transform: scale(1);
  transition: all 0.3s;
}
.scale-enter, .scale-leave-to {
  transform: scale(0);
  transition: all 0.3s;
}
</style>

<script type="text/ecmascript-6">
export default {
    data() {
        return{
            visible:false,
            message:'提示',
        }
    },
    mounted() {
        // this.visible = true;
    }
};
</script>
