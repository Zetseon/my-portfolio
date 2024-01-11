"use client"
import { useEffect, useState } from "react"
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded"
const CertificationCard = ({ certifications }) => {
	const [isVisible, setIsVisible] = useState(false)
	useEffect(() => {
		// Set the visibility to true after the component has mounted
		setIsVisible(true)
	}, [])
	return (
		<div
			className={`rounded-lg bg- bg-primary text-txt mt-2 shadow-xl transition-transform duration-500 ease-in-out transform ${
				isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
			} `}>
			<div className="flex flex-col border rounded-lg w-full p-5 gap-5 mt-2  ">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 md:gap-64 ">
					<h1 className="text-txt font-semibold">{certifications.certification}</h1>
					<p className="text-right text-third">{certifications.issuedDate}</p>
				</div>
				<div className="flex flex-col sm:flex-row items-center sm:gap-2 ">
					<h1>Issued By: </h1>
					<a
						href={certifications.link}
						target="_blank"
						className="bg-button p-2 rounded-lg hover:bg-fourth hover:text-primary">
						<span>{certifications.issuedBy} </span>
						<LaunchRoundedIcon />
					</a>
				</div>
			</div>
		</div>
	)
}

export default CertificationCard
