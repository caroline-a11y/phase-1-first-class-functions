function receivesAFunction (spy) {
   return spy()
}
function returnsANamedFunction (){
    return function star () {
        return 0;
    }
}
function returnsAnAnonymousFunction () {
    return function () {
        return 0;
    }
    
}
     