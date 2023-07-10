import Controller from '@ember/controller';
import { action } from '@ember/object';
import Plotly from 'plotly.js-dist';

export default class PlotlyController extends Controller {
  @action
  renderChart() {
    const TESTER = document.getElementById('tester');
    Plotly.newPlot(
      TESTER,
      [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16],
        },
      ],
      {
        margin: { t: 0 },
      }
    );
  }
}
