var productName = document.getElementById("product-Name");
var productPrice = document.getElementById("product-Price");
var productCategory = document.getElementById("product-Category");
var productDesc = document.getElementById("product-Desc");

var allProducts = [];
var mainindex;
var btn = document.getElementById("btn");

// localStorage Condition
if (localStorage.getItem("allProducts") != null) {
    allProducts = JSON.parse(localStorage.getItem("allProducts"));
    displayAllProducts()
}
else {
    addNewProduct()
}

function addNewProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        Discription: productDesc.value,
    }

 // if (validations() == true) {
    if (true == true) {
        // allProducts.push(product);
        if (btn.innerHTML == "Update") {
            btn.innerHTML = "Add product";
            allProducts.splice(mainindex, 1, product);
            localStorage.setItem("allProducts", JSON.stringify(allProducts))
        }
        else {
            allProducts.push(product);
            localStorage.setItem("allProducts", JSON.stringify(allProducts));
        }
        // displaying Products
        displayAllProducts()

        // resets inputs
        resetItems()
    }
    else {
        alert("wrong")
    }
    // else if (productNameIsValidated() != true) (
    //     window.alert('check product name')
    // )
    // else if (productPriceIsValidated() != true) (
    //     window.alert('check product price')
    // )
    // else if (productCategoryIsValidated() != true) (
    //     window.alert('check product Category')
    // )
    // else if (productDescIsValidated() != true) (
    //     window.alert('check product desc')
    // )
}

function displayAllProducts() {
    var cartona = "";
    for (var i = 0; i < allProducts.length; i++) {
        cartona = cartona + `
        <tr>
            <td>${i + 1}</td>
            <td>`+ allProducts[i].name + `</td>
            <td>`+ allProducts[i].price + `</td>
            <td>${allProducts[i].category}</td>
            <td>${allProducts[i].Discription}</td>
            <td><button onclick="updateElement(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("show-tr").innerHTML = cartona;
}

function resetItems() {
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    productDesc.value = ""
}

function deleteElement(index) {
    allProducts.splice(index, 1);
    localStorage.setItem("allProducts", JSON.stringify(allProducts))
    displayAllProducts()
}

function updateElement(index) {
    productName.value = `${allProducts[index].name}`
    productPrice.value = `${allProducts[index].price}`
    productCategory.value = `${allProducts[index].category}`
    productDesc.value = `${allProducts[index].Discription}`
    document.getElementById("btn").innerHTML = "Update"
    mainindex = index;
}

function searchItem(searchWord) {
    var cartonaa = "";
    for (var i = 0; i < allProducts.length; i++) {

        if (allProducts[i].name.toLowerCase().includes(searchWord.toLowerCase()) == true) {
            cartonaa += `
                <tr>
                    <td>${i + 1}</td>
                    <td>`+ allProducts[i].name + `</td>
                    <td>`+ allProducts[i].price + `</td>
                    <td>${allProducts[i].category}</td>
                    <td>${allProducts[i].Discription}</td>
                    <td><button onclick="updateElement(${i})" class="btn btn-warning">Update</button></td>
                    <td><button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button></td>
                </tr>`
        }
        document.getElementById("show-tr").innerHTML = cartonaa;
    }
}

function clearSearchInput(searchWord) {
    searchWord.value = "";
    // displayAllProducts()
}

// Regex //
// var productNameRegex = /^[a-zA-Z][^0-9]{1,10}$/
// var productPriceRegex = /^[0-9]{1,6}$/
// var productCategoryRegex = /^[a-zA-Z]{1,10}$/
// var productDescRegex = /^[a-zA-Z_ ]{1,15}$/

// function validations() {
//     return (productNameRegex.test(productName.value) && productPriceRegex.test(productPrice.value) && productCategoryRegex.test(productCategory.value) && productDescRegex.test(productDesc.value));
// }

// function productNameIsValidated() {
//     return (productNameRegex.test(productName.value));
// }
// function productPriceIsValidated() {
//     return (productPriceRegex.test(productPrice.value));
// }
// function productCategoryIsValidated() {
//     return (productCategoryRegex.test(productCategory.value));
// }
// function productDescIsValidated() {
//     return (productDescRegex.test(productDesc.value));
// }
