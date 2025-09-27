import { StakeSlider } from "@/components/common/StakeSlider";

export default function HostStakingPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Host staking</h1>
            <StakeSlider userId="host_01" initial={2} />
        </main>
    );
}




