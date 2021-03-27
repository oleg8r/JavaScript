var boardSize = prompt("Specify the board size:")
for(var i=0; i<boardSize; i++) {
	if(i%2==0)
		console.log("# # # # ");
	else(i%2!=0)
		console.log(" # # # #");
};