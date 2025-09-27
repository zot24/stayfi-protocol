import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export function PriceBreakdown({ subtotal, splits }: { subtotal: number; splits: { host: number; providers: number; protocol: number; reserve: number } }) {
    const data = [
        { name: "host", value: splits.host },
        { name: "providers", value: splits.providers },
        { name: "protocol", value: splits.protocol },
        { name: "reserve", value: splits.reserve },
    ];
    const colors = ["#22c55e", "#06b6d4", "#a855f7", "#f59e0b"];
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Price breakdown</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
                <div className="h-40 w-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" nameKey="name" innerRadius={48} outerRadius={72}>
                                {data.map((_, i) => (
                                    <Cell key={i} fill={colors[i % colors.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-sm">
                    <p>Subtotal: ${subtotal.toLocaleString()}</p>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>Host: ${splits.host}</li>
                        <li>Providers: ${splits.providers}</li>
                        <li>Protocol: ${splits.protocol}</li>
                        <li>Reserve: ${splits.reserve}</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}


