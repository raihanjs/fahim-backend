const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const about = require("./data/about.json");
const skills = require("./data/skills.json");
const projects = require("./data/projects.json");
const homeAbout = require("./data/homeabout.json");
const achievments = require("./data/acheivements.json");
const leaderships = require("./data/leaderships.json");
const experiences = require("./data/experiences.json");
const certificates = require("./data/certificates.json");

// Example API endpoint
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from Vercel!" };
  res.json(data);
});

// Get Home skill data
app.get("/portfolio/api/skills", (req, res) => {
  res.send(skills);
});
// Get Home achievments data
app.get("/portfolio/api/achievments", (req, res) => {
  res.send(achievments);
});
// Get Home about data
app.get("/portfolio/api/homeabout", (req, res) => {
  res.send(homeAbout);
});
// Get all experience array
app.get("/portfolio/api/experiences", (req, res) => {
  res.send(experiences);
});
// Get single experience by id
app.get("/portfolio/api/experiences/:id", (req, res) => {
  const experienceId = req.params.id;
  const getExperience = experiences.find(
    (experience) => parseInt(experienceId) === experience._id
  );
  res.send(getExperience);
});

// Get all leadership array
app.get("/portfolio/api/leaderships", (req, res) => {
  res.send(leaderships);
});
// Get single leadership by id
app.get("/portfolio/api/leaderships/:id", (req, res) => {
  const leadershipId = req.params.id;
  const getLeadership = leaderships.find(
    (leadership) => parseInt(leadershipId) === leadership._id
  );
  res.send(getLeadership);
});

// Get all projects array
app.get("/portfolio/api/projects", (req, res) => {
  res.send(projects);
});
// Get single leadership by id
app.get("/portfolio/api/projects/:id", (req, res) => {
  const projectsId = req.params.id;
  const getProject = projects.find(
    (project) => parseInt(projectsId) === project._id
  );
  res.send(getProject);
});

// Get all certificates array
app.get("/portfolio/api/certificates", (req, res) => {
  res.send(certificates);
});

// Get about data
app.get("/portfolio/api/about", (req, res) => {
  res.send(about);
});

app.listen(port, () => {
  console.log(`Fahim portfolio running on the port ${port}`);
});
