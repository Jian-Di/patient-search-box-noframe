/**
 * 可以透過點擊 menu item 來將文字替換成當前的 Category
 */
 const selectCateEl = document.getElementById("selectCate");
 const cateListEl = document.getElementById("cateList");
 const cateOptionsEl = document.getElementsByClassName("cateOptions");
 const selectCateTextEl = document.getElementById("selectCateText");
 const searchBarInputEl = document.getElementById("searchBarInput")

selectCateEl.onclick = () => {
    cateListEl.classList.toggle("open");
}

for ( let optionEl of cateOptionsEl) {
    optionEl.onclick = () => {
        selectCateTextEl.innerHTML = optionEl.innerHTML;
        searchBarInputEl.placeholder = `Search in ${selectCateTextEl.innerHTML}`;
    }  
}

/**
 * 讓 Search Box 會根據打在搜尋欄的字，來篩選下方建議清單的內容
 * 
 * @searchTerm searchTerm 打在搜尋欄的字
 * @searchList searchList 要篩選的清單，要是 List of DOM element
*/
const searchListEl = document.getElementById("searchList");

const searchOptionsEl = document.getElementsByClassName("searchOptions");
const currentSearchList = searchOptionsEl;

searchBarInputEl.addEventListener("keyup", (e) => {
    e.target.value? searchListEl.classList.add("open") : searchListEl.classList.remove("open"); // Input 有文字時才顯示建議清單
    filterList(e.target.value, currentSearchList);
});

const filterList = (searchTerm, searchList) => {
    searchTerm = searchTerm.toLowerCase();
    for (let listItem of searchList) {
        let listItemText = listItem.innerText.toLowerCase();
        if (listItemText.indexOf(searchTerm) !== -1) {
            listItem.style.display = "block";
        } else {
            listItem.style.display = "none";
        }
    }
};

/**
 * 點擊建議清單的 list item 之後，會將搜尋欄的 input value 替換成該 item
 */
for ( let listItem of currentSearchList) {
    listItem.onclick = () => {
        searchBarInputEl.value = listItem.innerHTML;
        searchListEl.classList.remove("open");
    }  
}

