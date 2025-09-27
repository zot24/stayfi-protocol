import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Stay } from "@/mocks/schemas";
import { priceWithStake } from "@/lib/econ";

export function StayCard({ stay }: { stay: Stay }) {
    const nightly = priceWithStake(stay.baseNightly, stay.hostStakeLevel);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">
                    {stay.title}
                    <span className="ml-2 text-sm text-muted-foreground">· {stay.city}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p>${nightly}/night</p>
                        <p className="text-muted-foreground">Rating {stay.rating} ({stay.reviews})</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">Stake level {stay.hostStakeLevel}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


