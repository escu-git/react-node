const { UserModel } = require('../../Database/mongodb');
const dbManager = require('./db');
const collection = 'users';

const log = {
    signUp: async(req, res)=>{
        try{
            const{user, password}=req.body;
            const usuario = {user:user, password:password, isAdmin:false}
            console.log(usuario);
            const savedUser = await dbManager.insert(collection, usuario)
            res.status(200).json({data:savedUser, message:`Usuario ${user} fue creado con éxito`})
        }catch(err){
            res.status(400).json({message:'Error creando user', err:err})
        }
    },
    login: async(req, res)=>{
        try{
            const{user, password}=req.body;
            const queryDB = await UserModel.find({user:user});
            if(queryDB.length == 0){
                res.status(401).json({message:`No se ha encontrado el user ${user}.`})
            }else{
                if(queryDB[0].password == password){
                    req.session.user = user;
                    req.session.password = password;
                    const userSession = req.session.user;
                    const expires = req.session.cookie.expires;
                    console.log(userSession, expires);
                    res.status(200).json({userSession, expires})
                }else{
                    res.status(400).json({message:'Contraseña incorrecta'})
                }
            }
        }catch(err){
            res.status(400).json({err:err})
        }
    },
    logout: async(req, res)=>{
        try{
            req.session.destroy(err=>{
                if(!err) res.status(200).json({message:'Sesión cerrada correctamente'})
                else{
                    res.status(400).json({message:'No se pudo cerrar sesión', error:err})
                }
            })
        }catch(err){
            res.status(400).json({message:'Ocurrió un error', error: err})
        }
    },
    session: async(req, res)=>{
        const session = req.session;
        const userSession = req.session
        res.status(200).json({session, userSession})
    }
}

module.exports=log;