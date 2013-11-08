$(function () {

	placemoi = {

		init: function(){
			$('input').focus(function(){
				that = $(this);
				papa = that.parent();
				if (papa.find('div').hasClass('placeme')) {
					// ??
				}else{
					papa.append('<div class="placeme">'+that.val()+ "</div>");
					$(this).val('');
				}
			}).blur(function(){
				that = $(this);
				papa = that.parent();
				place = papa.find('.placeme');
				if (that.val() == '') {
					that.val(place.text())
					place.remove();
				}else{
					place.toggleClass('placeme-off');
				}
			})
		}
	}

	placemoi.init();
});