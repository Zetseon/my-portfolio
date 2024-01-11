import React from "react"

const RepoCard = ({ repo }) => {
	const user = repo.owner.login
	const pageURL = `https://${user}.github.io/`
	let web

	if (repo.homepage !== null && repo.homepage !== "") {
		web = repo.homepage
	} else if (repo.has_pages) {
		web = `${pageURL}${repo.name}`
	}

	let languageColor
	switch (repo.language.toLowerCase()) {
		case "python":
			languageColor = "text-txt-second"
			break
		case "javascript":
			languageColor = "text-yellow-300"
			break
		case "java":
			languageColor = "text-orange-500"
			break
		case "html":
			languageColor= "text-red-600"
			break
		default:
			languageColor = 'text-txt'
	}

	return (
		<div className="flex flex-col p-4 border rounded-lg shadow-lg drop-shadow-2xl bg-primary text-txt">
			<div className="flex flex-row justify-between gap-2 sm:gap-4">
				<div className="mr-auto">
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
						<h1 className="font-semibold underline text-txt-second">{repo.name}</h1>
					</a>
					<p className="text-third">{repo.description}</p>
				</div>

				<div className="flex flex-col sm:flex-row justify-center items-center">
					{web ? (
						<a
							href={web}
							target="_blank"
							rel="noopener noreferrer"
							className="border rounded inline-flex sm:gap-2 p-2 sm:p-3 bg-button hover:bg-fourth hover:text-primary">
							<p>Web</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					) : (
						<div></div>
					)}
					<p className={`m-2 sm:m-4 ${languageColor} `}>{repo.language}</p>
				</div>
			</div>
		</div>
	)
}

export default RepoCard
