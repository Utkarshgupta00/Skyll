const express = require('express');
const ResumeData = require('../db/model/resumeSchemaData');
const bodyParser = require('body-parser');
const router = express.Router();


router.use(bodyParser.json());
router.use(express.json());



router.post('/', async (req, res) => {
  try {
    console.log('aa gya hu');
    // Create a new document instance using the model
    const newData = new ResumeData({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      skills: req.body.skills,
      workExperience: req.body.workExperience,
      hobbies: req.body.hobbies,
      languages: req.body.languages,
      achievements:req.body.achievements,
      more:req.body.more,
    });

    // Save the document to the database
    const savedData = await newData.save();
    res.status(201).json(savedData); 
    console.log(savedData)// Respond with the saved document

  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors gracefully
  }
});

module.exports = router;
