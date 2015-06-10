export default Backbone.View.extend({
  template: JST.index,

  events: {
    'submit .insert-text': 'image'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },

  image: function(e) {
    e.preventDefault();

  }
});
