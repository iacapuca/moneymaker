import EmberRouter from '@ember/routing/router';
import config from 'moneymaker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('charts', function () {
    this.route('echart');
    this.route('chartjs');
    this.route('plotly');
    this.route('apex');
  });
});
