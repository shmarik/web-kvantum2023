let pageNumber = 1
let htmlPageNum = document.querySelector(".pageNum")
let page1 = document.querySelector(".js1")
let page2 = document.querySelector(".js2")
let page3 = document.querySelector(".js3")
let htmlNextPageBtn = document.querySelector(".nextPageBtn")
let htmlDoGood = document.querySelector(".doGood")
let body = document.querySelector(".body")
let entryBlock = document.querySelector(".entry-block")
let previousPageBtn = document.querySelector(".previousPageBtn")
let weekDays = document.querySelector(".weekDays")

function nextPage() {
    if (pageNumber == 1) {
        page1.classList.toggle("page-1")
        page2.classList.toggle("page-2")
    }
    else if (pageNumber == 2) {
        page2.classList.toggle("page-2")
        page3.classList.toggle("page-3")
        htmlNextPageBtn.classList.toggle("doGood")
        htmlDoGood.classList.toggle("doGoodActive")
        htmlDoGood.classList.toggle("doGood")
    }
    if (pageNumber<3) {
        pageNumber += 1
    }
    htmlPageNum.innerHTML = `${pageNumber}`
    console.log(pageNumber);
}

function previousPage() {
    if (pageNumber == 3) {
        page3.classList.toggle("page-3")
        page2.classList.toggle("page-2")
        htmlNextPageBtn.classList.toggle("doGood")
        htmlDoGood.classList.toggle("doGoodActive")
        htmlDoGood.classList.toggle("doGood")
    }
    else if (pageNumber == 2) {
        page2.classList.toggle("page-2")
        page1.classList.toggle("page-1")
    }
    if (pageNumber>1) {
        pageNumber -= 1
    }
    htmlPageNum.innerHTML = `${pageNumber}`
    console.log(pageNumber);
}

function whiteTheme() {
    body.classList.toggle("whiteTheme")
    entryBlock.classList.toggle("borderWhite")
    htmlDoGood.classList.toggle("colorWhite")
    htmlNextPageBtn.classList.toggle("colorWhite")
    previousPageBtn.classList.toggle("colorWhite")
    weekDays.classList.toggle("borderWhite")
}

