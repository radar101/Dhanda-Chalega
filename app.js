const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));


let information = [];
let buttonClick;

app.get("/", function(req, res) {
  res.render("beauty", {
    // startingContent: aboutContent
  });
});

app.get("/auto", function(req, res) {
  let miyaBhai = req.body.miyaBhai;
  miyaBhai = "Free car wash on complete servicing";
  let pathanAuto = req.body.pathanAuto;
  pathanAuto = "Get free oiling on the full servicing";

  for(let i=0;i<information.length;i++)
  {
    miyaBhai = information[i].offer;
  }


  res.render("auto", {
     miyaBhai: miyaBhai, pathanAuto:pathanAuto
  });

});



app.get("/clothes", function(req, res) {
  $(req.body.button).click(function(){
    buttonClick = $("h2").text();
  })
  let myGarment = req.body.myGarment;
  myGarment = "Declared 30% off on the purchase of Min. 200 rs";
  let saifyHosiery = req.body.saifyHosiery;
  saifyHosiery = "No Current Offers";

  information = [];
  if(buttonClick==="Oh My Garment!")
  {
    for(let i=0;i<information.length;i++)
    {
      myGarment = information[i].offer;
    }
  }
  else
  {
    for(let i=0;i<information.length;i++)
    {
      saifyHosiery = information[i].offer;
    }
  }
  res.render("clothes", {
    myGarment: myGarment, saifyHosiery:saifyHosiery
  });
});

app.get("/clothes", function(req, res) {
  res.render("clothes", {
    // startingContent: aboutContent
  });
});

app.get("/electronics", function(req, res) {
  res.render("electronics", {
    // startingContent: aboutContent
  });
});

app.get("/food", function(req, res) {
  res.render("food", {
    // startingContent: aboutContent
  });
});

app.get("/footware", function(req, res) {
  res.render("footware", {
    // startingContent: aboutContent
  });
});

app.get("/grocery", function(req, res) {
  res.render("grocery", {
    // startingContent: aboutContent
  });
});

app.get("/medical", function(req, res) {
  res.render("medical", {
    // startingContent: aboutContent
  });
});

app.get("/sports", function(req, res) {
  res.render("sports", {
    // startingContent: aboutContent
  });
});

app.get("/stationary", function(req, res) {
  res.render("stationary", {
    // startingContent: aboutContent
  });
});

app.get("/shopkeeper", function(req, res) {
  res.render("shopkeeper", {
    // startingContent: aboutContent
  });
});

app.post("/shopkeeper", function(req, res) {

  const info = {
    shop : req.body.shopName,
    offer : req.body.newOffer,
    category : req.body.productCategory
  }
  information.push(info);
  res.redirect("/"+info.category);
});



















app.listen(3000,function(){
  console.log("Server started on the port 3000");
});
