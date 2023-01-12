const Profile = require('../models/profile')

exports.get_profile = (req, res, next) => {
    const id = req.params.id;
    Profile.findById(id).exec().then((profile) => {
        if (profile) {
            res.status(200).json({ profile })
        } else{
            res.status(404).json({message: 'Not found'})
        }
    }).catch((error) => res.status(500).json({message: error}))
}

exports.update_profile = (req, res, next) => {
    const id = req.params.id;
    const updateVal = req.body;
    // for (const ops of req.body) {
    //     updateVal[ops.propName] = ops.value;
    // }
    Profile.updateOne({ _id: id }, updateVal )
        .exec()
        .then((resp) =>{
            if (resp) {
                res.status(201).json({profile: resp})
            }else{
                res.status(400).json({error: 'not working'})
            }
        })
        .catch((error) => res.status(500).json({message:error }))
}

exports.get_profiles = (req, res, next) => {
    Profile.find().exec().then((resp) => {
        res.status(200).json({ resp })
    }).catch(error => res.status(500).json({message: error}))

}