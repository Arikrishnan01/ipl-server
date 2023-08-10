import { response } from "express";
import TeamModel from "../Models/TeamModel.js";


/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /createTeam
 */
export const createTeams = (req, res) => {
    const { 
        teamName = "",
        teamShortName = "",
        teamLogo = "",
        colorCode = "",
        totalPlayers = 0,
        totalSubstitutes = 0,
        state = "",
        teamOwner = "",
        teamCaptain = "",
        teamCoach = "",
        teamCup = 0
    } = req.body;
const Team = new TeamModel({
        teamName,
        teamShortName,
        teamLogo,
        colorCode,
        totalPlayers,
        totalSubstitutes,
        state,
        teamOwner,
        teamCaptain,
        teamCoach,
        teamCup
});
    Team.save()
        .then((response) => {
            if(response._id) {
                return res.status(200).json({
                    message: "Team created successfully!!!!",
                    TeamData: response
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error
            });
        })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /allTeams
 */

export const allTeams = (req, res) => {
    TeamModel.find()
        .then((response) => {
            if(response.length > 0 ) {
                return res.status(200).json({
                    message: "Atlas teams fetched successfully!!",
                    Temas: response,
                });
            }
            else {
                res.status(400).json({
                    message: "Atlas No teams found",
                    response,
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                error: error
            });
        })
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /:id
 */

export const getTeamById = (req, res) => {
    const { id } = req.params;
    TeamModel.findById(id)
    .then((response) => {
        if(response) {
            return res.status(200).json({
                message: "Atlas teams fetched successfully!!!",
                Team: response,
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

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /:id
 */
export const updateTemaById = (req, res) => {
    const { id } = req.params;
    TeamModel.findByIdAndUpdate(id, req.body, {new: true})
    .then((response) => {
        if(response) {
            return res.status(200).json({
                message: "Atlas team updated successfully",
                Team: response,
            });
        }
    })
    .catch((error) => {
        if(error.message) {
            return res.status(400).json({
                error: error.message,
            });
        }
    });
};


/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /:id
 */

export const deleteTeamById = (req, res) => {
    const { id } = req.params;
    TeamModel.findByIdAndDelete(id)
    .then((response) => {
        if(response) {
            return res.status(200).json({
                message: "Atlas teams deleted successfully!!!",
                Team: response,
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