export default (expenses) => {
    let total = 0
    expenses.forEach((expense) => {
        total = total + expense.amount
    })
    return total
}