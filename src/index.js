import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Expenses, Invoices, Invoice } from "routes/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="invoices" element={<Invoices />}>
					{/* The route below serves as index route for Invoices */}
						<Route
							index
							element={
								<main style={{ padding: "1rem" }}>
									<p>Select an invoice</p>
								</main>
							}
						/>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					{/* The "*" has special meaning here. It will match only when no other routes do. */}
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
