

// ------------------------- INTERFACE -------------------------

class Pannel {
	constructor(id,x,y,wave,amplitude,velocity) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.wave = wave;
		this.amplitude = amplitude;
		this.velocity = velocity;
	}

	formulaGen() {
		if (this.wave === "sine") {
			return this.amplitude*Math.sin(this.velocity*Math.PI*lc);
		} else if (this.wave === "tan") {
			return this.amplitude*Math.tan(this.velocity*Math.PI*lc);
		} else if (this.wave === "cos") {
			return this.amplitude*Math.cos(this.velocity*Math.PI*lc);
		} else if (this.wave === "random") {
			return this.amplitude*Math.random(this.velocity*Math.PI*lc);
		} else if (this.wave === "none") {
			return 0;
		}
	}
}



let pannel1 = new Pannel('pannel1',400,100,'none',0.4,0.4);  
let pannel2 = new Pannel('pannel2',200,350,'sine',0,0);
let pannel3 = new Pannel('pannel3',200,150,'sine',0,0);
let pannel4 = new Pannel('pannel4',400,400,'none',0,0);
let pannel5 = new Pannel('pannel5',500,250,'none',0,0);
let pannel6 = new Pannel('pannel6',400,100,'none',0,0);

pannels = [pannel1,pannel2,pannel3,pannel4,pannel5,pannel6];


