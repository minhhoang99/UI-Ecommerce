// handling menu product 

var menuList = document.querySelectorAll(".arrival-list>li");

function activeMenu(index) {
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].style.color = "black";
        menuList[i].style.borderBottom = "none";

    }
    menuList[index - 1].style.color = "#2f7dfc";
    menuList[index - 1].style.borderBottom = "3px solid #2f7dfc";
}

// handling popular product

var productInfo = document.querySelectorAll(".product-info");

function showProductInfo(index) {
    for (let i = 0; i < productInfo.length; i++) {
        productInfo[i].style.display = "none";
    }
    productInfo[index - 1].style.display = "block";
}

function hideProductInfo(index) {

    productInfo[index - 1].style.display = "none";
}