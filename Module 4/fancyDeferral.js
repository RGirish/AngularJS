//Set a null value outside of your promise.

defer = null
cache = null
function fancyDeferral(){
    //Check to see if promise has been instantiated
    if (defer !== null && defer.promise.$$state.status === 0){
      return defer.promise
    }
    else {
        //If it hasn't, execute the desired effect after creating the promise
        defer = $q.defer()
        if (cache !== null){
            defer.resolve(cache)
        }
        $http.get('something').then(function(response){
            cache = response
            defer.resolve(response)
        })
        return defer.promise
    }
}

//Then these two functions would use the same promise and would resolve simultaneously on the promise's conclusion, or if one function was called later than the other it would use the cached value

function function1(){
    fancyDeferral.then(function(response){
        console.log(response)
    })
}

function function2(){
    fancyDeferral.then(function(response){
        console.log(response)
    })
}