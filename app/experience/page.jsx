
'use client'
import CourseCard from "../components/CourseCard"
import CertificationCard from "../components/CertificationCard"
import { certifications,education } from "../varData"
import Typewriter from 'typewriter-effect'

const InfoPage = () => {
	return (
		<div className="flex flex-col gap-2 justify-center w-full h-full px-10  ">
			<div className="flex flex-col rounded-2xl p-5 items-start">
				<h1 className="ml-1 text-xl font-bold text-primary"><Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Education")
								.start()
						}}
					/></h1>
				<div>
					{education.map((entry, index) => (
						<CourseCard key={index} course={entry} />
					))}
				</div>
			</div>
			<div className="flex flex-col p-5 items-start">
				<h1 className="ml-1 text-xl font-bold text-primary"><Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Certifications")
								.start()
						}}
					/></h1>
				<div>
					{certifications.map((entry, index) => (
						<CertificationCard key={index} certifications={entry} />
					))}
				</div>
			</div>
		</div>
	)
}

export default InfoPage
