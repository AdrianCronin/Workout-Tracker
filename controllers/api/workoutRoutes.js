const router = require('express').Router();

const { Workout } = require('../../models');
const db = require('../../models');

// get all workouts
router.get("/", async (req, res) => {
    try {
        const workoutData = await db.Workout.find({});
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new workout route
router.post("/", async (req, res) => {
    try {

        const workoutData = await db.Workout.create(req.body);
        res.status(200).json(workoutData)
        
    } catch (err) {
        res.status(500).json(err);
    }
});


// add exercises to workout route
router.put("/:id", async (req,res) => {
    try {
        res.status(200).json(req.body);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;