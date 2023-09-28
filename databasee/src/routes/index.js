const { Router } = require('express');
// const { Character, Film } = require('../database');
const store = require('../database');
const { validateModel } = require('../middlewares')

const router = Router();


//RUTA POR CADA MODELO
// ------
// router.get('/characters', async (req,res)=>{

//     const response = await Character.list();

//     res.status(200).json(response)
// });

// // ------
// router.get('/films', async (req,res)=>{
//     const response = await Film.list();

//     res.status(200).json(response)
// });

// // ------
// router.get('/planets', async (req,res)=>{
//     const response = await Planet.list();

//     res.status(200).json(response)
// });

//RUTAs DINAMICAs
router.get('/:model', validateModel, async (req, res)=>{
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response)
});

router.get('/:model/:id', validateModel, async (req, res)=>{
    const {model, id} = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response)
});

module.exports = router;
