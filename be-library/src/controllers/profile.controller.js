const Profile = require('../models/profile')
const jwt = require('jsonwebtoken');

exports.get_profile = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const uid = jwt.verify(token, process.env.JWT_KEY).id;
        const profile = await Profile.findOne({ uid: uid });
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.update_profile = (req, res, next) => {
    const id = req.params.id;
    const updateVal = req.body;

    Profile.updateOne({ uid: id }, { $set: updateVal } )
        .exec()
        .then((resp) =>{
            if (resp) {
                Profile.findOne({uid: id }).exec().then((respond) => {
                    res.status(201).json(respond)
                })
            }else{
                res.status(400).json({error: 'not working'})
            }
        })
        .catch((error) => res.status(500).json({message:error }))
}

exports.get_other_profile = async (req, res, next) => {
    try{
        const id = req.params.id;
        const profile = await Profile.findOne({ uid: id })
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({message:error })
    }
}