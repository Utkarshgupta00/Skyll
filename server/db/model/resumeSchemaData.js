const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

    name: {
        type: String,
       
      },
      email: {
        type: String,
       
      },
      phoneNumber: {
        type: String,
       
      },
      skills: [{
        type: String,
      }],
      workExperience: {
        type: String,
      },
      hobbies: {
        type: String,
      },
      languages: {
        type: String,
      },
      achievements: {
        type: String,
      },
      more: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    // pdf: pdfEmbed,

});

const resumeSchemaData = new mongoose.model('resumeSchemaData',resumeSchema);

module.exports = resumeSchemaData;