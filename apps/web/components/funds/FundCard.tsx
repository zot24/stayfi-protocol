import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropertyFund } from "@/mocks/schemas";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export function FundCard({ fund }: { fund: PropertyFund }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base flex items-center justify-between">
                    <span>{fund.name}</span>
                    <span className="text-sm text-muted-foreground">APY {(fund.teaserApy * 100).toFixed(0)}%</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={fund.history} margin={{ left: 0, right: 0, top: 4, bottom: 0 }}>
                            <Tooltip formatter={(v: number) => v.toFixed(3)} labelFormatter={() => "NAV"} />
                            <Line type="monotone" dataKey="nav" stroke="#22c55e" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-2">TVL ${(fund.tvl / 1_000_000).toFixed(2)}m · Price ${fund.price.toFixed(2)}</p>
            </CardContent>
        </Card>
    );
}


