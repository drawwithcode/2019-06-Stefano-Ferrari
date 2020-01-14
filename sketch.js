var textbox;
var written = "Try it yourself";
var fakeCanvas;
var parag;
var dimensione;
var familyFonts;
var colorSelector;
var colorSelectorText;
var colors = ['LIGHTCORAL','LIGHTSALMON','CRIMSON',
              'LIGHTPINK','TOMATO','ORANGERED','DARKORANGE',
              'GOLD','LEMONCHIFFON','KHAKI','ORCHID','MEDIUMORCHID',
              'DARKVIOLET','GREENYELLOW','LIMEGREEN',
              'SEAGREEN','FORESTGREEN','OLIVE','TEAL','AQUAMARINE',
              'STEELBLUE','DODGERBLUE','NAVY','TAN','CHOCOLATE',
              'SIENNA','WHITE','BLACK','LIGHTSLATEGRAY','SILVER'];

  function setup(){
    createCanvas(windowWidth,windowHeight);


    var dscrpt1 = createP("Write your text here");
    dscrpt1.id("dscrpt1");
    document.getElementById('dscrpt1').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt1').style.color = 'white';
    dscrpt1.position(windowWidth/1.45, (windowHeight/8)-windowHeight/18);
    textbox = createInput(" ");
    textbox.id("myTextbox");
    textbox.position(windowWidth/1.45, windowHeight/8);

    fakeCanvas = createDiv("");
    fakeCanvas.id("myFakeCanvas");
    document.getElementById("myFakeCanvas").style.wordBreak = "break-all"
    document.getElementById("myFakeCanvas").style.width = (windowHeight/2)-20 + 'px';
    fakeCanvas.position(((4*windowWidth-3*windowHeight)/12)+10,(0.13*windowHeight)+10);

    parag = createP("");
    parag.id("myParag");

    fakeCanvas.child(parag);

    var dscrpt2 = createP("Change the text font")
    dscrpt2.id("dscrpt2");
    document.getElementById('dscrpt2').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt2').style.color = 'white';
    dscrpt2.position(windowWidth/1.45, (windowHeight/4)-windowHeight/18);

    familyFonts = createSelect("");
    familyFonts.id("myFamilyFonts")
    familyFonts.option("Roboto");
    familyFonts.option("Crimson Pro");
    familyFonts.option("Rubik Mono One");
    familyFonts.option("Six Caps");
    familyFonts.position(windowWidth/1.45, windowHeight/4);

    var dscrpt3 = createP("Change the text size")
    dscrpt3.id("dscrpt3");
    document.getElementById('dscrpt3').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt3').style.color = 'white';
    dscrpt3.position(windowWidth/1.45, (3*windowHeight/8)-windowHeight/18);
    dimensione = createSlider(50,500,100);
    dimensione.id("myDimensione");
    dimensione.position(windowWidth/1.45, 3*windowHeight/8);


    var dscrpt4 = createP("Change the background color");
    dscrpt4.id("dscrpt4");
    document.getElementById('dscrpt4').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt4').style.color = 'white';
    dscrpt4.position(windowWidth/1.45, (windowHeight/1.5)-windowHeight/18);

    colorSelector = createSelect("");
    colorSelector.id("myColorSelector");
    fillForm(colorSelector);
    document.getElementById("myColorSelector").value = colors[26];
    colorSelector.position(windowWidth/1.45, windowHeight/1.5);


    var dscrpt5 = createP("Change the text color");
    dscrpt5.id("dscrpt5");
    document.getElementById('dscrpt5').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt5').style.color = 'white';
    dscrpt5.position(windowWidth/1.45, (windowHeight/1.3)-windowHeight/18);

    colorSelectorText = createSelect("");
    colorSelectorText.id("myColorSelectorText");
    fillForm(colorSelectorText);
    document.getElementById("myColorSelectorText").value = colors[27];
    colorSelectorText.position(windowWidth/1.45, windowHeight/1.3);
    }


    function keyReleased(){
      written = document.getElementById("myTextbox").value;
    }

    function fillForm(x){
      for(var i = 0; i<colors.length; i++){
        x.option(colors[i]);
      }
    }

    function draw(){
      document.getElementById("myParag").style.fontFamily = myFamilyFonts.value;
      document.getElementById("myParag").innerHTML = written;
      document.getElementById("myParag").style.color = myColorSelectorText.value;
      document.getElementById("myParag").style.fontSize = dimensione.value() + '%';


      background(55,55,58);
      fill(70);
      rectMode(CENTER);
      rect(windowWidth/3,windowHeight/2,windowWidth/1.6,windowHeight/1.2);
      fill(myColorSelector.value);
      rect(windowWidth/3,windowHeight/2,windowHeight/2, windowHeight/1.35);

      fill('orange');
      textSize(50);
      var title = text("Illustretor.ai", windowWidth/30, windowHeight/15);

    }
