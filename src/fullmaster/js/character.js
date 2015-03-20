/*!
 * @fileoverview panda.woniu.com concept site script, jQuery is required
 * @author nkCoding@gmail.com (Night Knight)
 * @version 0.1.0
 */
jQuery(function($){
	'use strict';
   var winHeight = 0;
function findDimensions() 
{

if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;

if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
winHeight = document.documentElement.clientHeight;

}

}
findDimensions();

$(window).resize(function(){
  findDimensions();
});

	var $flash = $('#flash');
	swfobject.embedSWF($flash.data('src'), $flash.get(0), '100%',winHeight, 10, 'expressInstall.swf', {}, {wmode: 'transparent'});


});

