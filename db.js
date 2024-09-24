const stakeholders = require("./data/stackeholders");
const courses = require("./data/courses");

module.exports = () => {
  return {
    stakeholders: stakeholders,
    courses: courses,
  };
};
