var Boot =
{
	createFolders: function()
	{
		var folders =
		[
			__DIR__ + '/data',
			__DIR__ + '/data/worlds',
			__DIR__ + '/data/players'
		];

		folders.forEach(function(folder)
		{
			if (!fs.existsSync(folder))
			{
			    fs.mkdirSync(folder);
			}
		});
	},

	createConfigFile: function()
	{
		var configPath = __DIR__ + '/data/config.json';
		if (!fs.existsSync(configPath))
		{
			var data = Config.prepareData();

		    fs.writeFileSync(configPath, data);
		}
	}
}