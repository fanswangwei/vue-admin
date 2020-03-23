<template>
  <div class="re-table-box">
    <h4 class="table-title" v-if="title">{{title}}</h4>
    <table class="re-table" v-if="Object.keys(tableConfig).length">
      <tr v-if="tableConfig.header && tableConfig.header.length">
        <th :colspan="tableConfig.colspan || 1"></th>
        <th v-for="(item, index) in tableConfig.header" :key="index">{{item}}</th>
      </tr>
      <template v-if="tableConfig.colspan > 1">
        <template v-if="tableConfig.aside.length === 1">
          <tr v-for="i in (tableConfig.rowspan || 1)" :key="i">
            <td
              v-if="i === 1"
              :rowspan="tableConfig.aside[0][1].length"
              class="bg-f6 td-wd-10"
            >{{tableConfig.aside[0][0][0]}}</td>
            <td class="bg-f6 td-wd-10">{{tableConfig.aside[0][1][i-1]}}</td>
            <td v-for="index in (tableConfig.header.length || 0)" :key="index"></td>
          </tr>
        </template>
        <template v-else>
          <template v-for="itemIndex in (tableConfig.aside.length || 0)">
            <tr
              v-for="i in (tableConfig.aside[itemIndex-1][1].length || 0)"
              :key="(itemIndex * itemIndex + i - 1)"
            >
              <td
                v-if="i === 1"
                :rowspan="tableConfig.aside[itemIndex-1][1].length"
                class="bg-f6 td-wd-10"
              >{{tableConfig.aside[itemIndex-1][0][0]}}</td>
              <td class="bg-f6 td-wd-10">{{tableConfig.aside[itemIndex-1][1][i-1]}}</td>
              <td v-for="index in (tableConfig.header.length || 0)" :key="index"></td>
            </tr>
          </template>
        </template>
      </template>
      <template v-else>
        <tr v-for="i in (tableConfig.rowspan || 1)" :key="i">
          <td class="bg-f6 td-wd-10">{{tableConfig.aside[0][0][i-1]}}</td>
          <td></td>
          <td
            v-for="index in ((tableConfig.header.length - tableConfig.colspan) || 0)"
            :key="index"
          ></td>
        </tr>
      </template>
    </table>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      aside: [
        [["第33周"], ["目标", "完成", "完成率"]],
        [["第35周"], ["目标", "完成", "完成率"]],
        [["第34周"], ["目标", "完成", "完成率"]],
        [["第35周"], ["目标", "完成", "完成率", "下期目标"]]
      ],
      asideData: [
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
        }, {
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
        }, {
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
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    tableConfig: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created() {},
  methods: {
    computeRows(data) {}
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
