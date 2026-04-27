import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'தொடர்பு கொள்ள | Contact Kalyana Veedu',
    description: 'கல்யாண வீடு குறித்த உங்கள் கேள்விகள், கருத்துக்கள், அல்லது பரிந்துரைகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள். 24-48 மணி நேரத்திற்குள் பதிலளிப்போம்.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
