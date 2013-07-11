var colCount = 3;
var colWidth = 0;
var margin = 20;
var windowWidth = 1030;
var blocks = [];

function setupBlocks() {
	colWidth = $('article.post').outerWidth();
	for(var i = 0; i < colCount; i++) {
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('article.post').each(function(){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin + (index * (colWidth + margin));
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		blocks[index] = min + $(this).outerHeight() + margin;
	});	
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

window.onload = function() {
  setupBlocks();
};




