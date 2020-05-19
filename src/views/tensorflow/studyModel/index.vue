<template>
  <div>
    <h3>学习TensorFlow.js模型</h3>
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
  created() {
    const result = this.studyModel(3);
    result.print();
    // this.studyModelUseApi()
  },
  methods: {
    studyModel (input){
      // y = a*x^2 + bx + c
      const a = tf.scalar(2);
      const b = tf.scalar(4);
      const c = tf.scalar(8);
      return tf.tidy(() => {
        const x = tf.scalar(input);
        const ax2 = a.mul(x.square());
        const bx = b.mul(x);
        const y = ax2.add(bx).add(c)
        return y;
      })
    },
    studyModelUseApi (){
      const model = tf.sequential();
      model.add(
        tf.layers.simpleRNN({
          units: 20,
          recurrentInitializer: 'GlorotNormal',
          inputShape: [80, 4]
        })
      );

      const optimizer = tf.train.sgd(LEARNING_RATE);
      model.compile({optimizer, loss: 'categoricalCrossentropy'});
      model.fit({x: data, y: labels});
      model.print()
    }
  }
};
</script>
<style lang='' scoped>
  
</style>
