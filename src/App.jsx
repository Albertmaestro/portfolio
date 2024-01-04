import { useState } from "react";
import "./index.css";
import emailjs from "emailjs-com";

function App() {
  let profileData = [
    {
      id: 1,
      title: "Skills",
    },
    { id: 2, title: "Education" },
  ];
  const [profile, setProfile] = useState(1);
  const [showContact, setShowContact] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7evv4mi",
        "template_dm7gee7",
        e.target,
        "6gM0emAOAZeZe2w1J"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowContact(false);
  };

  const getProfileDescription = (data) => {
    setProfile(data);
  };

  return (
    <>
      <main className="bg-primary scroll-smooth overflow-hidden">
        <div className="block md:hidden">
          <div className="flex justify-between p-6">
            <h1 className="text-accent font-secondary font-black">AM</h1>
            <div className="flex flex-col gap-1 items-end">
              <div className="bg-accent h-1 w-6 rounded-full"></div>
              <div className="bg-accent h-1 w-4 rounded-full"></div>
              <div className="bg-accent h-1 w-6 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <nav className="w-full max-w-screen-2xl hidden md:block md:px-32 py-8 z-50">
            <ul className="flex text-gray-400 justify-between font-primary">
              <div>
                <h1 className="text-accent font-secondary font-black">AM</h1>
              </div>
              <div className="text-sm flex gap-8">
                <a href="#home">
                  <span className="text-accent font-secondary">01. </span> Home
                </a>
                <a href="#whatIDo">
                  <span className="text-accent font-secondary">02. </span> What
                  I Do?
                </a>
                <a href="#about">
                  <span className="text-accent font-secondary">03. </span> About
                  Me
                </a>
                <a href="#projects">
                  <span className="text-accent font-secondary">04. </span>{" "}
                  Projects
                </a>
                <a href="#contact">
                  <span className="text-accent font-secondary">05. </span>{" "}
                  Contact
                </a>
              </div>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <section
            className="px-6 pt-4 pb-12 md:px-32 md:pt-24 md:pb-0"
            id="home"
          >
            <div className="w-full max-w-screen-2xl">
              <div className="flex-col flex md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center items-end">
                  <img
                    src="./images/final_cover.png"
                    className="w-4/5 md:w-3/5"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-1/2 text-gray-400 flex flex-col gap-2 md:gap-4">
                  <h2 className="text-xl font-secondary text-accent pt-4 md:pt-0">
                    Hi I'm
                  </h2>
                  <h1 className="text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-gray-400">
                    ALBERT <span className="text-accent">MAESTRO</span>
                  </h1>
                  <p className="text-gray-400 text-sm leading-6 md:pr-12">
                    A Career shifter seeking an entry-level Data Analyst role to
                    apply my strong analytical and quantitative skills which
                    transform data into actionable insights.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/albertsantiago.maestro.7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./images/facebook.svg"
                        className="w-12 hover:scale-110 transition ease-in cursor-pointer"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/albert-maestro-98b93729a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="./images/linked.svg"
                        className="w-12 hover:scale-110 transition ease-in cursor-pointer"
                        alt=""
                      />
                    </a>
                  </div>
                  <a
                    href="./images/Resume - Maestro Albert.pdf"
                    target="_blank"
                  >
                    <button className="w-32 font-secondary py-2 hover:bg-accent hover:text-primary transition duration-300 ease-in mt-3 rounded-lg border-accent border text-accent">
                      View CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          className="px-6 py-12 md:px-32 md:py-24 bg-secondary flex justify-center items-center"
          id="whatIDo"
        >
          <div className="w-full max-w-screen-2xl">
            <div className="flex flex-col justify-center items-center gap-5 pr-5">
              <h1 className="text-accent font-bold font-secondary">
                What I Currently Do?
              </h1>
              <h1 className="text-gray-400 text-4xl text-center md:text-6xl font-bold">
                Taking Online Courses
              </h1>
              <p className="text-gray-400 text-sm px-0 text-center leading-6">
                Currently I’m learning online courses about data analytics and
                so far so good, I really enjoy solving problem and here’s my
                progress right now.
              </p>
              <div className="flex gap-2 mb-8">
                <div className="w-10 rounded-full p-1 bg-accent"></div>
                <div className="w-4 rounded-full p-1 bg-accent bg-opacity-60"></div>
                <div className="w-2 rounded-full p-1 bg-accent bg-opacity-40"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <img
                  src="./images/image1.png"
                  className="transition duration-500 rounded-t-lg grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
                  alt=""
                />
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-accent font-secondary">
                    Microsoft Excel
                  </h3>
                  <h3 className="font-bold">
                    Excel From beginner To Advanced (2023)
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Master Excel with data management, key functions,
                    PivotTables, PowerPivot, formula audits, and automation
                    through Macros/VBA for increased efficiency.
                  </p>
                  <a href="./images/excel.pdf" target="_blank">
                    <button className="transition duration-300 ease-in w-40 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <img
                  src="./images/sql.png"
                  className="transition duration-500 rounded-t-lg grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                  alt=""
                />
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-accent font-secondary">SQL</h3>
                  <h3 className="font-bold">
                    MySQL for Data Analytics and Business Intelligence
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Master SQL and MySQL for roles like SQL developer and
                    Database administrator. Learn theoretical insights, best
                    practices, and practical skills with MySQL.
                  </p>
                  <a href="./images/sql.pdf" target="_blank">
                    <button className="transition duration-300 ease-in w-40 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <img
                  src="./images/powerbi.png"
                  className="transition duration-500 rounded-t-lg grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                  alt=""
                />
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-accent font-secondary">
                    Microsoft Power BI
                  </h3>
                  <h3 className="font-bold">
                    Power BI - The Practical Guide (2023 Edition)
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Master Power BI tools, including Power BI Desktop, Query
                    Editor, and Data Model. Learn data manipulation,
                    relationship building, and visualization.
                  </p>
                  <a href="./images/powerBi.pdf" target="_blank">
                    <button className="transition duration-300 ease-in w-40 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary flex justify-center items-center"
          id="about"
        >
          <div className="w-full max-w-screen-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full h-60 md:h-auto md:w-1/2 bg-aboutme bg-cover bg-center grayscale"></div>
              <div className="w-full md:w-1/2 py-12 pl-6 pr-6 md:py-24 md:pr-32 md:pl-12 flex flex-col gap-4">
                <h1 className="text-accent font-bold font-secondary">
                  About Me
                </h1>
                <h1 className="text-gray-400 font-bold text-4xl md:text-6xl">
                  What is My Goal?
                </h1>
                <p className="text-gray-400 text-sm leading-6">
                  Hi, my name is Albert S. Maestro, I'm 25 years of Age and I
                  live in Mansalay,Oriental Mindoro Im a College graduate of Bs
                  Entrepreneurship Course, and I experienced to put up some
                  small Business for the past few Years. I'm a career shifter
                  and I have studied online Courses to enhance my Technical
                  Skills and to expand my knowledge more in Tech Industry. My
                  primary goal is to derive meaningful insights from data to
                  inform decision-making and solve business problems.
                </p>
                <ul className="flex gap-8 font-secondary hover:cursor-pointer text-gray-400 mt-6">
                  {profileData.map((data, index) => (
                    <li
                      key={index}
                      className={
                        profile === data.id ? "font-bold text-accent" : ""
                      }
                      onClick={() => getProfileDescription(data.id)}
                    >
                      {data.title}
                      <div
                        className={
                          profile === data.id
                            ? "absolute h-1 w-10 bg-accent rounded-md mt-3"
                            : "hidden"
                        }
                      ></div>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary p-8 rounded-lg mt-4">
                  {profile === 1 && (
                    <>
                      <div className="flex flex-wrap gap-6">
                        <img
                          src="./images/excel.svg"
                          className="w-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/word.svg"
                          className="w-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/powerpoint.svg"
                          className="w-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/sql.svg"
                          className="w-10 h-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/powerbi.svg"
                          className="w-10 h-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/tableu.svg"
                          className="w-10 h-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/python.svg"
                          className="w-10 h-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                        <img
                          src="./images/spreadsheet.svg"
                          className="w-10 h-10 hover:scale-125 transition ease-in cursor-pointer"
                          alt=""
                        />
                      </div>
                      <div className="flex gap-3 mt-8 text-tertiary flex-wrap">
                        <div className="rounded-full h-6 text-sm font-bold px-4 bg-accent">
                          Leadership
                        </div>
                        <div className="rounded-full h-6 text-sm font-bold px-4 bg-accent">
                          Flexibility
                        </div>
                        <div className="rounded-full h-6 text-sm font-bold px-4 bg-accent">
                          Communication
                        </div>
                        <div className="rounded-full h-6 text-sm font-bold px-4 bg-accent">
                          Problem Solving
                        </div>
                        <div className="rounded-full h-6 text-sm font-bold px-4 bg-accent">
                          Adaptability
                        </div>
                      </div>
                    </>
                  )}

                  {profile === 2 && (
                    <ol className="border-l border-accent border-dashed pl-4">
                      <li>
                        <div className="flex flex-start items-center">
                          <div className="bg-accent w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-6"></div>
                          <h4 className="-mt-2 text-gray-400">
                            BS Entreprenuership (Major in Farm Busines)
                            <p>Mindoro State University</p>
                          </h4>
                        </div>
                        <div className="ml-6 mb-6 mt-4">
                          <p className="text-accent text-sm">2015 - 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-start items-center">
                          <div className="bg-accent w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-6"></div>
                          <h4 className="-mt-2 text-gray-400">
                            Secondary
                            <p>Fe Del Mundo National High School</p>
                          </h4>
                        </div>
                        <div className="ml-6 mb-6 mt-4">
                          <p className="text-accent text-sm">2011 - 2015</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-start items-center">
                          <div className="bg-accent w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-6"></div>
                          <h4 className="-mt-2 text-gray-400">
                            Primary
                            <p>Don B. Del Mundo Elementary School</p>
                          </h4>
                        </div>
                        <div className="ml-6 mb-6 mt-4">
                          <p className="text-accent text-sm">2005 - 2011</p>
                        </div>
                      </li>
                      <li>
                        <div className="bg-tertiary border-2 border-accent w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2"></div>
                      </li>
                    </ol>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex justify-center items-center px-6 py-12 md:px-32 md:py-24 bg-secondary"
          id="projects"
        >
          <div className="w-full max-w-screen-2xl">
            <div className="flex flex-col justify-center items-center gap-5 pr-5">
              <h3 className="text-accent font-bold font-secondary">
                My Projects
              </h3>
              <h1 className="text-gray-400 font-bold text-center text-4xl md:text-6xl">
                Simple Things I've Built
              </h1>
              <p className="text-gray-400 text-sm p-0 md:px-56 text-center leading-6">
                Here's the list of some of my simple projects I built over the
                past few months.
              </p>
              <div className="flex gap-2 mb-8">
                <div className="w-10 rounded-full p-1 bg-accent"></div>
                <div className="w-4 rounded-full p-1 bg-accent bg-opacity-60"></div>
                <div className="w-2 rounded-full p-1 bg-accent bg-opacity-40"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    Chocolate Sales Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The Chocolate Sales Dashboard project is a comprehensive and
                    visually appealing solution designed to provide insightful
                    analytics and reporting for the chocolate sales data of the
                    company.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1I1yjSRor1kjgFuwx1AEaEK2zGxAd0Ppa782UpfXO8Gs/edit#gid=481430968"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    Car Sales Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The Car Sales Dashboard project is a dynamic and
                    feature-rich solution Analyzed in Microsoft Excel, designed
                    to empower automotive businesses with unparalleled insights
                    into their sales performance.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1g1DQTOpuwuVloqKz74gNuDgLmJTwJPhJWEhibDldBSQ/edit?pli=1#gid=602820111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    Perfume Sales Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The Perfume Sales Dashboard is designed for simplicity,
                    allowing you to effortlessly track performance, identify
                    growth opportunities, and make data-driven decisions to
                    enhance a perfume business success.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/14gKIKE-AxareMcDdSkPzuIXb_h9KS7o9/edit#gid=1950613346"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    Walmart Database
                  </h3>
                  <p className="text-gray-400 text-sm">
                    This Project provides some answers to the questions of the
                    manager, by Typing a query and by using some method like
                    Extracting and Updating some data in the database.This
                    project empowers decision-makers within Walmart to optimize
                    operations, enhance customer experiences, and drive overall
                    business success.
                  </p>
                  <a href="./images/walmart_query.sql" target="_blank">
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    ECommerce Project
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The Ecommerce Analytics Dashboard, developed using Power BI
                    tools, is an advanced solution that transforms raw
                    e-commerce data into interactive visualizations and
                    actionable insights.
                  </p>
                  <a href="./images/ecommerce.png" target="_blank">
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="font-secondary font-bold text-accent">
                    HR Analytics Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm">
                    The HR Analytics Dashboard project, developed using Power
                    BI, is an innovative solution designed to transform human
                    resources data into actionable insights for strategic
                    decision-making. This project empowers HR professionals and
                    organizational leaders with a comprehensive view of key HR
                    metrics and employee performance.
                  </p>
                  <a href="./images/powerbi_1.png" target="_blank">
                    <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex justify-center items-center px-6 py-12 md:px-32 md:py-24 bg-primary"
          id="contact"
        >
          <div className="w-full max-w-screen-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 flex flex-col gap-4 pr-0 md:pr-12">
                <h3 className="text-accent font-bold font-secondary">
                  Contact Me
                </h3>
                <h1 className="text-gray-400 font-bold text-4xl md:text-6xl">
                  Get In Touch!
                </h1>
                <p className="text-gray-400 text-sm leading-6">
                  Thank you for exploring my portfolio! If you have any
                  questions, collaboration ideas, or just want to connect, I'd
                  love to hear from you. Here are some various ways to get in
                  touch, Feel free to call me or drop me an email. I am excited
                  to connect with you :)
                </p>
                <div className="flex gap-2">
                  <div className="w-10 rounded-full p-1 bg-accent"></div>
                  <div className="w-4 rounded-full p-1 bg-accent bg-opacity-60"></div>
                  <div className="w-2 rounded-full p-1 bg-accent bg-opacity-40"></div>
                </div>
                <div className="flex mt-6 md:mt-12 items-center">
                  <img src="./images/phone.svg" className="w-6" alt="" />
                  <div className="ml-6">
                    <h3 className="text-gray-400 font-secondary">
                      09093538362
                    </h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="./images/email.svg" className="w-6" alt="" />
                  <div className="ml-6">
                    <h3 className="text-gray-400 font-secondary">
                      Albertmaestro2023@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="./images/pin.svg" className="w-6" alt="" />
                  <div className="ml-6">
                    <h3 className="text-gray-400 font-secondary">
                      Mansalay, Oriental Mindoro
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 mt-8 md:mt-0 bg-tertiary rounded-lg p-6 md:p-12 text-gray-400">
                {showContact ? (
                  <form onSubmit={sendEmail} className="flex flex-col gap-4">
                    <label htmlFor="" className="text-gray-400 text-sm">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="px-5 py-3 bg-white text-sm text-primary rounded-lg w-full"
                      required
                    />

                    <label htmlFor="" className="text-gray-400 text-sm">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="px-5 py-3 bg-white text-sm text-primary rounded-lg w-full"
                      required
                    />

                    <label htmlFor="" className="text-gray-400 text-sm">
                      Message:
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="px-5 py-3 bg-white text-sm text-primary rounded-lg w-full"
                      required
                    />

                    <input
                      type="submit"
                      className="w-24 text-primary text-sm bg-accent p-2 rounded-lg cursor-pointer"
                      value="Send"
                    />
                  </form>
                ) : (
                  <p>
                    Thanks for reaching me out. I will response as soon as
                    possible!
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 md:px-32 md:py-12 bg-secondary flex justify-center items-center flex-col gap-2">
          <div className="flex justify-center gap-4">
            <img
              src="./images/facebook.svg"
              className="w-8 hover:scale-125 transition ease-in cursor-pointer"
              alt=""
            />
            <img
              src="./images/linked.svg"
              className="w-8 hover:scale-125 transition ease-in cursor-pointer"
              alt=""
            />
            <img
              src="./images/heart.svg"
              className="w-8 hover:scale-125 transition ease-in cursor-pointer"
              alt=""
            />
          </div>
          <h3 className="text-gray-400 font-bold">Albert Maestro 2023</h3>
          <p className="text-sm text-gray-400">
            This Portfolio is made with hardwork and love.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
