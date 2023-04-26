//얘네는 인풋에서 값가져오고 띄우는 과정에 필요한 요소들 꺼내온거
const btn1 = document.querySelector(".showBtn");
const hideElements = document.querySelector("#addText");
const EF = document.querySelector("#E-first");
const ES = document.querySelector("#E-second");
const EFinput = document.querySelector("#EFinput");
const ESinput = document.querySelector("#ESinput");
//새창 뜨게 하려고 만든거
const newPage = document.querySelector("#f-btn-div1");
const hFPage = document.querySelector("#fightingPage");
// 공유하는거...
const link = document.querySelector("#f-btn-div2");
const show = document.querySelector("#f-btn-div3");

howIStudy = () =>{
    const EFtext = EFinput.value;
    const EStext = 10000/(Number(ESinput.value));
    hideElements.classList.remove("hide");
    EF.innerHTML = EFtext;
    ES.innerHTML = EStext;

    window.scrollTo(0, document.body.scrollHeight);
}

showfightingPage = () => {
    hFPage.classList.remove("hide");
}
clip = () =>{
    alert("s")
}

btn1.addEventListener("click", howIStudy);
newPage.addEventListener("click", showfightingPage);
link.addEventListener("click", () => {
    const linkToCopy = "https://euntaek4187.github.io/likelion-submit/10000hour/";
    const textArea = document.createElement("textarea");
    textArea.value = linkToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  
    alert("링크가 클립보드에 복사되었습니다!");
  });
show.addEventListener("click", fightingPage)