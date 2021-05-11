const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
];


let a = {
    userId: "nsjsks",
    name: 'TV',
    rate: 6
}

function rateProduct(a) {
    for (var i in products) {
      if (products[i].name == a.name) {
         products[i].ratings.push(a);
         console.table(products[i].ratings);

         break;
      }
    }
 }
function avgRating(proName){
    for (var i in products) {
        if (products[i].name == proName) {
            let rateSum = 0;
            let itemsFound = 0;
            let item = null;
            for(var j in products[i])
                item = victorianSlang[i];
                    if (item.found) {
                    popularitySum = item.popularity + popularitySum;
                    itemsFound = itemsFound + 1;
                }

           break;
        }
      }
}
rateProduct(a);
avgRating('TV')

