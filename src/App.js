import "./App.css";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import ReactEONETMapPlotting from "./assets/ReactEONETMapPlotting.png";
import RouletteStrategy from "./assets/RouletteStrategy.png";
import TypescriptFirebase from "./assets/TypescriptFirebase.png";

function App() {
  return (
    <div className=" bg-gradient-to-r from-slate-100 to-amber-50 min-h-screen flex flex-col items-center">
      <div className=" max-w-2xl my-8 p-12 flex flex-col rounded-s text-slate-800 gap-3 text-center items-center tracking-wide">
        <h1 className="text-5xl font-semibold mx-auto ">Tomasz Marczak</h1>
        <h2 className="text-xl">electrical design | web development</h2>
        <div className="flex my-3 mr-5 gap-3 text-4xl text-slate-600">
          <a
            href="https://github.com/TomaszMarczak"
            class="hover:text-slate-800 hover:scale-110 transition-all "
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-marczak-4a12a811a/"
            class="hover:text-slate-800 hover:scale-110 transition-all "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/tomasz.marczak.50309"
            class="hover:text-slate-800 hover:scale-110 transition-all"
          >
            <FaFacebook />
          </a>
        </div>
        <h3 className="text-2xl mt-5">About me</h3>
        <p className="text-justify">
          Born in 1995. Living in Gdańsk, Poland. Graduated electrical
          engineering and management at Gdańsk University of Technology.
          Currently working in marine electrical industry as an assistant
          project manager.
        </p>
        <p className="text-justify">
          I develop my small projects as a hobby. My favourite language is
          Javascript, but I also played with C and Python. Recently I did my{" "}
          <a
            href="https://www.credly.com/badges/3325ed18-c8b2-4ea3-b982-93e1b54ded4c"
            className="underline underline-offset-4 text-cyan-700"
          >
            Professional Scrum Master Certificate.
          </a>{" "}
          I work with people on a daily basis and contact english speaking
          clients.
        </p>
        <div className="flex gap-5 text-justify w-full my-2">
          <div className="w-1/3">
            <h4 className="border-b-2 border-cyan-700">Coding skills:</h4>
            <ul className="mt-3">
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>REST</li>
              <li>Express</li>
            </ul>
          </div>

          <div className="w-1/3">
            <h4 className="border-b-2 border-cyan-700">Soft skills:</h4>
            <ul className="mt-3">
              <li>Project management</li>
              <li>Agile/Scrum</li>
              <li>Team play</li>
              <li>Quick learner</li>
            </ul>
          </div>
          <div className=" w-1/3">
            <h4 className="border-b-2 border-cyan-700">Other skills:</h4>
            <ul className="mt-3">
              <li>Excel</li>
              <li>AutoCAD</li>
            </ul>
          </div>
        </div>
        <h3 className="text-2xl mt-5">Latest projects</h3>
        <a
          href="https://tomaszmarczak.github.io/firebase-auth-typescript/"
          className="w-full"
        >
          <div className="text-justify p-3 shadow-xl border border-cyan-700 rounded-xl">
            <span className="text-lg font-semibold">
              Firebase Auth & Storage
            </span>
            <p>
              Typescript app that allows user to register with email/password
              through Firebase. Beside obvious login feature, there is also
              possibility to retrieve password and edit basic user information
              or add profile picture through Firebase Storage.
            </p>
            <img
              src={TypescriptFirebase}
              className="rounded-xl mt-2"
              alt="Firebase Auth Preview"
            />
          </div>
        </a>
        <a
          href="https://tomaszmarczak.github.io/roulette-strategy/"
          className="w-full"
        >
          <div className="text-justify p-3 shadow-xl border border-cyan-700 rounded-xl">
            <span className="text-lg font-semibold">Roulette Strategies</span>
            <p>
              App created with Typescript to simulate different roulette
              strategies. Frontend created using React, MaterialUI and ReChart.
              History of gameplay is shown on dynamic table and graph.
            </p>
            <img
              src={RouletteStrategy}
              className="rounded-xl mt-2"
              alt="Roulette Strategies Preview"
            />
          </div>
        </a>
        <a
          href="https://tomaszmarczak.github.io/react-eonet-map-plotting/"
          className="w-full"
        >
          <div className="text-justify p-3 shadow-xl border border-cyan-700 rounded-xl">
            <span className="text-lg font-semibold">
              REACT EONET Map Plotting
            </span>
            <p>
              Application that displays current weather events using EONET API,
              React Leaflet Map and some simple bootstrap components. Each event
              can show some details about event after clicking on it.
            </p>
            <img
              src={ReactEONETMapPlotting}
              className="rounded-xl mt-2"
              alt="REACT Eonet Map Plotting Preview"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
