// set up text array like ["Hello", "world"]
let textDialogue = [];
let endAction = "";


//variable for cut the text
let indexInDialogue = 0;
let indexInText = 0;
let dialogueToDisplay = "";

let isCuttingWord = false;
let isFirstInteraction = true;


function startEngineDialogue(){
    cutText()
    
    //draw text
    textAlign(LEFT);
    fill(255,255,255)
    rect(50,25,800,50) 
    fill(0,0,0)
    text(dialogueToDisplay, 50,50)
}

function cutText(){
    
    //split text
    if (indexInText < textDialogue[indexInDialogue].length) {
        isCuttingWord = true
        dialogueToDisplay = textDialogue[indexInDialogue].split("", Math.round(indexInText)).join('')
        indexInText += 0.3;
        
        
        // end of text spliting => prepare to the next text
        if (indexInText >= textDialogue[indexInDialogue].length){
            isCuttingWord = false
            
            console.log("next")
        }
    }
    
}

function interact(){

    //* if the gameur interact during the text is already cutting
    if (isCuttingWord) {
        
        //* set fully text
        indexInText = textDialogue[indexInDialogue].length - 1
        
    }else if(!isFirstInteraction && !isCuttingWord && indexInDialogue < textDialogue.length - 1){

        //* si ce n'est pas le dernier message a dire alors vas au message suivant
        indexInDialogue += 1
        indexInText = 0
        
    }else if(isFirstInteraction && !isCuttingWord){
        
        //*if is first interact do nothing => draw first message
        isFirstInteraction = false;

    }else{

        //* else do the request action and reset variable
        isFirstInteraction = true
        indexInDialogue = 0
        indexInText = 0
        canInteract = false

        setUpBackgroundCanvas()
        engine = endAction
        
        
    }
  
    

}