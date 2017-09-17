class WorldCreator
{
	constructor()
	{
		this.haveData = false;
	}

	create()
	{
		if (this.haveData && this.displayBox && this.displayBoxContent)
		{
			var _this = this;
			this.displayBox.fadeIn(300);
			this.displayState(1);

			this.displayState(2);
			this.generateMap();
			this.prepareData();
			this.endProcess();
			this.displayBox.fadeOut(300);
			
			return true;
		}
	}

	generateMap()
	{
		// kod do generowania mapy (Maciek)
		this.mapData = [];


		this.displayState(3);
	}

	prepareData()
	{
		var _this = this;
		var data =
		{
			mapData:       _this.mapData,
			worldName:     _this.name,
			gameplayType:  _this.gameplayType,
			worldSize:     _this.size,
			worldType:     _this.type,
			worldHardness: _this.hardness,
			gameTime:      0
		};

		this.data = JSON.stringify(data);

		this.displayState(4);
	}

	endProcess()
	{
		var _this = this;
		var filePath = __DIR__+'data/worlds/'+this.name+'.json';

		// Jeśli plik nie istnieje stwórz go
		if (!fs.existsSync(filePath))
		{ 
			fs.writeFile(filePath, this.data, function(err)
			{
				if(err)
				{
					_this.displayState(-2);
					return console.log(err);
				}
				else
				{
					_this.displayState(5);
				}
			}); 
		}
		else
		{
			this.displayState(-1);
		}
	}

	setWorldData(worldName, gameplayType, worldSize, worldType, worldHardness)
	{
		this.name         = worldName;
		this.gameplayType = gameplayType;
		this.size         = worldSize;
		this.type         = worldType;
		this.hardness     = worldHardness;

		this.haveData = true;
	}

	setDisplayBox(box)
	{
		this.displayBox = box;
		this.displayBoxContent = box.find('.box_inside');
	}

	getStateString(state)
	{
		switch(state)
		{
			case 1:
				return 'Przygotowywanie do tworzenia świata';
				break;

			case 2:
				return 'Generowanie świata';
				break;

			case 3:
				return 'Przygotowywanie danych do zapisu';
				break;

			case 4:
				return 'Zapisywanie świata';
				break;

			case 5:
				return 'Świat został utworzony';
				break;

			// ------------- BŁĘDY -------------

			case -1:
				return 'Świat o podanej nazwie już istnieje!';
				break

			case -2:
				return 'Wystąpił błąd podczas zapisywania świata!';
				break

			default:
				return 'Nieznany stan';
				break;
		}
	}

	displayState(state)
	{
		var string = this.getStateString(state);
		console.log(string);
		this.displayBoxContent.text(string);
	}
}