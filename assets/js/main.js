var colCount = 3;
var colWidth = 0;
var margin = 20;
var windowWidth = 1030;
var blocks = [];

function setupBlocks() {
  colWidth = jQuery('article.post').outerWidth();
  for(var i = 0; i < colCount; i++) {
    blocks.push(margin);
  }
  positionBlocks();
}

function positionBlocks() {
  jQuery('article.post').each(function(){
    var min = Array.min(blocks);
    var index = jQuery.inArray(min, blocks);
    var leftPos = margin + (index * (colWidth + margin));
    jQuery(this).css({
      'left':leftPos+'px',
      'top':min+'px'
    });
    blocks[index] = min + jQuery(this).outerHeight() + margin;
  });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Function to get the Min value in Array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

window.onload = function() {
  if ( jQuery('body').hasClass('home') || jQuery('body').hasClass('category') ) {
    setupBlocks();
    jQuery('div.wrap.container').css({'height':Array.max(blocks)+'px'});
  }
};




