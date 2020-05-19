<template>
  <div>
    <h3>学习tensorflow</h3>
    <div class="canvas-box">
      <!-- 绘制图像 -->
      <canvas id="canvas" height="600" width="800"></canvas>
    </div>
  </div>
</template>
<script>
import * as tf from '@tensorflow/tfjs'
export default {
  name: '',
  data() {
    return {

    };
  },
  mounted() {
    let canvas = document.getElementById('canvas');
    let XYData = this.generateXYData()
    tf.scalar(3).print()
    this.drawXYData(canvas, XYData)
  },
  methods: {
    // 绘制坐标轴
    drawAxes (){
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      const leftCoord = this.world2canvas(canvas, -canvas.width / 2, 0);
      const rightCoord = this.world2canvas(canvas, canvas.width / 2, 0);
      ctx.moveTo(leftCoord[0], leftCoord[1]);
      ctx.lineTo(rightCoord[0], rightCoord[1]);
      ctx.stroke();
      const topCoord = this.world2canvas(canvas, 0, canvas.height / 2);
      const bottomCoord = this.world2canvas(canvas, 0, -canvas.height / 2);
      ctx.moveTo(topCoord[0], topCoord[1]);
      ctx.lineTo(bottomCoord[0], bottomCoord[1]);
      ctx.stroke();
    },
    world2canvas (canvas, x, y){
      return [x + canvas.width / 2, -y + canvas.height / 2];
    },
    drawXYData (canvas, XYData){
      this.drawAxes(canvas)
      const ctx = canvas.getContext('2d');
      for (let i = 0; i < XYData.length; ++i) {
        ctx.beginPath();
        const x = XYData[i][0];
        const y = XYData[i][1];
        const canvasCoord = this.world2canvas(canvas, x, y);
        ctx.arc(canvasCoord[0], canvasCoord[1], 4, 0, Math.PI * 2, true);
        ctx.stroke();
      }
    },
    generateXYData (){
      // 生成X Y 的坐标数据
      const data = [];
      
      const coeffs = [0.000006, -0.002, 0.1, 10]
      for (let x = -canvas.width / 2; x < canvas.width / 2;
          x += canvas.width / 25) {
        data.push([
          x, coeffs[0] * x * x * x + coeffs[1] * x * x + coeffs[2] * x + coeffs[3]
        ]);
      }
      return data;
    },
    createModel (){
      // y = a * x ^ 3 + b * x ^ 2 + c * x + d
      return tf.tidy(() => {
        return a.mul(x.pow(tf.scalar(3))) // a * x^3
          .add(b.mul(x.square())) // + b * x ^ 2
          .add(c.mul(x)) // + c * x
          .add(d); // + d
      });
    }
  }
};
</script>
<style lang='scss' scoped>
  .canvas-box {
    margin-top: 20px;
  }
</style>
