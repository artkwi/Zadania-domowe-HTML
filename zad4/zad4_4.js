function DecimalToBinary(number) {
	var bin=" ";
	while (number >= 1)
	{
		if ((number%2)==0)
		{
			bin = "0" + bin;
		}
		else
		{
			bin = "1" + bin;
		}
		number=Math.floor(number / 2);
	}
	return bin;
}

console.log(DecimalToBinary(156));