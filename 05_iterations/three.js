/* for..of loop : a special type of for loop used for array-type
    objects ; more efficient and readable ; avoid updation and
    condition like traditional for loop
    
    Syntax : 
    for (const iterator of object){
        body
    }
        > iterator is initialised using for traversal
        > object at which loop is to be done 
    */

        const arr = [1, 2, 3, 4, 5]

        for (const num of arr) {
            console.log(num)
        }