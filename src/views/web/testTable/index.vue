<template>
  <div class="re-table-box" v-if="Object.keys(config).length">
    <h4 class="table-title">{{config.title}}</h4>
    <table class="re-table"></table>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      config: {
        title: "测试表格",
        header: [
          {
            label: "新拓客户",
            children: []
          },
          {
            label: "新拓联系人"
          },
          {
            label: "跟进次数"
          },
          {
            label: "签订合同"
          },
          {
            label: "消耗（元）"
          },
          {
            label: "回款（元）",
            children: []
          }
        ],
        aside: [
          {
            label: "第33周",
            children: [
              {
                label: "目标",
                children: []
              },
              {
                label: "完成",
                children: []
              },
              {
                label: "完成率",
                children: []
              }
            ]
          },
          {
            label: "第34周",
            children: [
              {
                label: "目标",
                children: []
              },
              {
                label: "完成",
                children: []
              },
              {
                label: "完成率",
                children: []
              }
            ]
          },
          {
            label: "第35周",
            children: [
              {
                label: "目标",
                children: []
              },
              {
                label: "完成",
                children: []
              },
              {
                label: "完成率",
                children: []
              }
            ]
          }
        ]
      }
    };
  },
  // props: {
  //   title: {
  //     type: String,
  //     default: ""
  //   },
  //   config: {
  //     type: Object,
  //     default: () => {
  //       return {};
  //     }
  //   }
  // },
  created() {
    this.computeRows(this.config);
    this.computeCols(this.config);
  },
  methods: {
    computeRows(data) {
      // 计算行数
      // 列数据
      let cols_data = this.dealData(data.header);
      let rows_data = this.dealData(data.aside);
      this.traversalData(cols_data);
      this.traversalData(rows_data);
    },
    computeCols(data) {
      // 计算列数
    },
    dealData(sourceData){
      let max = 1;
      function each(data, level) {
        data.forEach(item => {
          item.level = level; // 给每一层数据添加level
          if (level > max) {
            max = level;
          }
          if (item.children && item.children.length > 0) {
            each(item.children, level + 1);
          }
        });
      }
      each(sourceData, 1);
      console.log(max);
      return sourceData;
    },
    traversalData(sourceData) {
      console.log(sourceData)
    }
  }
};
</script>
<style lang='scss' scoped>
.re-table-box {
  width: 100%;
  .table-title {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background: rgba(0, 139, 140, 0.05);
    color: #008b8c;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-bottom: none;
  }
  .re-table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      font-size: 12px;
      text-align: center;
      height: 40px;
      border: 1px solid #e5e5e5;
    }
    .bg-f6,
    th {
      background: #f6f6f6;
    }
    .td-wd-10 {
      width: 10%;
    }
  }
}
</style>
