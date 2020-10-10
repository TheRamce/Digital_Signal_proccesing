var container=document.getElementById("container");
var row= 4;//enter the number of rows
var col= 4;//enter the number of cols
var W=0;
var H=0;
var lu=document.getElementById("legend-labels");
//content.firstChild.style.backgroundColor="red";



var b_w_i=document.getElementById("w_i");
var b_w_d=document.getElementById("w_d");
var b_h_i=document.getElementById("h_i");
var b_h_d=document.getElementById("h_d");
var str=document.getElementById("start"); 
var color_btn=document.getElementById("colorButton");
var square_color="#fe0000";
var square_color_end="#0a0000";




//data array
var arr = [
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0.2, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0.5, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.6, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0.2, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.2, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0.2, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0.5, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.6, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.3, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 1, 0.6, 0.9],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.1, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.9, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.3, 0, 0, 0.9, 0.8, 0.7, 0.1, 0.2, 0, 1, 0, 0.8, 0.7, 0.2, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.6, 0.6, 0.9],
[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0, 0.8, 0.7, 0.6, 0.5, 0.4],
[0.4, 0.8, 0.6, 0.3, 0.2, 0.5, 0.6, 0.2, 1, 1, 0, 0.8, 0.7, 0.2, 0.6, 0.9],
];
color_btn.addEventListener("click", function() {
	let color = document.getElementById('colorColor').value;
	let color_end = document.getElementById('colorColor1').value;

	square_color=color;
	square_color_end=color_end;
	
	//document.body.style.backgroundColor = color;

	let a=square_color.split('');
	let red="0x"+a[1]+""+a[2];
	let green="0x"+a[3]+""+a[4];
	let blue="0x"+a[5]+""+a[6];
	let v1= parseInt(Number(red), 10);
	let v2= parseInt(Number(green), 10);
	let v3= parseInt(Number(blue), 10);
	//end color
	let ba=square_color_end.split('');
	let red_end="0x"+ba[1]+""+ba[2];
	let green_end="0x"+ba[3]+""+ba[4];
	let blue_end="0x"+ba[5]+""+ba[6];

	

	
	let v1_end= parseInt(Number(red_end), 10);
	let v2_end= parseInt(Number(green_end), 10);
	let v3_end= parseInt(Number(blue_end), 10);

	let m1, m2, m3, number;
	let r_diff=v1_end-v1;  
	let r_div=r_diff/4.2;

	let g_diff=v2_end-v2;
	let g_div=g_diff/4.2;

	let b_diff=v3_end-v3;
	let b_div=b_diff/4.2;


	for (var i = 0; i < 5; i++) {
		m1=v1+(i*r_div)

		m2=v2+(i*g_div);

		m3=v3+(i*b_div);

		//container.children[0].textContent=m2;
		let r, g, b, mul;
 		mul = Math.floor((m1/255)*16);
		r = mul.toString(16);
		g = Math.floor((m2/255)*16).toString(16);
		b = Math.floor((m3/255)*16).toString(16);

		lu.children[i].style.backgroundColor="#"+r+g+b;
		
			}
	



	//let txt = document.getElementById('colorText').value = v/ 255;




	
});

b_w_i.addEventListener("click", function() {
	//let color = document.getElementById('colorText').value;

	W= W + 0.05;

	for (var i = 0; i <row * col ; i++) {
		container.children[i].style.width=`${W}%`;
	}
		

	
});

b_w_d.addEventListener("click", function() {
	W= W - 0.05;

	for (var i = 0; i <row * col ; i++) {
		container.children[i].style.width=`${W}%`;
	}
});

b_h_i.addEventListener("click", function() {
	H= H + 0.025;
	for (var i = 0; i <row * col ; i++) {
		container.children[i].style.paddingBottom = `${H}%`;
	}
		
});
b_h_d.addEventListener("click", function() {
	H= H - 0.025;
	for (var i = 0; i <row * col ; i++) {
		container.children[i].style.paddingBottom = `${H}%`;
		//container.children[i].textContent="";
	}
		
});






str.addEventListener("click", function() {
	Tutor(container, arr);
});

