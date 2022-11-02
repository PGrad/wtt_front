import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { Affiliates } from '@/components/Contacts';

import { TreeLogo } from '@/components/Icons';

import TreeImage from '@/assets/images/addtree/treefattrunk.png';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <div className="about__header__logo">
          <TreeLogo />
        </div>
        <h1 className="about__header__text">About Water the Trees</h1>
        <span className="about__header__summary">
          Welcome to Water the Trees, a platform that crowd sources tree
          planting and
        </span>
        <span className="about__header__summary">
          maintenance. We are an open source project run by tree planting
          volunteers.
        </span>
      </div>
      <div className="about__main">
        <div className="about__main__section">
          <h2 className="about__main__section__header">Vision</h2>
          <p>
            We believe in the power of trees to restore natural habitat for
            animals, insect, and
          </p>
          <p>fauna.</p>
        </div>
        <div className="about__main__section">
          <h2 className="about__main__section__header">Mission</h2>
          <p>
            We are interested in continuous massive tree planting events to help
            sequester
          </p>
          <p>carbon footprint and stablize climate change extremes</p>
        </div>
        <div className="about__main__section">
          <h2 className="about__main__section__header">Who we are!</h2>
          <p>
            Water the Trees begun as a tree tracking platform to track the life
            and health of a
          </p>
          <p>tree worldwide.</p>
          <div className="about__main__section__subsection">
            <p>
              Together with data, three enthusiast, and volunteers we are able
              to maintain a
            </p>
            <p>source to see the growth of trees in all communities.</p>
          </div>
        </div>

        <div className="about__main__section">
          <h2 className="about__main__section__header">Join the team!</h2>
          <p>
            We are always looking for team members to contribute to the project.
          </p>
          <div className="about__main__section__subsection">
            <p>
              Currently we are looking for Backend Developers,Frontend
              Developers,
            </p>
            <p>Designers, Researchers, Admin, Marketing and many more!</p>
          </div>
          <div className="about__main__section__subsection2">
            <h3 className="about__main__section__subsection2__header">
              How to get started:
            </h3>
            <p>
              1. Read our{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1L5Hc8_K_NhVhAejdE05C_Y__CgqeBWFrFYFoNqBSBbQ/edit"
              >
                Onboarding Steps
              </a>
            </p>
            <p>
              2. Join us on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://join.slack.com/share/zt-ouzg0084-34S7_J9UZlcJSe9~qV7jbQ"
              >
                Slack
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="about__footer">
        <div className="about__footer__section">
          <h2>Community</h2>
          <span>
            To save trees in your local community, please visit our{' '}
            <Link to="/community">Community</Link> outreach page to find
            organizations near you.
          </span>
          <div className="about__footer__section__affiliates">
            <Affiliates />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
