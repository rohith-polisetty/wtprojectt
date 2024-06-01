

let cartcontainer=[];
function imagesarray()
{
	
	cartcontainer.push(
	{
		img:'aimage1.jpg',
		name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
		ratingimage:'arating1.png',
		rating:'87',
		cost:'$10.90',
		productid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
	});
	
	
	cartcontainer.push(
	{
		img:'aimage2.jpg',
		name:'Intermediate Size Basketball',
		ratingimage:'arating2.png',
		rating:'127',
		cost:'$20.95',
		productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d"
	});
	
	cartcontainer.push(
	{
		img:'aimage3.jpg',
		name:'Adults Plain Cotton T-Shirt - 2 Pack',
		ratingimage:'arating3.png',
		rating:'56',
		cost:'$7.99',
		productid:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e"
	});
	
	cartcontainer.push(
	{
		img:'aimage4.jpg',
		name:'2 Slot Toaster - Black',
		ratingimage:'arating4.png',
		rating:'2197',
		cost:'$18.99',
		productid:"54e0eccd-8f36-462b-b68a-8182611d9add"
	});
	
	cartcontainer.push(
	{
		img:'aimage5.jpg',
		name:'6 Piece White Dinner Plate Set',
		ratingimage:'arating5.png',
		rating:'37',
		cost:'$20.67',
		productid:"3ebe75dc-64d2-4137-8860-1f5a963e534b"
	});
	
	cartcontainer.push(
	{
		img:'aimage5.webp',
		name:'6-Piece Nonstick, Carbon Steel Oven',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53"
	});
	
	cartcontainer.push(
	{
		img:'aimage8.jpg',
		name:'Luxury Towel Set - Graphite Gray',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"77919bbe-0e56-475b-adde-4f24dfed3a04"
	});
	
	cartcontainer.push(
	{
		img:'aimage6.jpg',
		name:'Plain Hooded Fleece Sweatshirt',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.78',
		productid:"9dd82ca78-a18b-4e2a-9250-31e67412f98d9"
	});
	
	cartcontainer.push(
	{
		img:'aimage11.jpg',
		name:'Round Sunglasses',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"aad29d11-ea98-41ee-9285-b916638cac4a"
	});
	
	cartcontainer.push(
	{
		img:'aimage10.jpg',
		name:"Women's Chiffon Beachwear Cover Up - Black",
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"5968897c-4d27-4872-89f6-5bcb052746d7"
	});
	
	
	cartcontainer.push(
	{
		img:'aimage9.jpg',
		name:'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"3fdfe8d6-9a15-4979-b459-585b0d0545b9"
	});
	
	cartcontainer.push(
	{
		img:'aimage13.jpg',
		name:'Waterproof Knit Athletic Sneakers - Gray',
		ratingimage:'arating6.png',
		rating:'175',
		cost:'$34.99',
		productid:"58b4fc92-e98c-42aa-8c55-b6b79996769a"
	});
}
imagesarray();

function getimages()
{
	let htmlcode='';
	for(let i=0;i<cartcontainer.length;i++)
	{
		
		images=document.querySelector('.images');
		if(i===7)
		{
			htmlcode=htmlcode+
			`<div class='grid' style='height:600px'>
				<img class='imageitem' src=${cartcontainer[i].img}>
				<p class='textitem'>${cartcontainer[i].name}</p>
				<div class='rating'>
				<img class='ratingitem' src=${cartcontainer[i].ratingimage}>
				<p class='ratingpercent'>${cartcontainer[i].rating}</p>
				</div>
				<p class='costitem'>${cartcontainer[i].cost}</p>
				<select name="noofitems" class='noofitems'>
				  <option value="1">1</option>
				  <option value="2">2</option>
				  <option value=3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
				  <option value="6">6</option>
				  <option value="7">7</option>
				  <option value="8">8</option>
				</select>
				<div class='extra'>
					<p style=
					'color:rgb(0,6,7);margin-left:20px;font-size:13px;font-family:Arial;font-weight:600;'>
						Color
					</p>
					<div class='colors'>
						<button class='yellow'>Yellow</button>
						<button class='teal'>teal</button>
					</div>
					<p style='color:rgb(0,6,7);margin-left:20px;font-size:15px;font-weight:600;'>
						Size
					</p>
					<div class='sizes'>
						<button class='S'>S</button>
						<button class='M'>M</button>
						<button class='L'>L</button>
					</div>
				</div>
				<button class='addcart'>Add to Cart</button>
				
				</div>`;
		}			
		if(i===6 || i===8 || i===9 || i===10 || i===11 || i===12)
		{
			htmlcode=htmlcode+
			`<div class='grid' style='height:600px'>
				<img class='imageitem' src=${cartcontainer[i].img}>
				<p class='textitem'>${cartcontainer[i].name}</p>
				<div class='rating'>
				<img class='ratingitem' src=${cartcontainer[i].ratingimage}>
				<p class='ratingpercent'>${cartcontainer[i].rating}</p>
				</div>
				<p class='costitem'>${cartcontainer[i].cost}</p>
				<select name="noofitems" class='noofitems'>
				  <option value="1">1</option>
				  <option value="2">2</option>
				  <option value=3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
				  <option value="6">6</option>
				  <option value="7">7</option>
				  <option value="8">8</option>
				</select>
				<div class='extra'>
				</div>
				<button class='addcart'>Add to Cart</button>
			</div>`;
		}
		if(i===1 || i===0 || i===2 || i===3 || i===4 || i===5)
		{
			htmlcode=htmlcode+
			`<div class='grid' style='height:500px'>
				<img class='imageitem' src=${cartcontainer[i].img}>
				<p class='textitem'>${cartcontainer[i].name}</p>
				<div class='rating'>
				<img class='ratingitem' src=${cartcontainer[i].ratingimage}>
				<p class='ratingpercent'>${cartcontainer[i].rating}</p>
				</div>
				<p class='costitem'>${cartcontainer[i].cost}</p>
				<select name="noofitems" class='noofitems'>
				  <option value="1">1</option>
				  <option value="2">2</option>
				  <option value=3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
				  <option value="6">6</option>
				  <option value="7">7</option>
				  <option value="8">8</option>
				</select>
				
				<button class='addcart'>Add to Cart</button>
			</div>`;
		}
		images.innerHTML=htmlcode;
		
	}
}

getimages();


