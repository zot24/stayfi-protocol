import type { Portfolio, PropertyFund } from "@/mocks/schemas";

export function PortfolioTable({ portfolio, funds }: { portfolio: Portfolio; funds: PropertyFund[] }) {
	return (
		<table className="w-full text-sm">
			<thead className="text-left">
				<tr>
					<th className="py-2">Fund</th>
					<th>Units</th>
					<th>Price</th>
					<th>Value</th>
					<th>Cost Basis</th>
					<th>Unrealized PnL</th>
				</tr>
			</thead>
			<tbody>
				{portfolio.positions.map((p) => {
					const fund = funds.find((f) => f.id === p.fundId);
					const price = fund?.price ?? 1;
					const value = p.units * price;
					const pnl = value - p.costBasis;
					return (
						<tr key={p.fundId} className="border-t">
							<td className="py-2">{fund?.name ?? p.fundId}</td>
							<td>{p.units}</td>
							<td>${price.toFixed(2)}</td>
							<td>${value.toFixed(2)}</td>
							<td>${p.costBasis.toFixed(2)}</td>
							<td className={pnl >= 0 ? "text-emerald-600" : "text-red-600"}>${pnl.toFixed(2)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}




