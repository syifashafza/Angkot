var jmlangkot = 10;
var angkotBeroperasi= 6;
var noAngkot = 1;

while( noAngkot <= angkotBeroperasi ){
	alert('angkot no. ' + noAngkot + ' beroperasi dengan baik.');
	noAngkot++;
}

for( noAngkot = angkotBeroperasi+1 ; noAngkot <= jmlangkot; noAngkot++ ){
	alert('angkot no. ' + noAngkot + ' sedang tidak beroperasi.');
}