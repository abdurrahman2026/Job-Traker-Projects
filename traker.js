let interviewList = [];
let rejectedList = [];

let totalH = document.getElementById("total");
let interviewH = document.getElementById("interview");
let rejectedH = document.getElementById("rejected");

let allBtn = document.getElementById("all-fillaring-btn");
let interviewBtn = document.getElementById("interview-fillaring-btn");
let rejectedBtn = document.getElementById("rejected-filtaring-btn");

let cardSection = document.getElementById("allCards");
let filterdSection = document.getElementById("filterd-section");



// Funcktion 
  function calculate() {

    totalH.innerText = cardSection.children.length;

    interviewH.innerText = interviewList.length;
    rejectedH.innerText = rejectedList.length;
}
calculate();



// Button Section 
function trogolStyle(id) {

    let buttons = [allBtn, interviewBtn, rejectedBtn];

    buttons.forEach(btn => {
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-white", "text-[#64748B]");
    });

    let selected = document.getElementById(id);
    selected.classList.remove("bg-white", "text-[#64748B]");
    selected.classList.add("bg-blue-500", "text-white");



    if(id === "all-fillaring-btn"){
        filterdSection.innerHTML = "";
        cardSection.style.display = "block";
    }


    else if(id === "interview-fillaring-btn"){
        cardSection.style.display = "none";
        renderInterview();

    }else if(id === "rejected-filtaring-btn"){
        cardSection.style.display = "none";
        renderRejected();
    }
}



cardSection.addEventListener("click", function(event){

    let parentCard = event.target.closest(".bg-white");
    if(!parentCard)
        
        return;
        

    let mobile = parentCard.querySelector(".mobile")?.innerText;
    let react = parentCard.querySelector(".react")?.innerText;
    let description = parentCard.querySelector(".discription")?.innerText;
    let appliedBtn = parentCard.querySelector(".applied");

    let cardInfo ={
        mobile,
        react,
        description
    };


    // Interview SEction
    if(event.target.innerText === "INTERVIEW"){

        
        rejectedList = rejectedList.filter(item => item.mobile !== mobile);
        let exist = interviewList.find(item => item.mobile === mobile);

        if(!exist){
            interviewList.push(cardInfo);
        }

        appliedBtn.innerText = "INTERVIEW";
        appliedBtn.classList.remove("bg-red-100","text-red-600");
        appliedBtn.classList.add("bg-green-100","text-green-600");

        calculate();
    }


    // Rejected ---->>
    if(event.target.innerText === "REJECTED"){
        interviewList = interviewList.filter(item => item.mobile !== mobile);

        let exist = rejectedList.find(item => item.mobile === mobile);



        if(!exist){
            rejectedList.push(cardInfo);
        }

        appliedBtn.innerText = "REJECTED";
        appliedBtn.classList.remove("bg-green-100","text-green-600");
        appliedBtn.classList.add("bg-red-100","text-red-600");

        calculate();
    }

  });



// Render Section--
function renderInterview(){

    filterdSection.innerHTML = "";

    interviewList.forEach(item => {

        let div = document.createElement("div");
        div.className = "bg-white shadow rounded-md mt-4 p-6";

        div.innerHTML = `
            <div>
                <h3 class="mobile text-[18px] font-semibold text-[#002C5C]">${item.mobile}</h3>
                <p class="react text-[14px] text-[#64748B]">${item.react}</p>
                <p class="discription text-[14px] mt-3">${item.description}</p>

                <div class="flex gap-2 mt-4">
                    <button class="interview-btn border border-green-500 text-green-600 px-3 py-1 rounded">INTERVIEW</button>
                    <button class="rejected-btn border border-red-500 text-red-600 px-3 py-1 rounded">REJECTED</button>
                </div>
            </div>
        `;

        filterdSection.appendChild(div);
    });
}



// Render Section - 2
filterdSection.addEventListener("click", function(event){

    let parentCard = event.target.closest(".bg-white");
    if(!parentCard) return;

    let mobile = parentCard.querySelector(".mobile").innerText;
    let react = parentCard.querySelector(".react").innerText;
    let description = parentCard.querySelector(".discription").innerText;

    let cardInfo = { mobile, react, description };



    if(event.target.classList.contains("interview-btn")){

        rejectedList = rejectedList.filter(item => item.mobile !== mobile);

        if(!interviewList.find(item => item.mobile === mobile)){
            interviewList.push(cardInfo);
        }

        calculate();
        renderInterview();
    }



    if(event.target.classList.contains("rejected-btn")){

        interviewList = interviewList.filter(item => item.mobile !== mobile);

        if(!rejectedList.find(item => item.mobile === mobile)){
            rejectedList.push(cardInfo);
        }

        calculate();
        renderRejected();
    }

});


