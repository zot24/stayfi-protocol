import { JobsBoard } from "@/components/provider/JobsBoard";

export default function ProviderJobsPage() {
    return (
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Jobs</h1>
            <JobsBoard />
        </main>
    );
}


