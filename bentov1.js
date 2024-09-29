// import Image from "next/image"
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, User,Server,Link, MapPin } from "lucide-react"
import './tailw.css'
import './aboutme.css'
import svgs from './skills/skillsvgs'
import Education from "./education/Education"

export default function AboutPageBento() {
    let skillarr=['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'NodeJS']
  return (
    <div className="min-h-screen py-4 px-4 w-[90%] h-[100vh] mx-auto" style={{ backgroundColor: '#1C1C22'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 lg:grid-rows-10 gap-3 max-w-6xl w-[100%] h-[100%] mx-auto">

        {/* Intro - Large box spanning 2 rows and 2 columns */}
        <div className="md:col-span-4 md:row-span-7 hover:rounded-3xl p-8 text-gray-100 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero" style={{ backgroundColor: '#27272c' }}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center mb-6">
                {/* <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="John Doe"
                  style={{width: '50px', height: '50px', display: 'block'}}
                  className="rounded-full border-4 border-gray-700 mr-4"
                /> */}
                <div>
                  <h2 className="text-3xl font-bold">John Doe</h2>
                  <p className="text-xl text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-lg mb-4 text-gray-300">
                Passionate about creating seamless user experiences and scalable web applications. With 5 years of industry experience, I bring creativity and technical expertise to every project.
              </p>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="md:col-span-1 md:row-span-5 hover:rounded-3xl p-6 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero" style={{ backgroundColor: '#27272c' , display: 'flex', flexDirection: 'column'}}>
          {/* <h2 className="text-xl font-semibold mb-4 text-gray-100 flex items-center">
            <User className="mr-2" /> Connect
          </h2> */}
          <div className="flex flex-col grow  justify-between"> {/*hover:grow-0 */}
            <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors flex flex-col items-center group">
              <Github color="#3e9392" size={24} className="group-hover:scale-110 transition-transform duration-100" />
              <span className="mt-1 text-xs">GitHub</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors flex flex-col items-center group">
              <Linkedin color="#3e9392" size={24} className="group-hover:scale-110 transition-transform duration-100" />
              <span className="mt-1 text-xs">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors flex flex-col items-center group">
              <Mail color="#3e9392" size={24} className="group-hover:scale-110 transition-transform duration-100" />
              <span className="mt-1 text-xs">Email</span>
            </a>
          </div>
        </div>

        {/* Project - Small box */}
        <div className="md:col-span-5 md:row-span-5 hover:rounded-3xl p-6 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero" style={{ backgroundColor: '#27272c'}}>
          <h2 className="text-xl font-semibold mb-3 text-gray-100 flex items-center">
            <GraduationCap className="mr-2" /> Projects
          </h2>
          <div>
            <p className="font-medium text-gray-100">BSc in Computer Science</p>
            <p className="text-sm text-gray-400">University of Technology | 2014 - 2018</p>
          </div>
        </div>

        {/* Skills - Medium box spanning 2 columns */}
        <div className=" md:col-span-3 md:row-span-5 hover:rounded-3xl p-3 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero" style={{ backgroundColor: '#27272c'}}>
            <div className="flex flex-col h-full border border-[1px]">
                <h2 className="text-2xl font-semibold text-gray-100 flex items-center">
                    <Code className="mr-2" /> Skills
                </h2>
                <div className="flex h-full p-3 gap-[5px]">
                    <div className="h-[80%] grow flex flex-col gap-[5px]">
                        <button
                        key='Frontend Developer'
                        //   onClick={() => setActiveSkill(skill)}
                        className={`p-2 border border-[1px] border-red-500 rounded-lg transition-all duration-300 flex flex-col`}
                        >
                        <span className="text-xl text-gray-100 flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded-xl" ><Code className="mr-2" /> Frontend</span>
                        {/* <span className="mt-2 text-sm font-medium">Front</span> */}
                        </button>
                        <button
                        key='Frontend Developer'
                        //   onClick={() => setActiveSkill(skill)}
                        className={`p-2 border border-[1px] border-red-500 rounded-lg transition-all duration-300 flex flex-col`}
                        >
                        <span className="text-xl text-gray-100 flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded-xl" ><Server className="mr-2" /> Backend</span>
                        {/* <span className="mt-2 text-sm font-medium">Front</span> */}
                        </button>
                        <button
                        key='Frontend Developer'
                        //   onClick={() => setActiveSkill(skill)}
                        className={`p-2 border border-[1px] border-red-500 rounded-lg transition-all duration-300 flex flex-col`}
                        >
                        <span className="text-xl text-gray-100 flex items-center p-2 bg-gray-700 hover:bg-gray-600 rounded-xl" ><Link className="mr-2" /> Blockchain</span>
                        {/* <span className="mt-2 text-sm font-medium">Front</span> */}
                        </button>
                    </div>
                    <div className="flex flex-col p-5 gap-[10px]">
                        <p>html</p>
                        <p>html</p>
                        <p>html</p>
                        <p>html</p>
                        <p>html</p>
                        {/* {svgs.map((svg, index) => (
                            <div key={index} className="svgcontainer hover:rounded-xl w-[30px] h-[30px] p-[5px] border border-[2px] border-solid border-customTeal" style={{fill: 'white'}}
                            dangerouslySetInnerHTML={{ __html: svg }} title={skillarr[index]}
                            /> 
                            ))} */}
                    </div>
                </div>
            </div>
        </div>

        {/* Experience - Medium box spanning 2 columns */}
        <div className="md:col-span-3 md:row-span-5 hover:rounded-3xl p-6 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero" style={{ backgroundColor: '#27272c'}}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-100">Senior Web Developer</p>
              <p className="text-sm text-gray-400">TechCorp Inc. | 2020 - Present</p>
            </div>
            <div>
              <p className="font-semibold text-gray-100">Full Stack Developer</p>
              <p className="text-sm text-gray-400">WebSolutions Ltd. | 2018 - 2020</p>
            </div>
          </div>
        </div>

        {/* Education - Small box */}
        <div className="md:col-span-4 md:row-span-3 hover:rounded-3xl p-4 shadow-lg transition-all duration-100 hover:shadow-xl hover:scale-[1.01] shdwbyhero borderonhoverbyhero" style={{ backgroundColor: '#27272c' }}>
            <div className="flex flex-col gap-[5px]">    
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                    <GraduationCap className="mr-2" /> Education
                </h2>
                <div>
                    {/* <p className="font-medium text-gray-100">BSc in Computer Science</p>
                    <p className="text-sm text-gray-400">University of Technology | 2014 - 2018</p> */}

                    <Education/>
                </div>
            </div>
        </div>
        

      </div>
    </div>
  )
}