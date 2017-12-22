function Halo()
{
	document.getElementById('testing').innerHTML = 'test';
}

function Halo2(nama)
{
	document.getElementById('testing').innerHTML = nama;
}

function Halo3()
{
	// ambil nilai attribute custom dari element
	var nama = document.getElementById('tombol').getAttribute("data");
	document.getElementById('testing').innerHTML = nama;
}
