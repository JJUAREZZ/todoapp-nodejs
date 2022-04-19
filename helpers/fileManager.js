const fs = require("fs");

const name = "./database/data.json";

const saveData = (data) => {
  fs.writeFileSync(name, JSON.stringify(data));
};

const getData = () => {
  if (!fs.existsSync(name)) {
    return null;
  }

  const data = fs.readFileSync(name, { encoding: "utf8" });

  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const deleteData = (data) => {
  fs.writeFileSync(name, JSON.stringify(data), { encoding: "utf8", flag: "w" });
};

module.exports = {
  saveData,
  getData,
  deleteData,
};
