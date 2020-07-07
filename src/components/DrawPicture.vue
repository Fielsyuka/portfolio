<template>
  <div class="draw-picture" ref="container">
    <canvas id="canvas" v-bind:width="width" v-bind:height="height"></canvas>
  </div>
</template>
<script>
export default {
  name: 'DrawPicture.vue',
  props: {
    fileName: String
  },
  data() {
    return {
      img: '',
      num: 80,
      width: 200,
      height: 200,
      x: new Array(this.num),
      y: new Array(this.num),
      ctx: '',
      timer: 0
    }
  },
  mounted() {
    this.init();
    this.handleCanvas();
    this.createImg();
    this.handleLinePosition()
    this.render();
  },
  methods: {
    init() {
      window.requestAnimationFrame =
        window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
    },
    handleCanvas() {
      const canvas = document.getElementById('canvas');

      this.ctx = canvas.getContext('2d');
      if (typeof this.ctx === 'undefined') return;

      const scale = window.devicePixelRatio;
      this.ctx.width = this.width * scale;
      this.ctx.height = this.height * scale;
      this.ctx.scale(scale, scale);
    },
    // handleResize() {
    //   this.width = this.$refs.container.clientWidth;
    //   this.height = this.width * 1.29;
    // },
    handleLinePosition() {
      const _this = this;
      for (var i = 0; i < this.num; i++) {
        _this.x[i] = Math.floor(_this.height * Math.random());
        _this.y[i] = Math.floor(_this.width * Math.random());
      }
    },
    createImg() {
      this.img = new Image();
      this.img.src = require(`@/assets/images/${this.fileName}`);
      this.width = this.img.naturalWidth;
      this.height = this.img.naturalHeight;
    },
    render() {
      const _this = this;
      this.img.onload = () => {
        setTimeout( () => {
           requestAnimationFrame(_this.draw);
        }, 1000);
       
      }
    },
    draw() {
      const _this = this;

      for (var i = 0; i < this.num; i++) {
        _this.ctx.restore();
        _this.ctx.save();
        _this.ctx.beginPath();
        _this.ctx.rect(_this.x[i], _this.y[i], _this.width/4, 1);
        _this.ctx.clip();
        _this.ctx.drawImage(_this.img, 0, 0, _this.width, _this.height);

        var radian = 2.0 * Math.PI * Math.random();

        _this.x[i] = _this.x[i] + 50 * Math.cos(radian);
        _this.y[i] = _this.y[i] + 50 * Math.sin(radian);

        if (_this.width <= _this.x[i]) {
          _this.x[i] = _this.x[i] - _this.width;
        }
        if (_this.height <= _this.y[i]) {
          _this.y[i] = _this.y[i] - _this.height;
        }
        if (_this.x[i] <= 0) {
          _this.x[i] = 0;
        }
        if (_this.y[i] <= 0) {
          _this.y[i] = _this.height;
        }
      }

      _this.timer += 1;

      if (_this.timer < 100) {
        requestAnimationFrame(this.draw);
      }
    }
  }
}
</script>
<style lang="css" scoped>

</style>