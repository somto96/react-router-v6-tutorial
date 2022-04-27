import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { invoices } from "data";

const Invoices = () => {
	/**
	 * Search params are like URL params but they sit in a different position in the URL.
	 * Instead of being in the normal URL segments separated by /, 
	 * they are at the end after a ?. 
	 * You've seen them across the web like 
	 * "/login?success=1" or "/shoes?brand=nike&sort=asc&sortby=price".
	 * 
	 * setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
	 * 
	 * credit: https://reactrouter.com/docs/en/v6/getting-started/tutorial (React Router V6)
	 */
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<div style={{ display: "flex" }}>
			<nav
				style={{
					borderRight: "solid 1px",
					padding: "1rem",
				}}
			>
				<input
					value={searchParams.get("filter") || ""}
					onChange={(event) => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>
				{invoices
					.filter((invoice) => {
						let filter = searchParams.get("filter");
						if (!filter) return true;
						let name = invoice?.name?.toLowerCase();
						return name.startsWith(filter?.toLowerCase());
					})
					.map((invoice) => (
						<>
							{/* 
							NavLinks are active links.
							Active links are used to display 
							the link as the active link 
							the user is looking at.
						 */}
							<NavLink
								style={({ isActive }) => {
									return {
										display: "block",
										margin: "1rem 0",
										color: isActive ? "red" : "",
									};
								}}
								to={`/invoices/${invoice.number}`}
								key={invoice.number}
							>
								{invoice.name}
							</NavLink>
						</>
					))}
			</nav>
			<Outlet />
		</div>
	);
};

export default Invoices;
