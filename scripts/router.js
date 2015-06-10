import IndexView from './view/index';
import {ImageCollection} from './models/image';


var Router = Backbone.Router.extend ({
  routes: {
    "": "index",
  },

initialize: function() {
  this.listenTo()

},

index: function() {
  this.images = new ImageCollection();
  this.images.fetch();
  var view = new IndexView({collection: this.images});
  $('.app-content').html(view.el);
}


});

var router = new Router();

export default router;
