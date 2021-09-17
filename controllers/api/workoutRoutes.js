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
router.put("/:id", async (req, res) => {
    try {
        const workoutData = await db.Workout.updateOne(
            { _id: req.params.id },
            { $push: { exercises: req.body }}
        );
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get past 7 workout
router.get("/range", async (req, res) => {
    try {
        const workoutData = await db.Workout.find({}).sort({day: -1}).limit(7);
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;