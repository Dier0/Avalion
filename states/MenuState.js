var MenuState =
{
	bg_layers: [],

	create: function()
	{
		this.createBg();
		this.loadContent('menu');
	},

	update: function()
	{
		this.bg_layers.forEach(function(layer)
		{
			layer.tilePosition.x -= Math.pow(7 - layer.id, 2) / 10;
		});
	},

	createBg: function()
	{
		for (var i = 6; i >= 1; i--)
		{
			var layer = Engine.game.add.tileSprite(0, 0, 1920, 1080, 'menu_bg_part'+i);
			layer.scale.setTo(Engine.game.width / layer._frame.width, Engine.game.height / layer._frame.height);
			layer.id = i;

			this.bg_layers.push(layer);
		}
	},

	loadContent: function(content)
	{
		fs.readFile('./inc/'+content+'.html', 'utf8', function(err, data)
		{
			if (err) 
			{
				return console.warn(err);
			}
			else
			{
				$('#content').html(data);
				$('select').selectric({maxHeight: 140});
			}
		});
	},

	render: function()
	{
		if (config.general.showFps)
		{
			Engine.game.debug.text(Engine.game.time.fps, 3, 14, '#ffffff');
		}
	}
}