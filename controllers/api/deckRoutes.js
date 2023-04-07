const {FavoriteList} = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//CRUD

//create a favorite list 
router.post('/', withAuth, async(req,res) => {
    try{
        const listData = await FavoriteList.create()
        
    }catch(err){
        res.status(400).json(err)
    }
})


//get all the favorites from the favoriteslist for the logged in user
router.get('/', async (req,res) => {
    try{
        const favoritesList = await FavoriteList.findall()

        res.status(200).json(favoritesList)
    } catch(err){
        res.status(400).json(err)
    }
})

//




module.exports = router;