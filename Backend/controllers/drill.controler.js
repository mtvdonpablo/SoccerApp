import Drill from '../models/drill.model.js';
import mongoose from 'mongoose';

export const  getDrills =  async (req,res)=>{
    try{
        const { selectedAgeGroup, players, selectedSkill } = req.query;  // Extract query parameters from the request
        // Create a filter object based on the provided parameters
        const filter = {};
        if (selectedSkill) {
            filter.skill = selectedSkill;
        }
        if (players) {
            filter.minPlayers = { $lte: players };  // Players should be greater than or equal to minPlayers
            filter.maxPlayers = { $gte: players };  // Players should be less than or equal to maxPlayers
        }
        if (selectedAgeGroup) {
            filter.ageGroups = { $in: [parseInt(selectedAgeGroup)] };  // Ensure the selectedAgeGroup exists in the ageGroups array
        }
        const drills = await Drill.find(filter); // empty means fetch all items add filters in here
        res.status(200).json({success:true, data: drills});
    } catch (error){
        console.log("error in fetching drills: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }

};




export const createDrill = async(req,res)=>{
    const drill = req.body; // user will send this data

    if(!drill.name || !drill.skill || !drill.minPlayers || !drill.maxPlayers || !drill.videoLink || !drill.videoThumbnail
        || !drill.individual || !drill.ageGroups){
        return res.status(400).json({success:false, message: "Please provide all fields. The fields are name,skill, minplayers, video link, video thumbnail, and individual(true/false)"});
    }
    const newDrill = new Drill(drill);

    try{
        await newDrill.save();
        res.status(201).json({success: true,data: newDrill});
    } catch (error){
        console.error("Error in Create Drill: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateDrill = async(req,res)=>{ // updating case
    const {id} = req.params;
    const drill = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Drill ID not found"})
    }
    try{
        const updateDrill = await Drill.findByIdAndUpdate(id, drill, {new:true});
        res.status(200).json({success: true, data: updateDrill});
    } catch (error){
        res.status(500).json({success: false, message: "Server Error"})
    }
};

export const deleteDrill = async(req,res) => {
    const {id} = req.params;
    console.log("id: ", id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Drill ID not found"})
    }
    try{
        await Drill.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Drill deleted"});
    } catch (error) {
        console.log("error in deleting drill: ", error.message);
        return res.status(500).json({success:false, message: "Server Error"});

    }
};