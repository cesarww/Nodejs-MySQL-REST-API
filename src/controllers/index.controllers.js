import {pool} from "../db.js"

export const ping = async (req,res) => {
    try{
        const [result] = await pool.query('SELECT "PONG" AS result')
        res.json(result[0])
    }
    catch(error){
        return res.status(404).json({
            message: error.message
        })
    }
}