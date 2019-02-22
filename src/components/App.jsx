import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Interests from './Interests';
import ProjectList from './ProjectList';
import Contact from './Contact';
import Error404 from './Error404';
import { v4 } from 'uuid';

class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProjectList: [
        {
          projectName: 'Jewelry Store',
          description: 'Online Jewelry store rebuild project. Use Technologies: Typescript, Firebase, Angular.',
          link: 'https://github.com/gulzatk/JewelryStore-Rebuild',
          key: v4()
        },
        {
          projectName: 'Doctor Search',
          description: 'This webpage lets user to search doctor by name, specialty or symptoms. Used Technologies: ES6, Jquery, NPM, HTML.',
          link: 'http://github.com/gulzatk/DoctorSearch-API',
          key: v4()
        },
        {
          projectName: 'Child Development',
          description: 'Websate geared toward parents to learn their childs development timeline. Used Technologies: C#, .NET Core, Google Chart, MYSql.',
          link: 'https://github.com/gulzatk/ChildDevelopment',
          key: v4()
        },
        {
          projectName: 'Hair Salon',
          description: 'A website that uses a database to show the user all about the stylists, specialties and stylist clients. Used Technologies: C#, .NET Core, MAMP, MySql.',
          link: 'https://github.com/gulzatk/HairSalon2.Solution',
          key: v4(),
        },
        {
          projectName: 'Type Racer',
          description: 'This is an online typing competition, TypeRacer, allows people to race against the computer by typing various quotes from books, movies, and songs. Used Technologies: TypeScript, Node.js, Angular5, FireBase, CSS, JQuery, HTML.',
          link: 'https://github.com/gulzatk/typing-game-angular.git',
          key: v4(),
        },
        {
          projectName: 'Pet Search',
          description: 'An educational math game geared towards young children learning addition and subtraction. Used Technologies: CSS, HTML, Git, Bootstrap, JQuery, AJAX, CS Animation.',
          link: 'https://github.com/gulzatk/math-game.git',
          key: v4(),
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route path='/interests' component={Interests} />
          <Route path='/projects' render = {() => <ProjectList projectList = {this.state.masterProjectList} /> } />
          <Route path='/contact' component={Contact} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;