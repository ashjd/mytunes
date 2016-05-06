var Router = Backbone.Router.extend ({
  routes: {
    ':actions': 'defaultRoute'
  }
});

var appRouter = new Router;

appRouter.on('route:defaultRoute', function(actions) {
  window.actions = actions;
});

Backbone.history.start();