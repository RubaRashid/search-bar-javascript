const products ={'Red-Shirt' : 'Out-of-Stock',
 'Blue-Shirt' : 'In-Stock',
 'Pink-Shirt' : 'In-Stock',
 'Green-Shirt' : 'Out-of-Stock',
 'White-Shirt' : 'In-Stock',
 'Black-Shirt' : 'In-Stock'};

function search(){
    const searchValue = document.getElementById("search-input").value.toUpperCase();
    const filteredProducts = {};
for (let a in products){
   if( a.toUpperCase().indexOf(searchValue) !== -1){
       filteredProducts[a] = products[a];
   }
}

display(filteredProducts);
}





function display(filteredProducts){
    const buttonContainer = document.getElementById("productContainer");
    buttonContainer.innerHTML = "";
    for(let a in filteredProducts){
        const button = document.createElement("button");
        button.innerHTML = `${a} (${filteredProducts[a]})`;
        button.className = filteredProducts[a] === "In-Stock" ? 'in-stock' : 'out-of-stock';
        button.disabled = filteredProducts[a] === "Out-of-Stock";
        buttonContainer.appendChild(button);
    }
}

display(products);