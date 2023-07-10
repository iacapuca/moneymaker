import Controller from '@ember/controller';
import { action } from '@ember/object';
import ApexCharts from 'apexcharts';

export default class AplexController extends Controller {
  @action
  renderChart() {
    const options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  }
}
