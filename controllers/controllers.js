const express = require('express');
const bodyParser = require('body-parser');
const db = require('../connection/db');

const app = express();
app.use(bodyParser.json());


const EARTH_RADIUS = 6371; // Radius of the Earth in kilometers

// Haversine formula for calculating distances
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const lat1Rad = toRadians(lat1);
  const lat2Rad = toRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c; // Distance in kilometers
};

function addpage(req,res){
    res.render("add");
};

function listpage(req,res){
    res.render("list");
}

function addSchool(req, res) {
    const { name, address, latitude, longitude } = req.body;
  
    // Input validation
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    const values = [name, address, latitude, longitude];
  
    db.query(query, values, (err) => {
      if (err) {
        console.error('Error inserting school:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'School added successfully' });
    });
  };

function listSchool(req, res) {
    const { latitude, longitude } = req.body;
  
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }
  
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);
  
    const query = 'SELECT * FROM schools';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching schools:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      const schoolsWithDistance = results.map((school) => {
        const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
        return { ...school, distance };
      });
  
      // Sort by distance
      schoolsWithDistance.sort((a, b) => a.distance - b.distance);
  
      res.json(schoolsWithDistance);
    });
  };

module.exports={
    listSchool,
    addSchool,
    addpage,
    listpage,
}

// List Schools API
// app.get('/listSchools', (req, res) => {
//   const { latitude, longitude } = req.query;

//   if (!latitude || !longitude) {
//     return res.status(400).json({ error: 'Latitude and Longitude are required' });
//   }

//   const userLat = parseFloat(latitude);
//   const userLon = parseFloat(longitude);

//   const query = 'SELECT * FROM schools';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching schools:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }

//     const schoolsWithDistance = results.map((school) => {
//       const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
//       return { ...school, distance };
//     });

//     // Sort by distance
//     schoolsWithDistance.sort((a, b) => a.distance - b.distance);

//     res.json(schoolsWithDistance);
//   });
// });
