"use client"
import { useEffect, useState } from "react"
const CourseCard = ({ course }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Set the visibility to true after the component has mounted
		setIsVisible(true)
	}, [])



	return (
		<div
			className={`bg-primary text-txt rounded-lg mt-2 shadow-xl transition-transform duration-700 ease-in-out transform ${
				isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
			} `}>
			<div className="flex flex-col border rounded-lg p-5 gap-5  mt-2 ">
				<div>
					<div className="flex sm:flex-row justify-between gap-2 ">
						<h2>
							<span className="font-semibold underline text-txt-second">{course.degree}</span> in{" "}
							<span className="italic font-medium">{course.major}</span>
						</h2>
						<p className="text-right text-third">{course.startmonth} {course.startyear} - {course.endmonth} {course.endyear}</p>
					</div>
					<span className="font-medium ">{course.school}</span>
				</div>
				<div className="flex flex-col">
					<h1 className="text-txt">Relevant Coursework:</h1>
					<ul className="flex flex-col flex-wrap items-start text-sm sm:flex-row sm:list-none">
						{course["relevant coursework"].map((coursework, index) => (
							<li key={index} className="list-item mr-1 text-third">
								{coursework}
								{index < course["relevant coursework"].length - 1 ? (
									<span className="hidden sm:inline-flex gap-1"> , </span>
								) : (
									<span>.</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
