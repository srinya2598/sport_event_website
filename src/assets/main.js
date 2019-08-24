'use strict';

window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

$(document).ready(function () {

    /* ------------- Hero Banner  -------------*/

    if($('#layerSlider').length){
        $('#layerSlider').layerSlider({
            autoStart : false,
            skin : 'noskin',
            skinsPath : '/css/skins/'
        });
    }
});
