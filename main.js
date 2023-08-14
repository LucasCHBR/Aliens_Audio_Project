function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o1zdH2FYQ/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}