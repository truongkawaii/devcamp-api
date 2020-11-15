// @desc Get all bootcamps 
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, nex) => {

    res
        .status(200)
        .json({ success: true, msg: 'Show all bootcamps' })
}

// @desc Get single bootcamps  
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, nex) => {
    res
        .status(200)
        .json({ success: true, msg: `get bootcamps ${req.params.id}` })
}


// @desc Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, nex) => {
    res
        .status(200)
        .json({ success: true, msg: `Create a new bootcamp` })
}


// @desc Update new bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, nex) => {
    res
        .status(200)
        .json({ success: true, msg: `Update Bootcamp ${req.params.id}` })
}

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, nex) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete bootcamps ${req.params.id}` })
}