const axios = require('axios');

const validatePan = async (req, res) => {
    const { pan } = req.body;

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (!pan || !panRegex.test(pan)) {
        return res.status(400).json({
            status: 'error',
            message: 'PAN must be a valid 10-character alphanumeric string ending with a letter',
            errorCode: 'INVALID_PAN_FORMAT',
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'PAN is valid',
    });
};

module.exports = { validatePan };
