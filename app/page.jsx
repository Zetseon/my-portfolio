"use client"
import Image from "next/image"
import profile from "../public/profile.jpg"
import { skills } from "./varData"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"

const languages = skills.languages
const webDev = skills.webDev

export default function Home() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Set the visibility to true after the component has mounted
		setIsVisible(true)
	}, [])

	return (
		<main className=" flex flex-col my-auto gap-2 sm:gap-4 md:gap-6 ">
			<div className={` justify-center items-center w-full h-full md:px-8 lg:px-20`}>
				<h1 className="text-xl sm:text-2xl font-bold text-center sm:text-start mb-2 sm:mb-4 text-primary">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString("About Me").start()
						}}
					/>
				</h1>
				<div
					className={`flex flex-col sm:flex-row border sm:items-center gap-5 md:gap-10 shadow-xl rounded-xl bg-primary p-4 transition-transform duration-700 ease-in-out transform ${
						isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
					}`}>
					<div className="flex justify-center">
						<Image
							alt="Profile picture"
							src={profile}
							width={400}
							height={400}
							style={{ objectFit: "cover" }}
							priority={true}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col items-center sm:w-3/4 p-2">
						<h1 className="text-sm sm:text-md text-left mb-2 sm:mb-4 lg:mb-8 text-txt">
							Hey there! I'm Parth Shah, a recent graduate eager about venturing into
							the world of software development. I have an insatiable curiosity, a
							love for learning, and a knack for problem-solving that keeps me on my
							toes. In the past year, I've dived into and made myself familiar with
							JavaScript, ReactJS, NextJS, Tailwind, and Bootstrap. Let's connect on
							LinkedIn and chat about how I can bring my energy and skills to
							contribute to your team's success!
						</h1>

						<a
							href="./parth_shah_resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 px-6 py-3 bg-button text-white rounded-lg hover:bg-fourth hover:text-primary hover:cursor-pointer focus:outline-solid focus:ring focus:border-teal-300">
							Resume
						</a>
					</div>
				</div>
			</div>
			{/* Skills Section */}
			<div className="flex flex-col justify-center w-full h-full md:px-8 lg:px-20 ">
				<h1 className="text-xl sm:text-2xl font-bold text-center sm:text-start mb-2 sm:mb-4 text-primary">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString("Skills").start()
						}}
					/>
				</h1>

				{/* Improved Skills Layout */}
				<div className="flex flex-col sm:flex-row gap-4">
					{/* Web Development Skills */}
					<div
						className={`flex flex-col sm:w-1/2 border sm:items-center gap-2 shadow-lg rounded-xl bg-primary p-4 transition-transform duration-700 ease-in-out transform ${
							isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
						}`}>
						<h2 className="text-lg font-bold text-txt mb-2">Web Development:</h2>
						{/* Display Web Dev skills in a more structured way */}
						<div className="flex flex-wrap gap-2">
							{webDev.map((skill, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-button text-txt rounded-md">
									{skill}
								</span>
							))}
						</div>
					</div>

					{/* Programming Languages Skills */}
					<div
						className={`flex flex-col sm:w-1/2 border sm:items-center gap-2 shadow-lg rounded-xl bg-primary p-4 transition-transform duration-700 ease-in-out transform ${
							isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
						}`}>
						<h2 className="text-lg font-bold text-txt mb-2">Languages:</h2>
						{/* Display Language skills in a more structured way */}
						<div className="flex flex-wrap gap-2">
							{languages.map((skill, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-button text-txt rounded-md">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
