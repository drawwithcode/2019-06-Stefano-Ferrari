var textbox; //where you write
var written = "Try it yourself"; //what you have written
var fakeCanvas; //the "canvas" where you write
var parag; //the actual DOM text displayed
var dimensione; //text size slider
var familyFonts; //text fonts selector
var colorSelector; //bgcolor selector
var colorSelectorText; //textcolor selector
var colors = ['LIGHTCORAL','LIGHTSALMON','CRIMSON',
              'LIGHTPINK','TOMATO','ORANGERED','DARKORANGE',
              'GOLD','LEMONCHIFFON','KHAKI','ORCHID','MEDIUMORCHID',
              'DARKVIOLET','GREENYELLOW','LIMEGREEN',
              'SEAGREEN','FORESTGREEN','OLIVE','TEAL','AQUAMARINE',
              'STEELBLUE','DODGERBLUE','NAVY','TAN','CHOCOLATE',
              'SIENNA','WHITE','BLACK','LIGHTSLATEGRAY','SILVER'];

  function setup(){
    createCanvas(windowWidth,windowHeight);

    //Description 1
    var dscrpt1 = createP("Write your text here");
    dscrpt1.id("dscrpt1");
    document.getElementById('dscrpt1').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt1').style.color = 'white';
    dscrpt1.position(windowWidth/1.45, (windowHeight/8)-windowHeight/18);
    //The textbox
    textbox = createInput(" ");
    textbox.id("myTextbox");
    textbox.position(windowWidth/1.45, windowHeight/8);
    //The "canvas"
    fakeCanvas = createDiv("");
    fakeCanvas.id("myFakeCanvas");
    document.getElementById("myFakeCanvas").style.wordBreak = "break-all" //makes the words stay inside the div
    document.getElementById("myFakeCanvas").style.width = (windowHeight/2)-20 + 'px';
    fakeCanvas.position(((4*windowWidth-3*windowHeight)/12)+10,(0.13*windowHeight)+10);
    //text on the "canvas"
    parag = createP("");
    parag.id("myParag");
    //makes p child of div
    fakeCanvas.child(parag);
    //Description 2
    var dscrpt2 = createP("Change the text font")
    dscrpt2.id("dscrpt2");
    document.getElementById('dscrpt2').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt2').style.color = 'white';
    dscrpt2.position(windowWidth/1.45, (windowHeight/4)-windowHeight/18);
    //font family selector
    familyFonts = createSelect("");
    familyFonts.id("myFamilyFonts")
    familyFonts.option("Roboto");
    familyFonts.option("Crimson Pro");
    familyFonts.option("Rubik Mono One");
    familyFonts.option("Six Caps");
    familyFonts.position(windowWidth/1.45, windowHeight/4);
    //Description 3
    var dscrpt3 = createP("Change the text size")
    dscrpt3.id("dscrpt3");
    document.getElementById('dscrpt3').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt3').style.color = 'white';
    dscrpt3.position(windowWidth/1.45, (3*windowHeight/8)-windowHeight/18);
    //Size slider
    dimensione = createSlider(50,500,100);
    dimensione.id("myDimensione");
    dimensione.position(windowWidth/1.45, 3*windowHeight/8);
    //Description 4
    var dscrpt4 = createP("Change the background color");
    dscrpt4.id("dscrpt4");
    document.getElementById('dscrpt4').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt4').style.color = 'white';
    dscrpt4.position(windowWidth/1.45, (windowHeight/1.5)-windowHeight/18);
    //BGcolor selector
    colorSelector = createSelect("");
    colorSelector.id("myColorSelector");
    fillForm(colorSelector);
    document.getElementById("myColorSelector").value = colors[26];
    colorSelector.position(windowWidth/1.45, windowHeight/1.5);
    //Description 5
    var dscrpt5 = createP("Change the text color");
    dscrpt5.id("dscrpt5");
    document.getElementById('dscrpt5').style.fontFamily = 'AdobeClean';
    document.getElementById('dscrpt5').style.color = 'white';
    dscrpt5.position(windowWidth/1.45, (windowHeight/1.3)-windowHeight/18);
    //Text color selector
    colorSelectorText = createSelect("");
    colorSelectorText.id("myColorSelectorText");
    fillForm(colorSelectorText);
    document.getElementById("myColorSelectorText").value = colors[27];
    colorSelectorText.position(windowWidth/1.45, windowHeight/1.3);
    }

    //Updates the text on the canvas everytime a key is pressed and released
    function keyReleased(){
      written = document.getElementById("myTextbox").value;
    }

    //push the color of the array in the color selector
    function fillForm(x){
      for(var i = 0; i<colors.length; i++){
        x.option(colors[i]);
      }
    }

    function draw(){
      document.getElementById("myParag").style.fontFamily = myFamilyFonts.value; //Gets the font family from selector
      document.getElementById("myParag").innerHTML = written; //Gets what you have written
      document.getElementById("myParag").style.color = myColorSelectorText.value; //Gets the text color
      document.getElementById("myParag").style.fontSize = dimensione.value() + '%'; //Gets the font size from the slider


      background(55,55,58);
      fill(70);
      rectMode(CENTER);
      rect(windowWidth/3,windowHeight/2,windowWidth/1.6,windowHeight/1.2);
      fill(myColorSelector.value); //Set the BGcolor
      rect(windowWidth/3,windowHeight/2,windowHeight/2, windowHeight/1.35);

      fill('orange');
      textSize(50);
      var title = text("Illustretor.ai", windowWidth/30, windowHeight/15);

    }
