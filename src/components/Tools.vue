<template lang="pug">
.tools
    button(@click="scale") 放大两倍
    div(v-for="(item,index) in builds",:class="{'selected':(activeBuild === index)}"
        ,:style="item.style",@click="changeAcBuild(index)").tool
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  components: {},
  props: {},
  setup(prop, context) {
    const cartText = ref('收起');
    const texWidth = 12;
    const texHeight = 6;
    const builds: Ref<{
        style: string;
    }[]> = ref([]);
    const activeBuild = ref(-1);
    for (let i = 0; i < texHeight; i++) {
      for (let j = 0; j < texWidth; j++) {
        builds.value.push({
          style: `background-position : -${j * 130 + 2}px -${i * 230}px`,
        });
      }
    }
    const changeAcBuild = (idx: number) => {
      const index = idx;
      context.emit('activeTool', {
        i: Math.floor(index / (texWidth)),
        j: index % texWidth,
      });
      activeBuild.value = idx;
    };
    const scale = () => {
      context.emit('scale');
    };
    return {
      builds,
      activeBuild,
      changeAcBuild,
      scale,
      cartText,
    };
  },
});
</script>
<style lang="stylus" scoped>
.tools
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
    width: 380px;
    height: 100%;
    transition: width .8s;
    z-index: 2;
    background: #fff;
    position fixed
    left 0
    .tool
        display: block;
        background-image: url('/textures/01_130x66_130x230.png');
        background-repeat: no-repeat;
        background-size: auto;
        width: 130px;
        height: 230px;
        border: 2px dashed transparent;
        box-sizing: border-box;
    .selected
        border-color: #b05355;
</style>
