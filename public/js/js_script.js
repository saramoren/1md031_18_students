function theOrder(){
    var fn = document.getElementById("name");
    var em = document.getElementById("email");
    /*var ga = document.getElementById("gata");
    var gn = document.getElementById("nummer");*/
    var betList = document.getElementById("betalning");
    var bet = betList.options[betList.selectedIndex].text;

    var extraList = document.getElementsByName("tillbehör");
    for (i=0; i<extraList.length; i++){
      if (extraList[i].checked)
        var extra = extraList[i];
    }

    var theOrderList = [];
    theOrderList.push(fn.value);
    theOrderList.push(em.value);
    /*theOrderList.push(ga.value);
    theOrderList.push(gn.value);*/
    theOrderList.push(bet);
    theOrderList.push(extra.value);

    return theOrderList;
}

function yourBurger(){
  var theBurgers = document.getElementsByName("select");
  for (burger in theBurgers){
    if (theBurgers[burger].checked)
    var burgare = theBurgers[burger];
  }
  var burgarList = [];
  burgarList.push(burgare.value);
  return burgarList;
}

/*var orderButton = document.getElementById("orders");
orderButton.addEventListener("click",myOrder);*/

function myOrder(){
  console.log('Button Clicked')
  console.log(theOrder());

  var information = theOrder();
  document.getElementById("contact").innerHTML = "Order information: ";
  for (info in information){
    document.getElementById("contact").innerHTML += information[info] + ", ";
  }
  document.getElementById("contact").innerHTML += yourBurger();
}

/*function MenuItem(bg, kC, gl, la){
  this.burgerName = bg;
  this.kCal = kC;
  this.gluten = gl;
  this.lactose = la;
  this.name = function(){
    return this.burgerName + ' ' + this.kCal;
  };
}
var item = new MenuItem("superGod",3,true,true);
var item2 = new MenuItem("himlaGod",2,true,true);
var item3 = new MenuItem("väldigtGod",1,false,false);
console.log( item.name() )
console.log( item2.name() )
console.log( item3.name() )*/

/* JS: document.getElementById("myID").innerHTML = "JavaScript";*/

/* 4.11 JavaScript!

HTML:
<div id="burgare">
  <h2>
    Välj en börjare
  </h2>
  <ol id="myID">
  </ol>
</div>

JS:
  function MenuItem(bg, kC, gl, la){
  this.burgerName = bg;
  this.kCal = kC;
  this.gluten = gl;
  this.lactose = la;
  this.name = function(){
    return this.burgerName + ' ' + this.kCal;
  };
}

var item1 = new MenuItem("superGod",3,true,true);
var item2 = new MenuItem("himlaGod",2,true,true);
var item3 = new MenuItem("väldigtGod",1,false,false);
var item4 = new MenuItem("bigMac",10,false,true);
var item5 = new MenuItem("mcCheese",5,true,true);

var theBurgers = [item1, item2, item3, item4, item5];

var i = 0;
var myElement = document.getElementById("myID");

for (i; i < theBurgers.length; i++) {
    var listItem = document.createElement("li");

    if (theBurgers[i].gluten || theBurgers[i].lactose){
    	var listValue = document.createTextNode(theBurgers[i].burgerName + ", innehåller gluten och/eller laktos");
    }

    else if (!theBurgers[i].gluten){
    	var listValue = document.createTextNode(theBurgers[i].burgerName);
		}

    listItem.appendChild(listValue);
    myElement.appendChild(listItem);
} */
