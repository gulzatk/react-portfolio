import React from 'react';
import Project from './Project';

function ProjectList() {
    return (
      <div>
          <style jsx>
          {`
            .body {
            width: 800px;
            margin-left: 310px;
            padding-left: 50px;
            padding-top: 100px;
    }
          `}</style>
          
            {Projects.map((proj, index) => 
                <div class="body">
                <Project name = {proj.projectName}
                description = {proj.description}
                link = {proj.link}
                key = {index}
                />
                </div>
            )}
           
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
  