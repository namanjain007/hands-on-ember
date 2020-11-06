import EmberRouter from '@ember/routing/router';
import config from 'hands-on-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('clothes', function() {
    this.route('tshirt');//nested route
  });
  this.route('item', {path :  "/item/:item_id"} );//dynamic route
  this.route('not-found', {path : '/*path'});
  this.route('cart');
});