//returns corresponding color
function get_color(number) {
	//let color = document.getElementById('colorColor').value;
	let a=square_color.split('');
	let red="0x"+a[1]+""+a[2];
	let green="0x"+a[3]+""+a[4];
	let blue="0x"+a[5]+""+a[6];
	let v1= parseInt(Number(red), 10);
	let v2= parseInt(Number(green), 10);
	let v3= parseInt(Number(blue), 10);
	
	let ba=square_color_end.split('');
	let red_end="0x"+ba[1]+""+ba[2];
	let green_end="0x"+ba[3]+""+ba[4];
	let blue_end="0x"+ba[5]+""+ba[6];

	let v1_end= parseInt(Number(red_end), 10);
	let v2_end= parseInt(Number(green_end), 10);
	let v3_end= parseInt(Number(blue_end), 10);

	let m1, m2, m3;
	let r_diff=v1_end-v1;  
	let r_div=r_diff/4.2;

    let g_diff=v2_end-v2;
	let g_div=g_diff/4.2;

	let b_diff=v3_end-v3;
	let b_div=b_diff/4.2;

	m1=v1+(number*r_diff)

	m2=v2+(number*g_diff);

	m3=v3+(number*b_diff);
	
	var r = Math.floor((m1 / 255) * 16).toString(16);
	var g = Math.floor((m2 / 255) * 16).toString(16);
	var b = Math.floor((m3 / 255) * 16).toString(16);
	//container.children[0].textContent=(g);
  	return "#"+r+""+g+""+b;


  }
  //delays ms operations
 function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }


function generate(r, c) {
	var height=get_h(r);
	
	
	var width=25-(3-(parseInt(c/8)*0.4))*(c-3);
	
	if (c === 9) 
	{
		width=10;
	}
	if (c === 10) 
	{
		width=9;
	}
	if (c > 10) 
	{
		width=8;
	}

	W=width;
	H=height;
	for (var i = 0; i < r * c; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		
		square.textContent = (i+1);
		
		square.style.paddingBottom = `${height}%`;
		square.style.width = `${width}%`;
		container.appendChild(square);	
	}

	square_color ="#fe0000";
	
	let a=square_color.split('');
	let red="0x"+a[1]+""+a[2];
	let green="0x"+a[3]+""+a[4];
	let blue="0x"+a[5]+""+a[6];
	let v= parseInt(Number(red), 10);
	let v2= parseInt(Number(green), 10);
	let v3= parseInt(Number(blue), 10);
	let m1, m2, m3, number;
	number=0.30;
	for (var i = 0; i < 5; i++) {
		
		
	if (v > v2) {

		if (v > v3) {
			m1=number;
			m2=1;
			m3=1;
		}
		else {
			m1=1;
			m2=1;
			m3=number;

		}

	}
	else {
		if (v2 > v3) {
			m1=1;
			m2=number;
			m3=1;
		}
		else {
			m1=1;
			m2=1;
			m3=number;

		}


	}


		let r, g, b, mul;
 		mul = Math.floor((m1 * v/255)* 16);
		r = mul.toString(16);
		g = Math.floor(m2*(v2/255)* 16).toString(16);
		b = Math.floor(m3*(v3/255)* 16).toString(16);

		lu.children[i].style.backgroundColor="#"+r+g+b;
		number= number + 0.15;

			}
}

var colorDisplay = document.getElementById("colorDisplay");
async function Tutor(parent, arr) {
	await sleep(1000);

	for(var i = 0; i < arr.length; i++){

		for (var j = 0; j < arr[i].length; j++) {
			parent.children[j].style.backgroundColor =get_color(arr[i][j]);
			//parent.children[j].textContent="";
			//square.style.width = 

			//parent.children[j].style.width=`${W}%`;


	}


		
		await sleep(300);
	//add click listeners to squares

	
	}
}
//returns the height of the each sensor due to the #of
function get_h(number){
	var r=7.5-(number-6);
	if (number === 4) 
		{
			r=13;
		}

	if (number=== 5) 
		{
			r= 10;
		}
		if (number> 12) {
		r=5;
	}
		return r;
	
}


//create the sensor array
generate( row, col );
//make the coloring operation
