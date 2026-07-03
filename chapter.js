const chapters = {

bricks:{
title:"Bricks",
subject:"Building Materials",
summary:"Study complete Bricks Notes, PDF, MCQ and Practice Test.",
topics:[
"Classification of Bricks",
"Manufacturing of Bricks",
"Properties of Good Bricks",
"Tests on Bricks",
"Uses of Bricks"
]
},

stones:{
title:"Stones",
subject:"Building Materials",
summary:"Complete Stones Notes with MCQ and PDF.",
topics:[
"Classification",
"Properties",
"Uses",
"Dressing of Stones",
"Stone Tests"
]
},

cement:{
title:"Cement",
subject:"Building Materials",
summary:"Complete Cement Notes.",
topics:[
"Manufacturing",
"Types of Cement",
"Properties",
"Field Test",
"Uses"
]
},

lime:{
title:"Lime",
subject:"Building Materials",
summary:"Complete Lime Notes.",
topics:[
"Manufacturing",
"Classification",
"Properties",
"Uses",
"Tests"
]
},

timber:{
title:"Timber",
subject:"Building Materials",
summary:"Complete Timber Notes.",
topics:[
"Seasoning",
"Defects",
"Properties",
"Uses",
"Preservation"
]
},

steel:{
title:"Steel",
subject:"Building Materials",
summary:"Complete Steel Notes.",
topics:[
"Types",
"Properties",
"Uses",
"Steel Sections",
"Advantages"
]
}

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if(chapters[id]){

document.getElementById("chapterTitle").innerHTML=chapters[id].title;

document.getElementById("subjectName").innerHTML=chapters[id].subject;

document.getElementById("chapterSummary").innerHTML=chapters[id].summary;

const topicList=document.getElementById("topics");

topicList.innerHTML="";

chapters[id].topics.forEach(topic=>{

topicList.innerHTML+=`<li>${topic}</li>`;

});

}else{

document.getElementById("chapterTitle").innerHTML="Chapter Not Found";

}
