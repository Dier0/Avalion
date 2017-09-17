var ExitState =
{
	create: function()
	{
		fs.readFile('./inc/exit.html', 'utf8', function(err, data)
		{
			if (err) 
			{
				return console.warn(err);
			}
			else
			{
				$('#content').html(data);
			}
		});

		setTimeout(this.exit, 3000);
	},

	exit: function()
	{
		gui.App.quit();
	}
}