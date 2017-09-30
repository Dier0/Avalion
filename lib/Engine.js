var Engine =
{
	start: function()
	{
		var resolution = config.video.resolution;
		this.game = new Phaser.Game(parseInt(resolution.width), parseInt(resolution.height), Phaser.AUTO, 'Avalion', null, false, false);

		this.game.state.add('boot', BootState);
		this.game.state.add('load', LoadState);
		this.game.state.add('menu', MenuState);
		this.game.state.add('exit', ExitState);

		this.game.state.start('boot');
	}
}