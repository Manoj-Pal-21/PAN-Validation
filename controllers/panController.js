const axios = require('axios');

const validatePan = async (req, res) => {
    const { pan } = req.body;

    console.log(pan)

    if (!pan || typeof pan !== 'string' || pan.length !== 10) {
        return res.status(400).json({
            status: 'error',
            message: 'PAN must be a valid 10-character alphanumeric string',
            errorCode: 'INVALID_PAN_FORMAT',
        });
    }

    try {
        const response = await axios.post(process.env.PAN_VALIDATION_API_URL, { pan });
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    }
};

module.exports = { validatePan };
