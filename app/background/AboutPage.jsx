"use client"
import Image from "next/image"
import React from "react"
import profile from "../../public/profile.jpg"
import Typewriter from "typewriter-effect"
const AboutPage = () => {
	return (
		<div className=" flex items-center justify-center w-full h-full p-10">
			<div className="flex flex-col sm:flex-row border sm:items-center gap-5 sm:w-4/5 md:gap-10 shadow-lg rounded-xl bg-slate-800">
				<div className="">
					<Image
					alt="Profile picture"
						src={profile}
						width={500}
						height={500}
						objectFit="cover"
						className="rounded-full"
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col items-center border text-center">
					<h1 className="text-sm ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h1>
					<button className="mt-2">Click here</button>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
