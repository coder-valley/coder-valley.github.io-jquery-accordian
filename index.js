$(document).ready( () => 
{
	let slideTab = $('.link-alltabs'),slideTabContainer = $('.main-div-cont');
	if(slideTab.length)
	{
		slideTab.off('click').on('click', function()
		{
			let slidRow = $(this).parent(),slidContent = $(this).parent().find('.panel');
			slideTabContainer.find('.panel').not(slidContent).stop().slideUp('slow');
            slideTabContainer.find('.subdiv-row').not(slidRow).removeClass('open');
            slidContent.stop().slideToggle('slow', () =>
            {
				slidRow.toggleClass('open', slidContent.is(':visible'));
			});
		});
	}
});