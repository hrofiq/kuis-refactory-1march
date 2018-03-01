// ceritanya csv
var csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

// untuk buat csv
var lines=csv.split("\n");
var result = [];
var headers=lines[0].split(",");

// Converter converter from: https://gist.github.com/faisalman/845309
function convertToRupiah(angka) {
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return 'Rp'+rupiah.split('',rupiah.length-1).reverse().join('');
}

// buat object
for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
        obj[headers[j].trim().toLowerCase()] = currentline[j].trim();
    }

    result.push(obj);
}

final_result = result.sort((a,b) => {
                          if (a.price < b.price) return -1;
                          if (a.price > b.price) return 1;
                          return 0;
                        })
                     .map(x => Object.assign({}, x, {price: convertToRupiah(x.price)}));

console.log(JSON.stringify(final_result))