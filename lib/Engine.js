var Engine =
{
	start: function()
	{
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'Avalion');

		this.game.state.add('boot', BootState);
		this.game.state.add('load', LoadState);
		this.game.state.add('menu', MenuState);
		this.game.state.add('exit', ExitState);

		this.game.state.start('boot');
	}
}