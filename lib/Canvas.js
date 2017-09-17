var Canvas =
{
	calcX: function(perc)
	{
		var width = Engine.game.width;
		return width * (perc / 100);
	},

	calcY: function(perc)
	{
		var height = Engine.game.height;
		return height * (perc / 100);
	}
}