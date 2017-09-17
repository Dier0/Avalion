var BootState =
{
	create: function()
	{
		Engine.game.physics.startSystem(Phaser.Physics.ARCADE);

		Engine.game.state.start('load');
	}
}