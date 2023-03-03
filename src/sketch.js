

function preload(){
    //load JSON and Img file
    loadAsset(); 
}

function setup(){
    createCanvas(1000, 562);
    textSize(32);
    text('word', 10, 30);
    // console.log(worlds1.tour.layers)

    createPNJ(5, 50, 1250, 500, pnjTileSet1, 15, 1 )
    createPNJ(8, 1000, 480 , 350, pnjTileSet1, 7, 2 )
}

function draw(){

    background(200);
    // condition moteur de jeux
    noSmooth()
    if (assetsLoaded) {
        switch(engine){
            case "engine1":
                startEngine1();
                break;
            case "engine2":
                startEngine2();
                break;
            default:
                throw new Error("engine error")
        }
    }
    
    pnjManager()
}

function keyPressed() {
    if (keyCode === 69) {
        if (engine === "engine1") {
            engine = "engine2"  
        }else{
            engine = "engine1"
        }
    }else if (keyCode === 90) {
        console.log("cornerTopLeft X : ", xStartWorld1 + xPlayer, xPlayer, " Y : ", yStartWorld2 + yPlayer)
    }
    
  }