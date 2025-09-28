import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM || "StayFi <noreply@stayfi.xyz>";
const forwardTo = process.env.WAITLIST_FORWARD_TO || "info@stayfi.xyz";

export async function POST(req: NextRequest) {
    try {
        if (!resendApiKey) {
            return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
        }
        const body = await req.json();
        const email: string | undefined = body?.email?.toString();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        const resend = new Resend(resendApiKey);
        await resend.emails.send({
            from: resendFrom,
            to: [forwardTo],
            subject: "New waitlist signup",
            replyTo: email,
            text: `A new user joined the waitlist: ${email}`,
        });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}


