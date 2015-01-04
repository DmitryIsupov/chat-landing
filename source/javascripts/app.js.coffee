#= require handlebars.runtime
#= require ember
#= require ember-data
#= require_self
#= require ./ember/router
#= require_tree ./ember/templates
#= require_tree ./ember/components
#= require_tree ./ember/controllers
#= require_tree ./ember/models
#= require_tree ./ember/routes
#= require_tree ./ember/adapters
#= require lodash
#= require d3
#= require d3.layout.cloud/d3.layout.cloud
#= require nvd3/nv.d3.min


 
Ember.LOG_VERSION = false
# for more details see: http://emberjs.com/guides/application/
window.App = Ember.Application.create(rootElement: '#ember-app')