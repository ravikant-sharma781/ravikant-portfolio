"use client"
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import aspectratio from '@tailwindcss/aspect-ratio';
import videoEditing from '../public/videoediting.json';
import webdesign from '../public/webdesign.json';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { Html5Original, Css3Original, JavascriptOriginal, GithubOriginal, ReactOriginal, TailwindcssOriginal, NodejsOriginal, CplusplusOriginal, MysqlOriginal, MongodbOriginal, NextjsOriginal } from 'devicons-react'
import photo from '../public/me.png';
import video from '../public/video-marketing.png';
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Ecoleaf from '../public/Ecoleaf.png'
import gpt3 from '../public/GPT3.png'
import restaurant from '../public/Restaurant.png'
import taskList from '../public/taskList.png'
import youtube from '../public/youtube.png'
import portfolio from '../public/portfolioimg.png'


export default function Home() {

  const [darkMode, SetDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* <div className="new-cursor"></div> */}
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white select-none snap-mandatory snap-y">

        {/* Section one */}
        <section className="min-h-screen">
          {/* Navigation */}
          <div className="py-10 mb-12 flex justify-start">
            <div>
              <BsFillMoonStarsFill onClick={() => SetDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
            </div>
            <div>
              <a className="text-teal-700 dark:hover:text-gray-800 dark:text-teal-700 hover:text-white border border-teal-700 dark:border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded ml-8 hover:text-black dark:hover:text-white" href="https://drive.google.com/file/d/1cd5V1-rhThj9JDt8JK6U9nbzXn1Ict1C/view?usp=sharing" target="_blank">Resume</a>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="">
              <div className="mt-28">
                <div><p className="text-xl px-1 text-teal-600">Hi! <span>👋</span></p></div>
                <div><h1 className="text-5xl py-2 font-medium md:text-6xl">I'm <span className="text-teal-600">Ravikant Sharma</span></h1>
                </div>
                <div>
                  <TypeAnimation
                    sequence={[
                      "A Frontend Developer",
                      2000,
                      "A Software Developer",
                      2000,
                      "A Graphic Designer",
                      2000,
                      "A Content Creator",
                      2000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity} />
                </div>

                <div className="text-4xl flex flex-row justify-start gap-10 pt-20 text-gray-600 dark:text-gray-400">
                  <a href="https://www.linkedin.com/in/ravikant-sharma-sde/" className="cursor-pointer dark:hover:text-gray-300 transition ease-out delay-150 hover:-translate-y-1 duration-300" target={"_blank"}><AiFillLinkedin /></a>
                  <a href="https://github.com/ravikant-sharma781" className="cursor-pointer dark:hover:text-gray-300 transition ease-out delay-150 hover:-translate-y-1 duration-300" target={"_blank"}><AiFillGithub /></a>
                  <a href="https://twitter.com/Ravikant_shr" className="cursor-pointer dark:hover:text-gray-300 transition ease-out delay-150 hover:-translate-y-1 duration-300" target={"_blank"}><AiFillTwitterCircle /></a>
                  <a href="https://www.youtube.com/@ravikantsharma550" className="cursor-pointer dark:hover:text-gray-300 transition ease-out delay-150 hover:-translate-y-1 duration-300" target={"_blank"}><AiFillYoutube /></a>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
              <Image src={photo} layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>

        {/* skills */}
        <section className="h-full mb-20 snap-center">
          <div className="py-10">
            <div>
              <h3 className="text-3xl w-24 pt-1 border-b border-teal-400">Skills</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                My focused technologies: <span className="text-teal-500">current area of proficiency</span>            </p>
            </div>

            <div className="flex flex-wrap gap-10 pt-10">
              <div title="HTML" className="dark:bg-gray-800 rounded-xl p-5  bg-gray-300 transition hover:-translate-y-1"><Html5Original color="red" size="60" /></div>
              <div title="CSS" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><Css3Original color="red" size="60" /></div>
              <div title="Tailwind CSS" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><TailwindcssOriginal color="red" size="60" /></div>
              <div title="JavaScript" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><JavascriptOriginal color="red" size="60" /></div>
              <div title="ReactJS" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><ReactOriginal color="red" size="60" className="animate-spin" /></div>
              <div title="NextJS" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><NextjsOriginal color="red" size="60" className="" /></div>
              <div title="NodeJS" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><NodejsOriginal color="red" size="60" className="" /></div>
              <div title="MongoDB" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><MongodbOriginal color="red" size="60" /></div>
              <div title="C++" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><CplusplusOriginal color="red" size="60" /></div>
              <div title="My SQL" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><MysqlOriginal color="red" size="60" /></div>
              <div title="GitHub" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><GithubOriginal color="red" size="60" /></div>
              <div title="Video Editing" className="dark:bg-gray-800 rounded-xl p-5 bg-gray-300 transition hover:-translate-y-1"><Image src={video} width={55} height={55} className="" /></div>
            </div>
          </div>
        </section>




        {/* Projects */}
        <section className="section2 snap-center">
          <div>
            <h3 className="text-3xl pt-3 w-64 border-b border-teal-400">My Recent Work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Here are some of my Development projects I've worked on.
            </p>
          </div>

          <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={Ecoleaf} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">EcoLeaf: Health tracker app</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">HTML | CSS | JavaScript</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://octanet.netlify.app/" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://github.com/ravikant-sharma781/Fitness_tracker_landing_page" target="_blank">Check on GitHub</a></div>
              </div>
            </div>

            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={gpt3} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">Modified frontend of chatGPT-3</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">React.js | Tailwind CSS | Javascript</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://gpt3modified.netlify.app/" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://github.com/ravikant-sharma781/Modified_GPT3" target="_blank">Check on GitHub</a></div>
              </div>
            </div>

            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={restaurant} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">Gericht: Restaurant Website</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">React.js | Tailwind CSS | JavaScript</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://restaurantfrontent.netlify.app/" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://github.com/ravikant-sharma781/restaurant" target="_blank">Check on GitHub</a></div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={taskList} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">Multi color ToDO list</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">HTML | CSS | JavaScript</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://jazzy-semolina-da3e08.netlify.app/" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="" target="_blank">Check on GitHub</a></div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={youtube} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">YouTube Clone with Searching and Auto Suggestion</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">React.Js | Restful API | Tailwind | JavaScript</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://joyful-fox-40983e.netlify.app/" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://github.com/ravikant-sharma781/youtubeClone" target="_blank">Check on GitHub</a></div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div>
                <div>
                  <Image src={portfolio} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
                </div>
                <div>
                  <h2 className="text-xl pt-5">Personal Portfolio</h2>
                  <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">Next.Js | Tailwind | JavaScript | Vercel | HTML | CSS</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="" target="_blank">Live Preview</a></div>
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="" target="_blank">Check on GitHub</a></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="snap-center">
          <div className="mt-20">
            <h1 className="text-3xl pt-3 w-60 border-b border-teal-400">
              Services I offer
            </h1>
          </div>
          <div className="">
            <div className="flex justify-around  items-center">
              <div className="flex justify-center w-1/2">
                <Lottie animationData={videoEditing} style={{ height: 400, width: 400, }} />
              </div>
              <div className="w-2/4">
                <h3 className="text-2xl mb-2">Video Editing</h3>
                <p className="text-md pt-3 leading-6 text-gray-800 dark:text-gray-400">Get your videos edited just the way you want! I'll craft something amazing that's easy to watch and looks fantastic. Let's make your content stand out!</p>
              </div>
            </div>

            <div className="flex justify-around p-10 items-center">
              <div className="w-2/4">
                <h3 className="text-2xl mb-2">Web Development</h3>
                <p className="text-md pt-3 leading-6 text-gray-800 dark:text-gray-400">Get a website made just for you! I'll create something awesome that's easy to use and looks great. Let's make your online presence shine!</p>
              </div>
              <div className="flex justify-center w-1/2">
                <Lottie animationData={webdesign} style={{ height: 400, width: 400 }} />
              </div>
            </div>

          </div>
        </section>

        <section className="snap-center">
          <div>
            <h3 className="text-3xl pt-3 mt-10 w-36 border-b border-teal-400">YouTube</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Self-managed videos from my YouTube channel, entirely overseen and handled by me.
            </p>
          </div>
          <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div className="aspect-w-9 aspect-h-5 w-full">
                <iframe src="https://www.youtube.com/embed/bnkL-MIMNnc?start=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <h2 className="text-xl pt-5">A.I Models</h2>
                {/* <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">Learn how to create a Course Listing API using React.js, Tailwind CSS, Express.js, Node.js, and MongoDB.</p> */}
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://youtu.be/bnkL-MIMNnc?si=NWIZqwOKvmd6B0OW" target="_blank">Watch on YouTube</a></div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div class="aspect-w-9 aspect-h-5 w-full">
                <iframe src="https://www.youtube.com/embed/HliYUl-UCTc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <h2 className="text-xl pt-5">C++ Vs Java</h2>
                {/* <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">Learn how to create a Course Listing API using React.js, Tailwind CSS, Express.js, Node.js, and MongoDB.</p> */}
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://www.youtube.com/watch?v=HliYUl-UCTc&t=8s" target="_blank">Watch on YouTube</a></div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 border border-gray-700 p-7 rounded-3xl flex flex-col justify-between shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
              <div class="aspect-w-9 aspect-h-5 w-full">
                <iframe src="https://www.youtube.com/embed/Jb0MNpjlFPU" frameborder="0" allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <h2 className="text-xl pt-5">Venture Capital</h2>
                {/* <p className="text-sm pt-3 leading-6 text-gray-800 dark:text-gray-400">Learn how to create a Course Listing API using React.js, Tailwind CSS, Express.js, Node.js, and MongoDB.</p> */}
              </div>
              <div className="flex flex-col lg:flex-row gap-5 justify-around pt-10">
                <div><a className="text-teal-700 hover:text-white dark:hover:text-gray-800 border border-teal-700 hover:bg-gradient-to-r from-cyan-500 to-teal-500 font-medium px-3.5 py-1.5 rounded-3xl my-5" href="https://www.youtube.com/shorts/Jb0MNpjlFPU" target="_blank">Watch on YouTube</a></div>
              </div>
            </div>
          </div>

        </section>



        <footer className="snap-center">
          <div>

          </div>
          <hr className="mt-20" />
          <div className="flex flex-col lg:flex-row md:flex-row items-center justify-around">
            <div className="p-3">
              <p className="text-md text-teal-500 leading-8">Feel free to Contact me :)</p>
              <p className="text-sm mt-0 text-gray-800 dark:text-gray-400 leading-5">ravikants781@gmail.com <br /> +91 8295463550</p>
            </div>
            <div className="">
              <p className="text-sm text-center text-gray-800 dark:text-gray-400">2024 - Ravikant Sharma, All rights reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
