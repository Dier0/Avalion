var LoadState =
{
	preload: function()
	{
		var loadingLabel = Engine.game.add.text(Canvas.calcX(95), Canvas.calcY(95), 'Wczytywanie...', 
			{font: '20px Courier', fill: '#ffffff'});
		loadingLabel.anchor.setTo(1, 1);

		// Wczytywanie zasobów
		Engine.game.load.image('menu_bg_part1', './assets/img/parallax/01_1.png');
		Engine.game.load.image('menu_bg_part2', './assets/img/parallax/01_2.png');
		Engine.game.load.image('menu_bg_part3', './assets/img/parallax/01_3.png');
		Engine.game.load.image('menu_bg_part4', './assets/img/parallax/01_4.png');
		Engine.game.load.image('menu_bg_part5', './assets/img/parallax/01_5.png');
		Engine.game.load.image('menu_bg_part6', './assets/img/parallax/01_6.png');
	},

	create: function()
	{
		Engine.game.state.start('menu');
	}
}