function makePannel(obj) {
	let pannelBox = document.getElementById('pannelBox');

	//~~~~~~~~~~~ SLIDERS ~~~~~~~~~~~~

	//create slide-container
	let div0 = document.createElement('div');
	let div1 = document.createElement('div'); //the slide container 
	div1.classList.add("slidecontainer");

	//create sliders
	let slider1 = document.createElement('input');
	let slider2 = document.createElement('input');

	//create slider 1 attributes
	let slider1AttType = document.createAttribute("type");
	let slider1AttMin = document.createAttribute("min");
	let slider1AttMax = document.createAttribute("max");
	let slider1AttValue = document.createAttribute("value");
	let slider1AttClass = document.createAttribute("class");
	let slider1AttId = document.createAttribute("id");

	//create slider 2 attributes
	let slider2AttType = document.createAttribute("type");
	let slider2AttMin = document.createAttribute("min");
	let slider2AttMax = document.createAttribute("max");
	let slider2AttValue = document.createAttribute("value");
	let slider2AttClass = document.createAttribute("class");
	let slider2AttId = document.createAttribute("id");

	//set attribute properties
	slider1AttType.value = "range";
	slider2AttType.value = "range";

	slider1AttMin.value = 0;
	slider2AttMin.value = 0;

	slider1AttMax.value = 880;
	slider2AttMax.value = 500;

	slider1AttValue.value = obj.x;
	slider2AttValue.value = obj.y;

	slider1AttClass.value = 'slider';
	slider2AttClass.value = 'slider';

	slider1AttId.value = `${obj.id}x`;
	slider2AttId.value = `${obj.id}y`;

	// set Attribute Nodes
	slider1.setAttributeNode(slider1AttType);
	slider1.setAttributeNode(slider1AttMin);
	slider1.setAttributeNode(slider1AttMax); 
	slider1.setAttributeNode(slider1AttValue);
	slider1.setAttributeNode(slider1AttClass);
	slider1.setAttributeNode(slider1AttId);
	


	slider2.setAttributeNode(slider2AttType);
	slider2.setAttributeNode(slider2AttMin);
	slider2.setAttributeNode(slider2AttMax); 
	slider2.setAttributeNode(slider2AttValue);
	slider2.setAttributeNode(slider2AttClass);
	slider2.setAttributeNode(slider2AttId);

	pannelBox.appendChild(div0);
	div0.appendChild(div1);
	div1.appendChild(slider1); //everything will appended to div1
	div1.appendChild(slider2);

	// event listeners
	slider1.oninput = function() {
	obj.x = this.value;  
	
	};

	slider2.oninput = function() {
	obj.y = this.value;  
	
	};

	//  ~~~~~~~~~  DROPDOWN MENU ~~~~~~~~~~~

	//create menu
	let menuDiv = document.createElement("div");
	menuDiv.classList.add("select-style");

	let menu = document.createElement('select');

	menu.id = `${obj.id}wave`;
	menu.value = obj.wave;

	div1.appendChild(menuDiv);
	menuDiv.appendChild(menu);

	//create options
	function capitalizeFirstLetter(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let options = ['none','sine', 'tan', 'cos', 'random'];
	for (i = 0; i < options.length; i++) {
		let option = document.createElement("option");
		option.appendChild(document.createTextNode(capitalizeFirstLetter(options[i])));
		option.value = options[i];
		menu.appendChild(option);
	}
	menu.value = obj.wave;

	//event listener 

	menu.addEventListener('change', function() {
		obj.wave = this.value;
	}); 


	//	~~~~~~~~ KNOBS ~~~~~~~~

	//knob1 - amplitude
	let knob1p = document.createElement('p');
	knob1p.classList.add('knob');
	knob1p.id = `${obj.id}amplitude`;
	div1.appendChild(knob1p);

	let knob1 = document.createElement('x-knob');

	let knob1MinAtt = document.createAttribute("min");
	knob1MinAtt.value = "-0.4";
	knob1.setAttributeNode(knob1MinAtt);

	let knob1MaxAtt = document.createAttribute("max");
	knob1MaxAtt.value = "0.4";
	knob1.setAttributeNode(knob1MaxAtt);

	let knob1DivisionsAtt = document.createAttribute("divisions");
	knob1DivisionsAtt.value = "20";
	knob1.setAttributeNode(knob1DivisionsAtt);

	knob1.value = `{obj.amplitude}`;

	knob1p.appendChild(knob1);


	//knob2 - velocity
	let knob2p = document.createElement('p');
	knob2p.classList.add('knob');
	knob2p.id = `${obj.id}velocity`;
	div1.appendChild(knob2p);

	let knob2 = document.createElement('x-knob');

	let knob2MinAtt = document.createAttribute("min");
	knob2MinAtt.value = "-0.4";
	knob2.setAttributeNode(knob2MinAtt);

	let knob2MaxAtt = document.createAttribute("max");
	knob2MaxAtt.value = "0.4";
	knob2.setAttributeNode(knob2MaxAtt);

	let knob2DivisionsAtt = document.createAttribute("divisions");
	knob2DivisionsAtt.value = "20";
	knob2.setAttributeNode(knob2DivisionsAtt);

	knob2.value = `{obj.amplitude}`;

	knob2p.appendChild(knob2);

	// event listeners
	knob1.addEventListener('input', function(ev) {
		obj.amplitude = (ev.target.value + .4) * 250;
		  // the knob value needs to be adjusted because it 
		  // is too small.
	});												  

	knob2.addEventListener('input', function(ev) {
		obj.velocity = (ev.target.value + .4)* .1;
	});

}



makePannel(pannel1);
makePannel(pannel2);
makePannel(pannel3);
makePannel(pannel4);
makePannel(pannel5);
makePannel(pannel6);


let pannelCount = 6;
function addPannel() {
	pannelCount += 1;
	eval(`pannel${pannelCount} = new Pannel('pannel${pannelCount}',200,200,'sine',0.2,0.2);`);
	eval(`makePannel(pannel${pannelCount})`);
	eval(`pannels.push(pannel${pannelCount})`)
	
};


// --------------------- ANIMATION SECTION -------------------

ctx = document.getElementById('canvas').getContext('2d');

lc = 0;  //loop count

function f1() {	
	for (i=0;i<30;i++) {

		for (i2=0;i2<pannels.length-1;i2++) {
			ctx.beginPath();
			ctx.moveTo(i*5 + Number(pannels[i2].x) + pannels[i2].formulaGen(), Number(pannels[i2].y) + pannels[i2].formulaGen());
			ctx.lineTo(i*5 + Number(pannels[i2+1].x) + pannels[i2+1].formulaGen(), Number(pannels[i2+1].y) + pannels[i2+1].formulaGen());
			ctx.stroke();
			ctx.closePath();
		}
	}
}
	
function animate() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	f1();
	lc++;
	setTimeout(animate,20);

	
}

animate();



