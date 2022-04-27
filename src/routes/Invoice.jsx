import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "data";

const Invoice = () => {
	const { invoiceId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const invoice = getInvoice({ number: Number(invoiceId) });
	return (
		<main style={{ padding: "1rem" }}>
			<h2>Total Due: {invoice?.amount}</h2>
			<p>
				{invoice?.name}: {invoice?.number}
			</p>
			<p>Due Date: {invoice?.due}</p>
			<p>
				<button
					onClick={() => {
						deleteInvoice({ number: invoice?.number });
						navigate("/invoices" + location.search);
					}}
				>
					Delete
				</button>
			</p>
		</main>
	);
};

export default Invoice;
