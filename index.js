const selectEl = document.getElementById("select");
const listEl = document.getElementById("list");
const optionsEl = document.getElementsByClassName("options");
const selectTextEl = document.getElementById("selectText");
const searchBarInputEl = document.getElementById("searchBarInput")


/**
 * 可以透過點擊 menu item 來替換成當前的 Category
 */

selectEl.onclick = () => {
    listEl.classList.toggle("open"); // 這好牛B...
}

for ( let optionEl of optionsEl) {
    optionEl.onclick = () => {
        selectTextEl.innerHTML = optionEl.innerHTML;
        searchBarInputEl.placeholder = `Search in ${selectTextEl.innerHTML}`;
    }  
}

/**
 * 讓 Search input 可以有建議的搜尋項目
 */

searchBarInputEl.addEventListener("keyup", (e) => {
    filterList(e.target.value);
});
