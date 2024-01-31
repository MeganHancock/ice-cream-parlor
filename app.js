const iceCreamFlavors = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

const vessels = [{
    name: 'Cone',
    price: 1,
    quantity: 0,
},
{
    name: 'Waffle Cone',
    price: 2,
    quantity: 0,
},
{
    name: 'Cup',
    price: .5,
    quantity: 0,
}]

function addVanilla() {
    // pull correct obj out of array
    const vanillaScoop = iceCreamFlavors.find(iceCreamFlavor => iceCreamFlavor.name == 'Vanilla')
    //                   array-name.find (array-name[i] => 
    console.log('flavor', vanillaScoop);
    // increase quantity
    vanillaScoop.quantity++
    console.log('scoops', vanillaScoop)
    findScoopTotal()

}

function addCookieDough() {
    const cookieDoughScoop = iceCreamFlavors.find(iceCreamFlavor => iceCreamFlavor.name == 'Cookie Dough')
    cookieDoughScoop.quantity++
    console.log('scoops', cookieDoughScoop)
    findScoopTotal()

}

function addStrawberry() {
    const strawberryScoop = iceCreamFlavors.find(iceCreamFlavor => iceCreamFlavor.name == 'Strawberry')
    strawberryScoop.quantity++
    console.log('scoops', strawberryScoop)

    findScoopTotal()

}

function findScoopTotal() {
    let total = 0
    iceCreamFlavors.forEach(iceCreamFlavor => {
        total += iceCreamFlavor.price * iceCreamFlavor.quantity
    })
    console.log('cart total is', total)
    drawScoopCart()


}

function drawScoopCart() {
    let cart = ''

    const selectedMenuItems = iceCreamFlavors.filter(iceCreamFlavor => iceCreamFlavor.quantity > 0)
    console.log('filtered menu items', selectedMenuItems);

    selectedMenuItems.forEach(iceCreamFlavor => {

        cart += `
        <div class="col-6">${iceCreamFlavor.name}</div>
        <div class="col-2">${iceCreamFlavor.quantity}</div>
        <div class="col-2">${iceCreamFlavor.price}</div>
        <div class="col-2">${iceCreamFlavor.price * iceCreamFlavor.quantity}</div>
        `})

    const selectedCartItemsElement = document.getElementById('cartItems')
    selectedCartItemsElement.innerHTML = cart
}

