

require.config({
  paths: {
    // libraries
    jquery: '../../node_modules/jquery/dist/jquery',
    underscore: '../../node_modules/underscore/underscore',
    backbone: '../../node_modules/backbone/backbone'
   
    

  },
  shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
  
    },
  config: {

        
        // 'collections/StatisticsCollection': {  
        //   server_url: '/public/data/statistics.json',

               
        // }
        // 'views/IndexView': {
        
         
        //   image_server_url: '/public/images/drupal/',
         

        //   server_domain: 'http://www.smart-city-survey.com/',
         
         
          
        // }
     }  

});


require([
  'app',
], function(App){
        
  App.initialize();

});


