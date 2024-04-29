exports.creatPostValidator = (req, res, next) => {

    req.check('title', "Title cannot be empty").notEmpty();
    req.check('title', "Title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });

    req.check('body', "Title cannot be empty").notEmpty();
    req.check('body', "Title must be between 40 to 200 characters").isLength({
        min: 4,
        max: 150
    });

    const errors = req.validationErrors();

    if (errors){
        const firtsError = errors.map((error) => error.msg)[0];
            return res.status(400).json({
                error: firtsError
            });
    }
    // proceed to next middleware
    next();
};