import PlayerModel from '../Models/PlayerModel.js';

/**
 * INPUT: REQUEST
 * OUTPUT: RESPNSE
 * METHOD: POST
 * PATH: /createPlayer
 */
export const createPlayer = (req, res) => {
    const {
        playerName = "",
        jerseyNumber = 0,
        jerseySize = "",
        teamPlaying = "",
        primarySkill = "",
        actualSkills = [],
        battingDetails = {},
        bowlingDetails = [],
    
    } = req.body;
    const Player = new PlayerModel({
        playerName,
        jerseyNumber,
        jerseySize,
        teamPlaying,
        primarySkill,
        actualSkills,
        battingDetails,
        bowlingDetails
    });
    Player.save()
    .then((response) => {
        if(response._id) {
            return res.status(200).json({
                message: "Atlas Player created successfully",
                Player: response,
            });
        }
    })
    .catch((error) => {
       if(error.message) {
        return res.status(400).json({
            error: error
        });
       }
    })
};


/**
 * GET ALL PLAYERS FROM DB
 * METHOD: GET
 * INPUT: REQUEST
 * OUTPUT: RESPONSE
 * PATH: '/allPlayers'
 */
export const allPlayers = (req, res) => {
    PlayerModel.find()
        .then((response) => {
            if(response.length > 0) {
                return res.status(200).json({
                    message: "Atlas players fetched successfully!!",
                    // count: length.response,
                    Players: response,
                });
            }
        })
        .catch((error) => {
            if(error.message) {
                return res.status(400).json({
                    error: error,
                });
            }
        });
};


/**
 * GET SINGLE PLAYERS FROM DB
 * METHOD: GET
 * INPUT: REQUEST
 * OUTPUT: RESPONSE
 * PATH: '/:id'
 */
export const getPlayerById = (req, res) => {
    const { id } = req.params;
    PlayerModel.findById(id)
        .then((response) => {
            if(response) {
                return res.status(200).json({
                    message: "Atlas Player fetched successfully!!!",
                    Player: response
                });
            }
            else {
                res.status(404).json({
                    message: "Atlas player not found",
                    Player: {}
                });
            }
        })
        .catch((error) => {
            if(error.message) {
                return res.status(400).json({
                    error: error.message,
                    response
                });
            }
        })
};

/**
 * UPDATE THE EXISTING DATA FORM DB
 * METHOD: GET
 * INPUT: REQUEST
 * OUTPUT: RESPONSE
 * PATH: '/:id'
 */
export const updatePlayer = (req, res) => {
    const { id } = req.params;
    PlayerModel.findByIdAndUpdate(id, req.body, { new: true})
        .then((response) => {
            if(response) {
                return res.status(200).json({
                    message: "Atlas player update successfully!!",
                    Player: response,
                });
            }
        }) 
        .catch((error) => {
            if(error.message) {
                return res.status(400).json({
                    error: error.message
                });
            }
        })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /:id
 */

export const deletePlayerById = (req, res) => {
    const { id } = req.params;
    PlayerModel.findByIdAndDelete(id)
    .then((response) => {
        if(response) {
            return res.status(200).json({
                message: "Atlas Player deleted successfully!!!",
                Player: response,
            });
        }
        else {
            res.status(404).json({
                message: "Atlas!! no teams found",
                response: {},
            });
        }
    })
    .catch((error) => {
        error: error,
        response
    });
};