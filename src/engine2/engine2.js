function startEngine2(){
    // background(200);
    image(backgroundImage, 0, 0)
    setRandomRotation(MapPipeGame.Map.layers);
    drawMapEngine2(MapPipeGame.Map.layers);

    fill(255,150,0)
    rect(0,0,30,20)
}