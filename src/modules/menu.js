const menuData = (() => {
    const _data = [];
    const _categories = ["Desserts", "Mains", "Small Bites", "Sharables"];
    const _desserts = [
        {   
            name: "Napoleon Cake",
            description: "Many layers puff pustry filled with vannilla custard",
            price: "$4.99"
        },
        {
            name: "Blueberry cake",
            description: "Lovely blueberry cake recipe, simple single layer cake made with two cups of fresh blueberries.",
            price: "$2.45"
        },
        {
            name: "Angel Food Cake",
            description: "Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar.",
            price: "$3.49"
        },
        {
            name: "Fruit Danish",
            description: "The pastry filled with raspberries and best served with copious amounts of coffee",
            price: "$1.20"
        }
    ];
    const _mains = [
        {   
            name: "Breakfast plate",
            description: "Two farm fresh eggs, house made hash brown, seasonal Farmers Market greens, choice of protein, house made scallion ranch sauce",
            price: "$7.95"
        },
        {
            name: "Market Grill Plate",
            description: "Choice of protein, grilled seasonal Farmers Market vegetables, house pickles, house green sauce",
            price: "$6.45"
        },
        {
            name: "Yangs Set Meal",
            description: "Choice of protein, organic long grain rice, Omiso soup, seasonal Farmers Market vegetables, house pickles, soy egg, house green sauce",
            price: "$3.49"
        }
    ];
    const _smallBites = [
        {   
            name: "Chilled Tofu w/ Avocado & Salmon Roe",
            description: "Mejii supreme tofu, avocado, wild salmon/trout roe, house ponzu",
            price: "$12.00"
        },
        {
            name: "Pickled Cucumber Salad",
            description: "Farmers Market organic cucamber, garlic, ginger, gochugaru, herbs",
            price: "$6.00"
        },
        {
            name: "Smoked Salmon Hash",
            description: "Smoked salmon belly, preserved meyer lemon creme fraiche, wild salmon, house made hash brown, chives",
            price: "$14.00"
        },
        {
            name: "Yang's Fried Chicken Wings",
            description: "Free range chicken wings, lemon, house salt & pepper seasoning",
            price: "$14.00"
        }
    ];
    const _sharables  = [
        {   
            name: "Cold Sesame Nudles",
            description: "Semolina organic spaghetti, house sesame sauce, organic Persian cucambers, pickled carrots, crushed peanuts, cilantro, scallion, drizzle of house chilli crisp",
            price: "$8.25"
        },
        {
            name: "Cornmeal Mochi Pancake",
            description: "Grits & Toll heirloom cornmeal, Koda Farms mochiko rice flour, organic whipped cream, seasonal toppings",
            price: "$4.49"
        },
        {
            name: "Multigrain Porridge",
            description: "Organic multigrain rice, soy egg, scallion, cilantro, house pickles, crispy multigrain rice",
            price: "$6.95"
        },
        {
            name: "Roasted Squash & Kale Salad",
            description: "Roasted Yao Cheng Farms organic kabocha and butternut squash, Chavez Farms Lacinato kale, herbs, organic multigrain rice, roasted pumpkin seeds, house miso lemon vinaigrette",
            price: "$11.20"
        }
    ];
    
    _data.push(_desserts);
    _data.push(_mains);
    _data.push(_smallBites);
    _data.push(_sharables);

    const getCategories = () => _categories;
    const getDesserts = () => _desserts;
    const getMenu = () =>  _data;

    return {getCategories, getMenu, getDesserts};
})();

function createMenuBlock() {
    const mainContainer = document.createElement("div");
    const menuTable = document.createElement("table");
    const menuHeader = menuData.getCategories();

    menuTable.classList.add("menu");

    const allMenuItems = menuData.getMenu();
    allMenuItems.forEach((item, index) => {
        const menuContainer = document.createElement("div");
        const menuCategory = document.createElement("div");
        const _title = document.createElement("h2");

        menuContainer.classList.add("menu-container");
        menuCategory.classList.add("menu-category");

        _title.innerText = menuHeader[index];
        menuCategory.appendChild(_title);
        menuCategory.appendChild(makeTableDishes(item));
        
        menuContainer.appendChild(menuCategory);
        mainContainer.appendChild(menuContainer);
    }); 

    mainContainer.classList.add("hide");
    mainContainer.id = "menu";

    return mainContainer;
}

function getDishInfo(dish) {
    return {name: dish.name, description: dish.description, price: dish.price};
}

function makeTableDishes(dishes) {
    const table = document.createElement("table");
    const row = document.createElement("tr");
    const name = document.createElement("th");
    const description = document.createElement("th");
    const price = document.createElement("th");

    name.innerText = "Name";
    description.innerText = "Description";
    price.innerText = "Price";
    
    row.appendChild(name);
    row.appendChild(description);
    row.appendChild(price);

    table.appendChild(row);

    for(let obj in dishes) {
        const tableRow = document.createElement("tr");
        const dish = getDishInfo(dishes[obj]);
        for(let i in dish){
            let tableData = document.createElement("td");
            tableData.innerText = dish[i];
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }
    table.classList.add("menu");
    return table;
}

export {createMenuBlock};