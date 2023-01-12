const Profile = require('../models/profile')

exports.get_profile = (req, res, next) => {
    const id = req.param.id;
    Profile.findById(id).exec().then((profile) => {
        if (profile) {
            res.status(200).json({ profile })
        } else{
            res.status(404).json({message: 'Not found'})
        }
    }).catch((error) => res.status(500).json({message: error}))
}