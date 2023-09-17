const express = require('express');
const app = express();
const mongoose = require('./db/conn');
const cors = require('cors');
const bodyParser = require('body-parser');
const ResumeData = require('./db/model/resumeSchemaData');
app.use(cors({ origin: 'http://localhost:3000' }));
const port = process.env.PORT || 3001;




app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// app.use('/register',UserRoutes)

app.post('/register', async (req, res) => {
    try {
      console.log('aa gya hu');
      // Create a new document instance using the model
      const newData = await ResumeData({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        workExperience: req.body.workExperience,
        skills : req.body.skills,
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


app.listen(port,()=>{
    console.log(`server is running at port : ${port}`);
})
