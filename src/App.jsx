import { useState } from "react";
import "./index.css";
import emailjs from "emailjs-com";

function App() {
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

  return (
    <>
      <main className="bg-primary scroll-smooth overflow-hidden">
        <nav className="hidden md:block px-32 py-8 z-50">
          <ul className="flex text-gray-400 justify-between font-primary">
            <img src="./images/logo.svg" className="w-8" alt="" />
            <div className="text-sm flex gap-8">
              <a href="#home">
                <span className="text-accent font-secondary">01. </span> Home
              </a>
              <a href="#whatIDo">
                <span className="text-accent font-secondary">02. </span> What I
                Do?
              </a>
              <a href="#about">
                <span className="text-accent font-secondary">03. </span> About
                Me
              </a>
              <a href="#projects">
                <span className="text-accent font-secondary">04. </span>{" "}
                Projects
              </a>
              <li className="ml-7 p-3 bg-white rounded-full"></li>
            </div>
          </ul>
        </nav>

        <section className="px-6 py-12 md:px-32 md:py-24" id="home">
          <div className="flex-col flex md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-end">
              <img src="./images/a.png" className="w-4/5 md:w-9/12" alt="" />
            </div>
            <div className="w-full md:w-1/2 text-gray-400 flex flex-col gap-2 md:gap-4">
              <h2 className="text-xl font-secondary text-accent">Hi I'm</h2>
              <h1 className="text-5xl md:text-7xl font-black text-gray-400">
                ALBERT <span className="text-accent">MAESTRO</span>
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                Seeking an entry-level Data Analyst role to apply my strong
                analytical and quantitative skills which transform data into
                actionable insights.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/albertsantiago.maestro.7"
                  target="_blank"
                >
                  <img
                    src="./images/facebook.svg"
                    className="w-10 hover:scale-110 transition ease-in cursor-pointer"
                    alt=""
                  />
                </a>
                <img
                  src="./images/linked.svg"
                  className="w-10 hover:scale-110 transition ease-in cursor-pointer"
                  alt=""
                />
              </div>
              <a href="./images/resume.pdf" target="_blank">
                <button className="w-32 font-secondary py-2 hover:bg-accent hover:text-primary transition duration-300 ease-in mt-3 rounded-lg border-accent border text-accent">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-12 md:px-32 md:py-24 bg-secondary"
          id="whatIDo"
        >
          <div className="flex flex-col justify-center items-center gap-5 pr-5">
            <h1 className="text-accent font-bold font-secondary">
              What I Currently Do?
            </h1>
            <h1 className="text-gray-400 text-3xl text-center md:text-5xl font-bold">
              Taking Online Courses
            </h1>
            <p className="text-gray-400 text-sm px-0 md:px-56 text-center leading-6">
              Currently I’m learning online courses about data analytics and so
              far so good, I really enjoy solving problem and here’s my progress
              right now.
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
                <h3 className="text-accent font-secondary">Microsoft Excel</h3>
                <h3 className="font-bold">
                  Excel From beginner To Advanced (2023)
                </h3>
                <p className="text-gray-400 text-sm">
                  Master Excel with data management, key functions, PivotTables,
                  PowerPivot, formula audits, and automation through Macros/VBA
                  for increased efficiency.
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
                  Master SQL and MySQL for roles like SQL developer and Database
                  administrator. Learn theoretical insights, best practices, and
                  practical skills with MySQL.
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
                  Editor, and Data Model. Learn data manipulation, relationship
                  building, and visualization.
                </p>
                <a href="./images/powerBi.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-40 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Certificate
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" id="about">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src="./images/sample.png" className="object-fit" alt="" />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col gap-4">
              <h1 className="text-accent font-bold font-secondary">About Me</h1>
              <h1 className="text-gray-400 font-bold text-3xl md:text-5xl">
                What is My Goal?
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                Hi, my name is Albert S. Maestro, I'm 25 years of Age and I live
                in Mansalay,Oriental Mindoro Im a College graduate of Bs
                Entrepreneurship Course, and I experienced to put up some small
                Business for the past few Years. I'm a career shifter and I have
                studied online Courses to enhance my Technical Skills and to
                expand my knowledge more in Tech Industry. My primary goal is to
                derive meaningful insights from data to inform decision-making
                and solve business problems.
              </p>
              <ul className="flex gap-4 font-secondary text-gray-400 mt-6">
                <li className="text-accent">Skills</li>
                <li>Work Experience</li>
                <li>Education</li>
              </ul>
              <div className="bg-secondary p-8 rounded-lg mt-4">
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
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-12 md:px-32 md:py-24 bg-secondary"
          id="projects"
        >
          <div className="flex flex-col justify-center items-center gap-5 pr-5">
            <h3 className="text-accent font-bold font-secondary">
              My Projects
            </h3>
            <h1 className="text-gray-400 font-bold text-center text-3xl md:text-5xl">
              Sample Things I've Built
            </h1>
            <p className="text-gray-400 text-sm p-0 md:px-56 text-center leading-6">
              Currently I’m learning online courses about data analytics and so
              far so good, I really enjoy solving problem and here’s my progress
              right now.
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
                  Project 1
                </h3>
                <p className="text-gray-400 text-sm">
                  Master Excel with data management, key functions, PivotTables,
                  PowerPivot, formula audits, and automation through Macros/VBA
                  for increased efficiency.
                </p>
                <a href="./images/excel.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-secondary font-bold text-accent">
                  Project 2
                </h3>
                <p className="text-gray-400 text-sm">
                  Master SQL and MySQL for roles like SQL developer and Database
                  administrator. Learn theoretical insights, best practices, and
                  practical skills with MySQL Workbench.
                </p>
                <a href="./images/sql.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-secondary font-bold text-accent">
                  Project 3
                </h3>
                <p className="text-gray-400 text-sm">
                  Master Power BI tools, including Power BI Desktop, Query
                  Editor, and Data Model. Learn data manipulation, relationship
                  building, and visualization creation for a comprehensive
                  understanding.
                </p>
                <a href="./images/powerBi.pdf" target="_blank">
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
                  Project 1
                </h3>
                <p className="text-gray-400 text-sm">
                  Master Excel with data management, key functions, PivotTables,
                  PowerPivot, formula audits, and automation through Macros/VBA
                  for increased efficiency.
                </p>
                <a href="./images/excel.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-secondary font-bold text-accent">
                  Project 2
                </h3>
                <p className="text-gray-400 text-sm">
                  Master SQL and MySQL for roles like SQL developer and Database
                  administrator. Learn theoretical insights, best practices, and
                  practical skills with MySQL Workbench.
                </p>
                <a href="./images/sql.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-tertiary rounded-lg text-gray-400">
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-secondary font-bold text-accent">
                  Project 3
                </h3>
                <p className="text-gray-400 text-sm">
                  Master Power BI tools, including Power BI Desktop, Query
                  Editor, and Data Model. Learn data manipulation, relationship
                  building, and visualization creation for a comprehensive
                  understanding.
                </p>
                <a href="./images/powerBi.pdf" target="_blank">
                  <button className="transition duration-300 ease-in w-32 py-3 border text-gray-300 border-gray-600 rounded-lg hover:bg-accent text-xs hover:text-primary">
                    View Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-32 md:py-24 bg-primary">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col gap-4 pr-12">
              <h3 className="text-accent font-bold font-secondary">
                Contact Me
              </h3>
              <h1 className="text-gray-400 font-bold text-3xl md:text-5xl">
                Get In Touch!
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                Thank you for exploring my portfolio! If you have any questions,
                collaboration ideas, or just want to connect, I'd love to hear
                from you. Here are some various ways to get in touch, Feel free
                to call me or drop me an email. I am excited to connect with you
                :)
              </p>
              <div className="flex gap-2">
                <div className="w-10 rounded-full p-1 bg-accent"></div>
                <div className="w-4 rounded-full p-1 bg-accent bg-opacity-60"></div>
                <div className="w-2 rounded-full p-1 bg-accent bg-opacity-40"></div>
              </div>
              <div className="flex mt-6 md:mt-12 items-center">
                <img src="./images/phone.svg" className="w-6" alt="" />
                <div className="ml-6">
                  <h3 className="text-gray-400 font-secondary">09093538362</h3>
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
            <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-tertiary rounded-lg p-6 md:p-12 text-gray-400">
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
