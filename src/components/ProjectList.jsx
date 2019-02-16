import React from 'react';
import Project from './Project';

function ProjectList() {
    return (
      <div>
          <style jsx>
          {`
          .grid-container {
              grid-template-columns: auto auto;
              display: grid;
              margin-left: 320px;
              margin-top: 30px;
          }

          .grid-item{
            border: 2px solid rgba(0, 0, 0, 0.8);
            background-color: #BFE5F1;
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 10px;
            text-align: center;
            width: 80%;
            margin-top: 10px;
          }
          h1 {
               margin-left: 820px;
            font-family: poppins,Arial,sans-serif;
          }
      
          `}</style>
            <h1>Projects</h1>
          <div className="grid-container">
            {Projects.map((proj, index) => 
                <div className="grid-item">
                <Project name = {proj.projectName}
                description = {proj.description}
                link = {proj.link}
                key = {index}
                />
                </div>
            )}
           
      </div>
        </div>
    )
}

export default ProjectList;

const Projects = [
    {
        projectName: 'Jewelry Store',
        description: 'Online Jewelry store rebuild project. Use Technologies: Typescript, Firebase, Angular.',
        link: 'https://github.com/gulzatk/JewelryStore-Rebuild'
    },
    {
        projectName: 'Doctor Search',
        description: 'This webpage lets user to search doctor by name, specialty or symptoms. Used Technologies: ES6, Jquery, NPM, HTML.',
        link: 'http://github.com/gulzatk/DoctorSearch-API'
    },
    {
        projectName: 'Child Development',
        description: 'Websate geared toward parents to learn their childs development timeline. Used Technologies: C#, .NET Core, Google Chart, MYSql.',
        link: 'https://github.com/gulzatk/ChildDevelopment'
    },
    {
        projectName: 'Hair Salon',
        description: 'A website that uses a database to show the user all about the stylists, specialties and stylist clients. Used Technologies: C#, .NET Core, MAMP, MySql.',
        link: 'https://github.com/gulzatk/HairSalon2.Solution'
    },
]
  