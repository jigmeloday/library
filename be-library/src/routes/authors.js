const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('hi');
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