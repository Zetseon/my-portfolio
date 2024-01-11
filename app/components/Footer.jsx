
import { GitHub, LinkedIn } from "@mui/icons-material"
function Footer() {
	return (
		<footer className="  w-full  bg-primary  mt-auto">
			<div className="flex w-full items-center justify-center gap-2 p-1 bg-primary">
				<div className="flex items-center gap-2">
					<a
						href="https://github.com/Zetseon"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded hover:bg-fourth hover:text-primary">
						<p>
							GitHub: <GitHub />
						</p>
					</a>
					<a
						href="https://www.linkedin.com/in/parthshahqc/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded hover:bg-fourth hover:text-primary">
						<p>
							LinkedIn: <LinkedIn />
						</p>
					</a>
					<a
						href="mailto: parthshah3475@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded hover:bg-fourth hover:text-primary">
						<p>Email: parthshah3475@gmail.com</p>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
