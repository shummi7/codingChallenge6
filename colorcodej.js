var id1=document.getElementById("ida");
var id2=document.getElementById("idb");
var body=document.body;
var text=document.getElementsByClassName("text-line");
var show='Enter valid input';


function answer(str){

	if(!str.includes(','))
	{
		var hex= str;
		hex=hex.replace("#",'');
		var n=hex.match(/[^A-Fa-f0-9]/g);

        if(n!=null){
        id2.value= show;
		body.style.background= 'white';
		body.style.color='black';
        }

        else{
		var rgb=[];
		hex=hex.split("");
		hex=hex.map((hx)=>{
			hx= hx.toLowerCase()
			var toNum='0123456789abcdef'.indexOf(hx);
			return toNum });

			if(hex.length===3){
				var p=hex[1];var q=hex[2];
				hex[4]=hex[5]=q;
				hex[2]=hex[3]=p;
				hex[1]=hex[0];
			}

			if(hex.length!=3 && hex.length!=6){
	        id2.value= show;
			body.style.background= 'white';
			body.style.color='black';
	        }

	        else{
			for(var i=0;i<6;i++){
			var rgb1=hex[i]*16 + hex[i+1]*1;
			rgb.push(rgb1);
			i++;
			}
	        id2.value= "rgb("+rgb+")";
			var y=rgb[0]+rgb[1]+rgb[2];
			body.style.color=((y/2)>225)?'black':'white';
			body.style.background= id2.value;
	        }
        }
	}		



	else
	{
		var rgb=str;
		rgb=rgb.replace(/[^,0-9]/g, '').split(',');
		

		var arr=[];
		var s=[];

		for(var i=0;i<3;i++){

		//when there is no rgb[i] value
			if(rgb[i]=== undefined){
			rgb[i]='0';
			s.push(rgb[i]);
			}
		// if rgb[i] exceed
			else{
			rgb[i]=rgb[i].substr(0,3);
			s.push(rgb[i]);
			}

			if(rgb[i]>255){
			rgb[i]=255;
			s.push(rgb[i]);
			}

		//a-div num and b-reminder
		var hex='';	
		var a=Math.floor(rgb[i]/16);
		var b=rgb[i]%16;
		hex=hex+b.toString(16);

			if(a===0){
			hex=hex+'0';
			}

			while(a!=0){
			var e=a;
			a=Math.floor(e/16);
			b=e%16;
			hex=hex+b.toString(16);
			}

		hex=hex.split("").reverse().join("");
		arr.push(hex);
		}

		arr=arr.join("").toUpperCase();
		id2.value='#'+ arr;

		var y=Number(s[0])+Number(s[1])+Number(s[2]);
		body.style.color=((y/2)>225)?'black':'white';
		body.style.background= id2.value;
	}
}



body.style.color= '#263238';

function keyaddlist1(event)
	{	
		// console.log(event.which);
		if(id1.value.length>0 && event.which===13){

		answer(id1.value);}
	}

id1.addEventListener('keypress',keyaddlist1);


