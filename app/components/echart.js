import Component from '@glimmer/component';
import * as echarts from 'echarts';
import { action } from '@ember/object';

export default class EchartComponent extends Component {
  @action
  renderChart() {
    const myChart = echarts.init(document.getElementById('echart'));
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example',
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: {
            readOnly: false,
          },
          magicType: {
            type: ['line', 'bar', 'stack'],
          },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });
  }
}
