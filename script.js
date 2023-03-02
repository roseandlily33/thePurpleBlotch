let reactionCont = document.getElementById('reactionCont');
let memoryCont = document.getElementById('memoryCont');
let verbalCont = document.getElementById('verbalCont');
let visualCont = document.getElementById('visualCont');

function getJSON(){
fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    //console.log(data);
    createElements(data);
   //console.log(data[0].score);
})}

function createElements(data){
    //Reactiong Cont:
let reactionImg = document.createElement('img');
reactionImg.src = data[0].icon ;
let reaction = document.createElement('h3');
reaction.textContent = data[0].category;
let reactionNum = document.createElement('h4');
reactionNum.textContent = data[0].score;
let reaction100 = document.createElement('h5');
reaction100.textContent = '/100';
reactionCont.append(reactionImg,reaction, reactionNum, reaction100);
// Memory Cont:
let memoryImg = document.createElement('img');
memoryImg.src = data[1].icon;
let memory = document.createElement('h3');
memory.textContent = data[1].category;
let memoryNum = document.createElement('h4');
memoryNum.textContent = data[1].score;
let memory100 = document.createElement('h5');
memory100.textContent = '/100';
memoryCont.append(memoryImg, memory, memoryNum, memory100);

//Verbal Cont:
let verbalImg = document.createElement('img');
verbalImg.src = data[2].icon;
let verbal = document.createElement('h3');
verbal.textContent = data[2].category;
let verbalNum = document.createElement('h4');
verbalNum.textContent = data[2].score;
let verbal100 = document.createElement('h5');
verbal100.textContent = '/100';
verbalCont.append(verbalImg, verbal, verbalNum, verbal100);

//Visual Cont:
let visualImg = document.createElement('img');
visualImg.src = data[3].icon;
let visual = document.createElement('h3');
visual.textContent = data[3].category;
let visualNum = document.createElement('h4');
visualNum.textContent = data[3].score;
let visual100 = document.createElement('h5');
visual100.textContent = '/100';
visualCont.append(visualImg, visual, visualNum, visual100);
}
getJSON();
