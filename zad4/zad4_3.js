var tab = ["a", "b", "koza", 62];

function ElementX(tab, x) {
	var index = 0;
	for (var i=0;i<tab.length;i++)
	{
		if (x===tab[i])
		{
			index = i;
		}
	}
	return tab[index] +" "+ index;
}

console.log(ElementX(tab,"koza"));