"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"


const Navbar = () => {
	const path = usePathname()
	return (
		<nav className="flex w-full justify-between bg-primary">
			<div className="flex w-full items-center justify-center gap-2 p-1 bg-primary">
				<Link href="/">
					<div
						className={`${
							path === "/"
								? "rounded bg-fourth text-primary p-3 outline outline-2 ring-2 outline-third"
								: "rounded hover:bg-fourth p-3 hover:text-primary"
						}`}>
						Background
					</div>
				</Link>
				<Link href="/experience">
					<div
						className={`${
							path === "/experience"
								? "rounded bg-fourth text-primary p-3 outline outline-2 ring-2 outline-third"
								: "rounded hover:bg-fourth p-3 hover:text-primary"
						}`}>
						Education & Experience
					</div>
				</Link>
				<Link href="/projects">
					<div
						className={`${
							path === "/projects"
								? "rounded bg-fourth text-primary p-3 outline outline-2 ring-2 outline-third"
								: "rounded hover:bg-fourth p-3 hover:text-primary"
						}`}>
						Projects
					</div>
				</Link>
			</div>
			
		</nav>
	)
}

export default Navbar
