<template>
  <div>
    <h3>tf.tensor 变量量练习(打开F12 查看)</h3>
    <p>在TensorFlow.js中，张量是不变的; 一旦创建你就不能改变它们的值。 但是，您可以对它们执行操作来生成新的张量。</p>
  </div>
</template>
<script>
import * as tf from '@tensorflow/tfjs';

export default {
  name: '',
  data() {
    return {
      
    };
  },
  created() {
    this.studyTensor();
    this.studyTensorApi();
  },
  methods: {
    studyTensor (){
      // 张量练习
      const shape = [2, 3];
      const a = tf.tensor([1,2,3,10,20,30], shape);
      a.print()
      const b = tf.tensor([[1,2,3],[10,20,30]])
      b.print()
    },
    studyTensorApi (){
      const a = tf.scalar(3.14);
      a.print(); // 输出零维张量

      const b = tf.tensor2d([[2, 3, 4], [5, 6, 7]]);
      b.print(); // 输出二维张量

      const c = tf.zeros([2, 3]);
      c.print(); // 输出2行3列的值全是0的张量

      const d = tf.ones([3, 5]);
      d.print(); // 输出3行5列的值全是1的张量
    }
  }
};
</script>
<style lang='scss' scoped>
  
</style>