"use client"
import RepoCard from "../components/RepoCard"
import useFetch from "../components/hooks/useFetch"
import { CircularProgress, Backdrop } from "@mui/material"
const ProjectPage = () => {
	const apiUrl = "https://api.github.com/users/Zetseon/repos" 

	const { data, loading, error } = useFetch(apiUrl)
	const sortedData = data ? [...data].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)) : null;
	if (loading) {
		return (
			<div className="flex justify-center text-center my-auto ">
				<Backdrop className="z-10 text-white" open={true}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
		)
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div>
			{/* Display your fetched data */}
			{sortedData && (
				<div className=" gap-2 flex flex-col flex-auto p-4">
					{sortedData.map((repo) => (
						<RepoCard key={repo.id} repo={repo} />
					))}
				</div>
			)}
		</div>
	)
}

export default ProjectPage
