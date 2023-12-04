exports.getcontroller = (req,res,next) => {
    res.status(200).json({
        message: 'Successfully accessed'
    })
};