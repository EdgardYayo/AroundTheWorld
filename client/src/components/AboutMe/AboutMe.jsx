import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <div className="All">
        <Link to="/home">
          <h3 className="Second">Back to Home</h3>
        </Link>
        <h1 className="Second">About Me</h1>
        <h2 className="Second">Hi there and thank you for visiting the site</h2>
        <p className="Third">
          Here a little about me, I am an agricultural biotechnologist engineer
          who is passionate about building and designing websites, applications
          and maybe in the future video games, I am currently pursuing the
          career of Full Stack developer at Henry's school, but there is still a
          lot to learn ahead, I also like to study about nutrition, meditation,
          everything that has to do with the human body and how it works, music
          and many other things.
        </p>

        <br />
        <p className="Third">
          What you see in the home page is one of those little projects in which
          I usually work and merge my multiple passions, for example in the home
          page I show you about the pillars of a healthy life, within these even
          things as basic as eating your fruits and vegetables, as well as how
          it is necessary to take a moment alone every day to relax and
          reconnect with our inner power, higher self or God, whatever you call
          it. Everything I show you in the home page has been extensively
          studied by modern scientists and they have come to the conclusion that
          it is part of a healthy lifestyle. Well nothing I say goodbye to you
          with a big virtual hug and I hope you enjoy the content.
        </p>
      </div>
    </>
  );
}
