<template>
  <div>
    <h3>tf.variable 变量量练习(打开F12 查看)</h3>
    <p>Variables变量是通过张量进行初始化得到的。不像Tensor的值不可变，变量的值是可变的。</p>
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
    this.studyVariable();
  },
  methods: {
    studyVariable (){
      // 张量练习
      const initValue = tf.zeros([5]);
      const a = tf.variable(initValue);
      a.print();
      const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
      a.assign(updatedValues); // 更新 biases的值
      a.print(); // 输出: [0, 1, 0, 1, 0]
    },
  }
};
</script>
<style lang='scss' scoped>
  
</style>