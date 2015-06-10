var Image = Backbone.Model.extend({
  idAttribute:'_id',
  defaults: function(){
    return{
      url: '',
      caption: '',
      created_at: new Date,
    };
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images'
});

export default {Image, ImageCollection};
