let crountTab = 'all';

const tabActiv = ["bg-blue-500", "text-white"];
const tabInactiv = ["bg-white", "text-[#64748B]"];


const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectContainer = document.getElementById("reject-container")
const emptyState = document.getElementById("empty-state");



function switchTab(tab){
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    crountTab = tab;


    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        
        if(t === tab){
            tabName.classList.remove(...tabInactiv);
            tabName.classList.add(...tabActiv)
        }
        else{
            tabName.classList.add(...tabInactiv);
            tabName.classList.remove(...tabActiv)
        }
    }

    const pages = [allContainer, interviewContainer, rejectContainer];

    for(const section of pages){
        section.classList.add("hidden")
    }

    emptyState.classList.add("hidden")

    if (tab === "all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    else if (tab === "interview"){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    else{
        rejectContainer.classList.remove("hidden");
        if(rejectContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    updateStat();
}

// .........
const totalStat = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");
const statAvailable = document.getElementById("available");

totalStat.innerText = allContainer.children.length

switchTab(crountTab);


document.getElementById("job-container").addEventListener("click", function(event){
    const clickEliment = event.target;
    const card = clickEliment.closest(".card");
    const parant = card.parentNode;
    const status = card.querySelector(".status");

    if(clickEliment.classList.contains("interview")){
        status.innerText = "Interviewed"
        interviewContainer.appendChild(card)
        updateStat()
    }
    if(clickEliment.classList.contains("rejected")){
        status.innerText = "Rejected"
        rejectContainer.appendChild(card)
        updateStat()
    }
    if(clickEliment.classList.contains("delete")){
        parant.removeChild(card)
        updateStat()
    }
})


function updateStat (){
    // totalStat.innerText = allContainer.children.length;
    // statInterview.innerText = interviewContainer.children.length;
    // statRejected.innerText = rejectContainer.children.length;

    const counts = {
        all : allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length,
    }

    totalStat.innerText = counts["all"];
    statInterview.innerText = counts["interview"];
    statRejected.innerText = counts["rejected"];

    statAvailable.innerText = counts[crountTab]

    if(counts[crountTab] < 1){
        emptyState.classList.remove("hidden")
    }else{
        emptyState.classList.add("hidden")
    }
}

updateStat();