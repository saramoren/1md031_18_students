/*function MenuItem(bg, ih, imgURL, la, gl){
  this.burgerName = bg;
  this.content = ih;
  this.bild = imgURL;
  this.lactose = la;
  this.gluten = gl;
}*/

/*var item1 = new MenuItem("superGod","Nötkött, Cheddarost, Isbergssallad, Ketchup, Dressing","https://www.max.se/contentassets/7283b5a0bf324ba99d7fa7e0caf5ae7f/product_max-original.png?width=1024&sharpen=5&sigma=1,4&threshold=0",true,true);
var item2 = new MenuItem("himlaGod","Halloumi, Picklad rödlök, Tomat, Ummamidressing, Briochebröd","https://www.max.se/contentassets/bd97342be78047eb8f8026452d545538/product_halloumiburgare.png?width=1024&sharpen=5&sigma=1,4&threshold=0",true,true);
var item3 = new MenuItem("väldigtGod", "Vegansk burgare, Vegansk ost, Isbergssallad, Ketchup, Dressing","https://www.max.se/contentassets/f5f13dcf34c24873878e030df544b066/product_delifresh-signature-plant-beef.png?width=1024&sharpen=5&sigma=1,4&threshold=0",false,false);*/
'use strict';
var socket = io();

var v = new Vue({
  el: '#themain',
  data: {
    theBurgers: food,
    glu:"Innehåller Gluten",
    lac: "Innehåller Laktos",
    noAllergy:"Allergivänlig",
    orders: {},
    location:{details:{x:0, y:0}},
  },
  methods:{
    /*markDone: function(){
      myOrder();
    },*/
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: Math.floor(Math.random()*(100-1+1)+1),
                                details: this.location.details,
                                orderItems: yourBurger(),
                                personInfo: theOrder()
                              });
      myOrder();
    },
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.location = {details: {x: event.clientX - 10 - offset.x,
                 y: event.clientY - 10 - offset.y}};
    }
  }
})

/* VUE : var vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'VUE' + ' ' + new Date()
  }
})*/

/* 4.11 JavaScript!

HTML:
<div id="burgare">
  <h2>
    Välj en börjare
  </h2></div>

  <div id="myID">
  <li v-for="burger in theBurgers" v-if="burger.gluten || burger.lactose">
      {{burger.burgerName}} {{allergy}}
    <li v-else>
      {{burger.burgerName}}</li>
  </li>
  </div>

VUE:
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

var v = new Vue({
  el: '#myID',
  data: {
    theBurgers: [item1, item2, item3, item4, item5],
    allergy:", innehåller antingen gluten eller laktos"
  }
})

*/
