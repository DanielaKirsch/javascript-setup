
;(function ( $, window, document, undefined ) {

		var pluginName = "smallProjectPlugin",
				defaults = {
				
					something: 'red'
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
					
					// caller elemen
					this.body = $(this.element);
					

					this.someFunction();
				},

				someFunction: function() {

					console.log(this.settings.something);
					console.log(this.body);

					this.body.on('click','.myButton', function(event){
						event.preventDefault();

						console.log($(this));
					});


				}
			
		};

		
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );