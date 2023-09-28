module.exports= (req,res,next)=>{
    const {model} =req.params; // modelo

    if(['Character', 'Film', 'Planet'].includes(model)){
        //si esta bien
        return next();
    }else{
        throw Error('Invalid Model')
    }

}