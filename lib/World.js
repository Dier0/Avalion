var World =
{
	getList: function()
	{
		var worlds = [];
		var files = fs.readdirSync(__DIR__+'data/worlds');
		files.forEach(function(item)
		{
			var filePath = __DIR__+'data/worlds/'+item;
			var data = fs.readFileSync(filePath, "utf8");
			data = JSON.parse(data);
			worlds.push(data);
		});

		return worlds;
	}
}