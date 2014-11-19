

define([
  'jquery',
  'underscore',
  'backbone',
  // 'views/HomeView',
  // 'views/IndexView',
  // 'views/ContentView',
  // 'views/StatisticsView',
  // 'views/CityView',
  // //'views/HelperBaseView',
  // 'collections/PageCollection',
  // 'collections/StatisticsCollection',
  // 'models/PageModel',
  // 'module'
   
], function($, _, Backbone


  // ,HomeView,IndexView,ContentView,StatisticsView, CityView, 
  // //HelperBaseView,
  // PageCollection, StatisticsCollection,
  // PageModel, module

  ){

  var smartRouter = Backbone.Router.extend({
      routes: {
        '/' : 'startPage',  
        ':lang': 'startPage',
        ':lang/:index': 'startPage',
        ':lang/:index/:section': 'startPage',
        ':lang/:index/:section/*path': 'startPage',
        '*action': 'startPage'    
      },

      startPage: function(lang,index,section,path) {

          console.log('hello');
      
      }
    });

  var initialize = function(options){

    
        var approuter = new smartRouter();

       // Backbone.history.start({ pushState: Modernizr.history, silent: true });


        //   if(!Modernizr.history) {

        //       var fragment = window.location.pathname.substr(
        //             Backbone.history.options.root.length);

        //       if(fragment == '') {
        //         fragment = '#start';
        //       }

        //         Backbone.history.navigate(fragment, { trigger: true });


        //   } else {

        //       Backbone.history.loadUrl(Backbone.history.getFragment());

        // }
   


  };


  return {
    initialize: initialize
  };
});





