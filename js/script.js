$(document).ready(Init);

function Init(){

	var myWeek = [
			{'1':[8.5,20]},
			{'2':[8.5,20]},
			{'3':[8.5,20]},
			{'4':[8.5,20]},
			{'5':[8.5,20]},
			{'6':[10,20]}
		];

	var myExcludes = [
			[1,1],
			[1,6]
		];

	var autocomplete1 = $('#open_div').now_open({
		week: myWeek,
		excludes: myExcludes,
		callback: myCallback
	});

	var autocomplete1 = $('#open_div_2').now_open({
		week: myWeek,
		excludes: myExcludes,
		callback: myCallback,
		latency: 1,
		currentDate: "January 1, 2017 11:00:00"
	});

	var autocomplete1 = $('#open_div_3').now_open({
		week: myWeek,
		excludes: myExcludes,
		callback: myCallback,
		latency: 1,
		currentDate: "January 9, 2017 11:00:00"
	});

}

function myCallback(element, isOpen){
	if(isOpen){
		element.removeClass('close').text('We are open... call us!');
	} else {
		element.addClass('close').text('We are not open');
	}
}