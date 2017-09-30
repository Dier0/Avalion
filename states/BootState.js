var BootState =
{
	create: function()
	{
		Engine.game.physics.startSystem(Phaser.Physics.ARCADE);

		if (config.general.showFps)
		{
			Engine.game.time.advancedTiming = true;
		}

		Config.run();

		Engine.game.state.start('load');
	}
}