var Slack = require('slack-client');
//var request = require('request');
var token = 'xoxb-20832683184-Pik06oK9Ao2vDhvYkeYBnlol';



slack();





//reports = harvest.Reports.timeEntriesByProject
function slack(){

	var slack = new Slack(token, true, true);
	slack.on('open', function () {
		console.log('hello world');

		//var channel = 'ux';
		var message = 'BEEEEEP BLEEEPY BLOOP BLEEEP KKKKCCHHHH';

		//console.log(slack.channels);

	  var channels = Object.keys(slack.channels)
	    .map(function (k) { return slack.channels[k]; })
	    .filter(function (c) { return c.is_member; })
	    .map(function (c) { return c.name; });
	 
	  var groups = Object.keys(slack.groups)
	    .map(function (k) { return slack.groups[k]; })
	    .filter(function (g) { return g.is_open && !g.is_archived; })
	    .map(function (g) { return g.name; });

	    console.log('Welcome to Slack. You are ' + slack.self.name + ' of ' + slack.team.name);
	    console.log(channels);
	    console.log(groups);
	 

	    
			

	});

	slack.on('message', function(message) {
			//console.log(message);
	    var channel = slack.getChannelGroupOrDMByID(message.channel);
	    var user = slack.getUserByID(message.user);

	    console.log(message);

	    if(typeof message.text != 'undefined'){

		    if(message.text.indexOf('pebble colours')>-1){

				channel.send('*pebble pink*: RGB: 238, 079, 126, HEX: #EE4F7E, HSL: 342, 82, 62');
				channel.send('*pebble ink*: RGB: 107, 116, 130, HEX: #6B7482, HSL: 216, 17, 50');
				channel.send('*pebble blue*: RGB: 014, 162, 220, HEX: #0EA2DC, HSL: 197, 88, 46 ​');
				channel.send('*pebble aqua*:RGB: 055, 190, 192, HEX: #37BEC0, HSL: 181, 55, 48 ​');
				channel.send('*pebble green*: RGB: 164, 206, 078, HEX: #A4CE4E, HSL: 080, 57, 56 ​');
				channel.send('*pebble purple*: RGB: 155, 092, 164, HEX: #9B5CA4, HSL: 293, 28, 50 ​');
				channel.send('*pebble orange*: RGB: 250, 173, 064, HEX: #FAAD40, HSL: 035, 95, 62');
				channel.send('*pebble blue-grey*: RGB: 59, 82, 114, HEX: #3B5272, HSB: 214, 48, 44');


		    }

		    if(message.text.indexOf('pebble code')>-1){
		    	channel.send('CONTROL, WE HAVE A CODE 623 VIOLATION. ABSENCE OF CURLY BRACES.');
		    }
		    if(message.text.indexOf('pebblecode')>-1){
		    	channel.send('CONTROL, WE HAVE A CODE 361 VIOLATION. COMPANY NAME IS TWO WORDS WITH CURLY BRACES AROUND CODE.');
		    }
		    if(message.text.indexOf('pebble{code}')>-1){
		    	channel.send('CONTROL, WE HAVE A CODE 416 VIOLATION. LACK OF SPACE BETWEEN PEBBLE AND THE FIRST CURLY BRACE.');
		    }
		   	if((message.text.indexOf('Pebble')>-1)|(message.text.indexOf('Pebble Code')>-1)|(message.text.indexOf('pebble Code')>-1)){
		    	channel.send('CONTROL, WE HAVE A CODE 935 VIOLATION. INCORRECT CAPITALISATION OF COMPANY NAME.');
		    }
		   	if((message.text.indexOf('[code]')>-1)|(message.text.indexOf('(code)')>-1)|(message.text.indexOf('<code>')>-1)){
		    	channel.send('CONTROL, WE HAVE A CODE 147 VIOLATION. INCORRECT TYPE OF BRACKETS.');
		    }
		    if(message.text.indexOf('pebble.code')>-1){
		    	channel.send("CONTROL, WE HAVE A CODE 219 VIOLATION. YOU KNOW WHAT YOU'VE DONE");
		    }
		   	if((message.text.indexOf('nom')>-1)|(message.text.indexOf('Nom')>-1)){
		    	channel.send('GET IN THE VAN');
		    }	    	
	    }



	});

	slack.login();


}
