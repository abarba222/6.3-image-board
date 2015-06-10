export default Backbone.View.extend({
  template: JST.index,

  events: {
    'submit .insert-text': 'image'
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  },

  createImage: function(e) {
    e.preventDefault();
    var url = this.$('.url-text');
    this.collection.create({
        url: url,
        caption: caption
    });
  }
});
