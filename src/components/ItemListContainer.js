import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "../data/data";

const ItemListContainer = () => {
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [projects, setProjets] = useState([]);

  let dataSkill = data[0].Skills;
  let dataEducation = data[1].Education;
  let dataProjects = data[2].Projects;

  useEffect(() => {
    setSkills(dataSkill);
    setEducations(dataEducation);
    setProjets(dataProjects);
  }, []);

  return (
    <ItemList educations={educations} skills={skills} projects={projects} />
  );
};

export default ItemListContainer;
