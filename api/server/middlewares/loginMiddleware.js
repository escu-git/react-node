
function isLogged(req, res, next){
    const userSession = req.session.user;
    if(userSession !== undefined){
        console.log('Esto es el middleware:')
        console.log(userSession)
    }else{
        console.log('no logueado')
        console.log(userSession)
    }
    next()
}

module.exports = {isLogged}