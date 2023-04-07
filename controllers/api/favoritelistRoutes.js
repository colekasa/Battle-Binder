const {FavoriteList} = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//CRUD

//get all the favorites from the favoriteslist for the logged in user
router.get('/', withAuth, async (req,res) => {
    try{
        const favoritesList = await FavoriteList.findall()

        res.status(200).json(favoritesList)
    } catch(err){
        res.status(400).json(err)
    }
})

//




module.exports = router;