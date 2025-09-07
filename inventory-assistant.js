// Coding Challenge 02b

const itemName = "iPad Air"
let unitCost = 349.00
let currentStock = 150
let reorderLevel = 200
let targetStock = 1500
let weeklyDemand = 50
let supplierLeadTimeWeeks = 2


let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks


console.log("Item name: " + itemName)
console.log("Weeks of cover: " + weeksOfCover)
console.log("Is it time to reorder?: " + reorderNow)
console.log("Recommended reorder quantity: " + reorderQuantity)
console.log("Estimated reorder cost: $" + estimatedReorderCost.toFixed(2))

