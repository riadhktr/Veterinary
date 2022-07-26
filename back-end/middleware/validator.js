const {check,validationResult} = require('express-validator')


exports.signupValidator = [
    check('username').not().isEmpty().trim().withMessage('Tous les champs sont obligatoires'),
    check('email').isEmail().normalizeEmail().withMessage('Adress email non valide'),
    check('password').isLength({min:6, max:12}).withMessage('Mot de passe doit etre entre 6 et 12 charactère ')
]
exports.signinValidator = [
    
    check('email').isEmail().normalizeEmail().withMessage('Adress email non valide'),
    check('password').isLength({min:6}).withMessage('Mot de passe trés courte ')
]


exports.validatorResult = (req,res,next)=>{

    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if(hasErrors){
        const firstError = result.array()[0].msg ;
         return res.status(400).json({
            errorMsg : firstError
         })
    }
    next()
}