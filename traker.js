let interviewList = [];
let rejectedHList = [];


let totalH = document.getElementById("total");
let interviewH = document.getElementById("interview")
let rejectedH = document.getElementById("rejected")

let allFiltarinBtn = document.getElementById('all-fillaring-btn')
let interviewFiltaringBtn = document.getElementById('interview-fillaring-btn')
let rejectedFiltaringBtn = document.getElementById('rejected-filtaring-btn')

let cardSection = document.getElementById("allCards");
let maniContainer = document.querySelector("section")


function calculat (){
    totalH.innerText = cardSection.children.length;
    interviewH.innerText = interviewList.length;
    rejectedH.innerText = rejectedHList.length;
}

calculat();


function trogolStyle(id){
    allFiltarinBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFiltaringBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFiltaringBtn.classList.remove('bg-blue-500', 'text-white')

    allFiltarinBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewFiltaringBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedFiltaringBtn.classList.add('bg-white', 'text-[#64748B]')

    console.log(id);

    const selected = document.getElementById(id)

    console.log(selected);

    selected.classList.remove('bg-white', 'text-[#64748B]')

    selected.classList.add('bg-blue-500', 'text-white')
}