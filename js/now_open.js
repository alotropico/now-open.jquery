(function($){
	"use strict";
	$.fn.extend({
		now_open: function(options) {

			var defaults = {
				week: [
					{'1':[8.5,17]},
					{'2':[8.5,17]},
					{'3':[8.5,17]},
					{'4':[8.5,17]},
					{'5':[8.5,17]}
				],
				excludes: [],
				callback: function(){},
				latency: 1,
				currentDate: false
			};

			var options = $.extend(defaults, options),
				base = this;

			function timeFunctions(){
	            openTime();

	            if(options.latency)
		            setTimeout(timeFunctions, options.latency*60*1000);
		    }

		    function openTime(){

		    	if(!options.currentDate)
		        	var now = new Date();
		    	else
		    		var now = new Date(options.currentDate);

		        var month = now.getMonth() + 1;
		        var monthDay = now.getDate();
		        var day = now.getDay();
		        var hour = now.getHours();
		        var mins = now.getMinutes();

		        var openNow = true;

		        for(var i=0; i<options.excludes.length; i++){
		        	if(month == options.excludes[i][0] && monthDay == options.excludes[i][1])
		        		openNow = false;
		        }

		        console.log(openNow);

		        if(openNow){
		        	var openTime = false;
		        	var thisTime = hour + mins/60;
		        	$.each(options.week, function( index, value ) {
		        		$.each(value, function( key, val ) {
		        			if(day==key){
		        				if(thisTime>=val[0] && thisTime<val[1])
		        					openTime = true;
		        			}
						});
					});
					if(!openTime)
						openNow = false;
		        }

		        options.callback.call(this, base,openNow);
		    }

			// PUBLIC

			return this.each(function(){
				timeFunctions();
			});

		}
		
	});
	
})(jQuery);