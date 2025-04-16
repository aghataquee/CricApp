const express=require('express');
const router=express.Router();
const {createMatch, getMatches, getMatchesById,updateMatch,deleteMatch}=require('../controllers/Match')
router.post('/',createMatch);
router.get('/',getMatches);
router.get('/:id',getMatchesById);
router.put('/:id',updateMatch);
router.delete('/:id',deleteMatch);
module.exports=router;