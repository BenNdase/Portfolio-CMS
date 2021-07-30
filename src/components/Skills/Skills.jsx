import "./Skills.scss";
import { Icon } from "@iconify/react";
import reactIcon from '@iconify-icons/logos/react';
import javascriptIcon from "@iconify-icons/logos/javascript";
import sassIcon from "@iconify-icons/logos/sass";
import wordpressIcon from '@iconify-icons/logos/wordpress-icon';
import graphqlIcon from '@iconify-icons/logos/graphql';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import mysqlIcon from '@iconify-icons/logos/mysql';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import figmaIcon from '@iconify-icons/logos/figma';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title">
        <hr className="line-top" />
        <h2>Mes compétences</h2>
      </div>
      <div className="skills__container">
        <div className="skills__soft">
          <h3>Soft Skills</h3>
          <p>
            <span>&gt; </span>
            <span>Capacité d'adaptation et du travail en équipe.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Gestion des projets avec la méthodologie agile (SCRUM, KANBAN).
            </span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Conception et modélisation des systèmes d'information (UML et
              MERISE).
            </span>
          </p>
          <p>
            <span>&gt; </span>
            <span>Création et gestion des bases de données.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>Maquettage des applications.</span>
          </p>
          <p>
            <span>&gt; </span>
            <span>
              Réalisation des interfaces utilisateur web statiques, dynamiques
              et adaptative.
            </span>
          </p>
        </div>
        <div className="skills__hard">
          <h3>Technologies</h3>
          <div className="skills__icons">
            <div className="container__icon">
              <Icon icon={javascriptIcon} className="icon" />
              <span>JavaScript</span>
            </div>
            <div className="container__icon">
              <Icon icon={reactIcon} className="icon" />
              <span>React Js</span>
            </div>
            <div className="container__icon">
              <Icon icon={sassIcon} className="icon" />
              <span>Sass</span>
            </div>
            <div className="container__icon">
              <Icon icon={graphqlIcon} className="icon" />
              <span>GraphQL</span>
            </div>
            <div className="container__icon">
              <Icon icon={wordpressIcon} className="icon" />
              <span>Wordpress</span>
            </div>
            <div className="container__icon">
              <Icon icon={nodejsIcon} className="icon" />
              <span>NodeJS</span>
            </div>
            <div className="container__icon">
              <Icon icon={mysqlIcon} className="icon" />
              <span>MySQL</span>
            </div>
            <div className="container__icon">
              <Icon icon={mongodbIcon} className="icon" />
              <span>MongoDB</span>
            </div>
            <div className="container__icon">
              <Icon icon={typescriptIcon} className="icon" />
              <span>TypeScript</span>
            </div>
            <div className="container__icon">
              <Icon icon={figmaIcon} className="icon" /><br />
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
