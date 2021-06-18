const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

createJWT = (email, userId, duration) => {
    const payload = {
       email,
       userId,
       duration
    };
    console.log('coucou')
    return jwt.sign(payload, {
      expiresIn: duration,
    });
 }

exports.signup = (req, res) => {
    console.log(req.body.role)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                role: req.body.role
            });
            user.save()
                .then(() => res.status(201).json({message:'Utilisateur créé'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

exports.login = (req, res) => {
    // console.log("coucou")
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user){
                return res.status(401).json({message:'Utilisateur non trouvé'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({message:'Mot de pass incorrect'});
                    }
                    // console.log('ok')
                    // let access_token = createJWT(
                    //     user.email,
                    //     user._id,
                    //     3600
                    // );
                    console.log("ok")
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h'}
                        ),
                        // token: access_token,
                        message: user
                    });
                    
                    
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};