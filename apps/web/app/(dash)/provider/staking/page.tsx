import { StakeSlider } from "@/components/common/StakeSlider";

export default function ProviderStakingPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Staking</h1>
            <StakeSlider userId="provider_01" initial={1} />
        </main>
    );
}



