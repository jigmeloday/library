const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({
        author:[ 'jige', 'lodey' ]
    })
})

router.get('/:id', (req, res) =>{
    res.status(201).json({
        message: 'nice'
    })
})
// router.post('/', (req,res) => {
//     res.send('hello')
// })
// router.get(':id', (req,res) => {
//     res.send('hello')
// })
// router.patch('/author:id', (req,res) => {
//     res.send('hello')
// })
// router.delete('/author:id', (req,res) => {
//     res.send('hello')
// })

module.exports = router