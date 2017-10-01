var Config =
{
	get: function()
	{
		var configPath = __DIR__ + '/data/config.json';
		var data = fs.readFileSync(configPath, "utf8");
		data = JSON.parse(data);

		return data;
	},

	prepareData: function()
	{
		var data =
		{
			general:
			{
				language: 'polish',
				showFps: false
			},
			video:
			{
				resolution:
				{
					width: 800,
					height: 600
				},
				display: 'window',
				shadowsQuality: 2
			},
			audio:
			{
				music: 6,
				audio: 8
			},
			controls:
			{
				left: 'a',
				right: 'd',
				down: 's',
				jump: 'space'
			}
		};

		data = JSON.stringify(data);

		return data;
	},

	save: function(updatedData, restartApp)
	{
		var configPath = __DIR__ + '/data/config.json';
		var data = config;
		var newData = Object.assign({}, data, updatedData);
		
		config = newData;
		Config.run();

		var strData = JSON.stringify(newData);
		fs.writeFileSync(configPath, strData);

		if (restartApp) win.reload();
	},

	run: function()
	{
		win.resizeTo(config.video.resolution.width, config.video.resolution.height);
		win.setPosition('center');

		var res =
		{
			width:  config.video.resolution.width,
			height: config.video.resolution.height
		};

		if (config.video.display == 'fullscreen')
		{
			Engine.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
			Engine.game.scale.fullScreenTarget = document.getElementsByTagName('body')[0];
			Engine.game.scale.startFullScreen(false);

			res =
			{
				width:  screen.width,
				height: screen.height
			};
		}
		else if (config.video.display == 'window')
		{
			Engine.game.scale.stopFullScreen();
		}

		$('#content').css({'transform': 'scale(' + (res.width / 800) + ', ' + (res.height / 600) + ')'});
	}
}