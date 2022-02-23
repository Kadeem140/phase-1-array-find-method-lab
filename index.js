
function superbowlWin(arr){
    const findWin = arr.find((record) => {
        return record.result === 'W'
    })
    if(!findWin){
        return undefined
    }
    console.log(findWin.year, "ANSWER!")
    return findWin.year
}