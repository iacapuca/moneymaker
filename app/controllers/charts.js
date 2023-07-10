import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ChartsController extends Controller {
  DATA_COUNT = 12;
  labels = [];

  datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: this.datapoints,
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
      {
        label: 'Cubic interpolation',
        data: this.datapoints,
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Linear interpolation (default)',
        data: this.datapoints,
        fill: false,
      },
    ],
  };
}
