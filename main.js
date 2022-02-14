function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4T-V1hm5m/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
 
function gotResults(){
    console.log("gotResults");
}
