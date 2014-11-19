define([
  'jquery',
  'underscore',
  'backbone',
  'collections/IndexPageCollection',
  'TweenMax',
  'views/HelperBaseView',
  
  'text!templates/homePage.html',
  'text!templates/homePageSmartphone.html',
  'text!templates/svg/svgBubble.svg',
  'animationData',
  
  'module',
  'socialShareScripts'
  //'reject'

], function($, _, Backbone
	){
  
	var HomeView = Backbone.View.extend({

	el: 'body',
	events: {
  	
  		
		"mousewheel main#home":"scrollControl",
		"DOMMouseScroll main#home":"scrollControl",
		
		"click #showResult": "showResult",
		"click #showCities": "showCities",
		"click #animationControl .list a": "clickAnimationStep",
		"click main#home .scrollElement": "clickScrollDown",
		
		"mouseover .textblock13" : "mousoverBubble",
		"mouseout .textblock13" : "mousoutBubble",
		"mouseover .svgCities a" : "mousoverBubble",
		"mouseout .svgCities a" : "mousoutBubble",

		// share
	  	"click .homePage .shareMenuLink": "openShareModal",
	  	"click .homePage .shareFacebook": "shareFacebook",
	  	"click .homePage .shareGoogle": "shareGoogle",
	  	"click .homePage .shareTwitter": "shareTwitter",
	  	"click .homePage .shareLink": "shareLink",
	  	"click .homePage .shareOverlay .close": "closeOverlay"
		
  	},
	
	
	  initialize: function(options) {

	  	if(_.size(this.helperBasicView) <= 0) {
	  	  this.helperBaseView = new HelperBaseView();

	  	}

	    this.render(options);


	  },
	  render: function(options) {	
      
	   //  this.helperBaseView.getPageData({

	  	// 	pageDataUrl: options.model.get('node') + '.json',
	  	// 	pageImagesUrl: module.config().generic_image_url,
	  	// 	callback: this,
	  	// 	options: options

	  	// });

	  },	 


	});
	
	
	return HomeView;

});