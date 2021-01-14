<template lang="pug">
.city-builder
  Tools(@activeTool="activeTool",@scale="scale")
  .area
    canvas(ref="bgCanvas",:style="`transform:scale(${size})`")
    canvas(ref="fgCanvas",@mousemove="mousemove",@mouseup="unclick",@mousedown="click",@touchend="click",@pointerup="click"
      ,:style="`transform:scale(${size})`")
</template>
<script lang="ts">
import {
  defineAsyncComponent, defineComponent, onMounted, Ref, ref,
} from 'vue';

export default defineComponent({
  components: {
    Tools: defineAsyncComponent(() => import('@/components/Tools.vue')),
  },
  props: {},
  setup() {
    const size = ref(1);
    const bgCanvas: Ref<HTMLCanvasElement | null> = ref(null);
    const fgCanvas: Ref<HTMLCanvasElement | null> = ref(null);
    let isPlacing: boolean;
    let tool = [0, 0];
    const activeTool = (obj: { i: number; j: number }) => {
      tool = [obj.i, obj.j];
      console.log(tool);
    };
    const map = [
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
    ];
    // 地图大小
    const ntiles = 14;
    const w = 910;
    const h = 462;
    const tileWidth = 128;
    const tileHeight = 64;
    const texture = new Image();
    texture.src = '/textures/01_130x66_130x230.png';
    let bg: CanvasRenderingContext2D | null | undefined;
    let fg: CanvasRenderingContext2D | null | undefined;
    const drawImageTile = (c: CanvasRenderingContext2D, x: number, y: number, i: number, j: number) => {
      c.save();
      // 画地图
      c.translate(((y - x) * tileWidth) / 2, ((x + y) * tileHeight) / 2);
      const jj = (j) * 130;
      const ii = (i) * 230;
      /**
       * 130 单个建筑的宽度
       * 230 单个建筑的高度
       */
      // 画初始建筑
      c.drawImage(texture, jj, ii, 130, 230, -65, -130, 130, 230);
      c.restore();
    };

    const drawMap = () => {
      if (bg) {
      // 清空画布
        bg.clearRect(-w, -h, w * 2, h * 2);
        // 循环地图 14*14的地图大小
        for (let i = 0; i < ntiles; i++) {
          for (let j = 0; j < ntiles; j++) {
            drawImageTile(bg, i, j, map[i][j][0], map[i][j][1]);
          }
        }
      }
    };
    const init = () => {
      bg = bgCanvas.value?.getContext('2d');
      fg = fgCanvas.value?.getContext('2d');
      if (bg && fg) {
      // 画棋盘矩形
        bg.translate(910, 0);
        fg.translate(910, 0);
        drawMap();
        console.log(bg);
      }
    };
    // 获取坐标
    const getPosition = (e: MouseEvent) => {
      const y = (e.offsetY) / tileHeight;
      const x = e.offsetX / tileWidth - ntiles / 2;
      return { x: Math.floor(y - x), y: Math.floor(x + y) };
    };

    onMounted(() => {
      if (bgCanvas.value && fgCanvas.value) {
        bgCanvas.value.width = window.innerWidth;
        bgCanvas.value.height = window.innerHeight;
        fgCanvas.value.width = window.innerWidth;
        fgCanvas.value.height = window.innerHeight;
        texture.onload = () => init();
      }
    });
    const drawTile = (c: CanvasRenderingContext2D, x: number, y: number, color: string) => {
      c.save();
      c.translate(((y - x) * tileWidth) / 2, ((x + y) * tileHeight) / 2);
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(tileWidth / 2, tileHeight / 2);
      c.lineTo(0, tileHeight);
      c.lineTo(-tileWidth / 2, tileHeight / 2);
      c.closePath();
      // eslint-disable-next-line no-param-reassign
      c.fillStyle = color;
      c.fill();
      c.restore();
    };
    // 放置建筑
    const click = (e: MouseEvent) => {
      const pos = getPosition(e);
      if (pos.x >= 0 && pos.x < ntiles && pos.y >= 0 && pos.y < ntiles) {
        map[pos.x][pos.y][0] = (e.which === 3) ? 0 : tool[0];
        map[pos.x][pos.y][1] = (e.which === 3) ? 0 : tool[1];
        isPlacing = true;

        drawMap();
        if (fg) {
          fg.clearRect(-w, -h, w * 2, h * 2);
        }
      }
    };
    const mousemove = (e: MouseEvent) => {
      const pos = getPosition(e);
      if (isPlacing) { click(e); }
      if (fg && fgCanvas.value) {
        // 清除画布
        fg.clearRect(-w, -h, fgCanvas.value.width * 2, fgCanvas.value.height * 2);
        // 画小方格 告诉用户鼠标位置
        if (pos.x >= 0 && pos.x < ntiles && pos.y >= 0 && pos.y < ntiles) { drawTile(fg, pos.x, pos.y, 'rgba(0,0,0,0.2)'); }
      }
    };
    const unclick = () => {
      if (isPlacing) { isPlacing = false; }
    };
    const scale = () => {
      size.value *= 1.5;
    };
    return {
      bgCanvas,
      fgCanvas,
      activeTool,
      mousemove,
      unclick,
      click,
      scale,
      size,
    };
  },
});
</script>
<style lang="stylus">
body
  margin 0
  padding 0
canvas
  display: block;
  position: absolute;
.city-builder
  display flex
  min-height 100vh
  .area
    overflow auto
    position: relative;
    flex: 1;
    display: flex;
    justify-content: space-around;
</style>
