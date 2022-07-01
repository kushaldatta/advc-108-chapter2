function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cWZNfQPo3/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("result_count").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        animal = document.getElementById("animal");
        if (results[0].label == "Background Noise") {
            animal.src = "";
        }
        if (results[0].label == "Barking") {
            animal.src = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/580540_mjznrj.jpg";
        }
        if (results[0].label == "Meowing") {
            animal.src = "https://media.istockphoto.com/photos/gray-kitten-walks-picture-id175008876?k=20&m=175008876&s=612x612&w=0&h=FlraOA8cXOgbLgu0HAE3Tkv5R_dpuhnmdLPnKvEhgKM=";    
        }
        if (results[0].label == "Roaring") {
            animal.src = "https://media.istockphoto.com/photos/lion-sitting-looking-away-panthera-leo-10-years-old-isolated-picture-id455663609?k=20&m=455663609&s=612x612&w=0&h=1J2LDKEn05YnOIm0XmZ69VUdH39KUGWfiBF1bEouNMo=";
        }
        if (results[0].label == "Mooing") {
            animal.src = "https://img.freepik.com/free-photo/holstein-cow-standing_191971-14135.jpg?w=2000";
        } 
    }
}