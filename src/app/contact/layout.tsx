import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'எங்களை தொடர்பு கொள்ளுங்கள் | Contact Kalyana Veedu',
    description: 'கல்யாண வீடு குறித்த உங்கள் கேள்விகள், கருத்துக்கள் அல்லது பரிந்துரைகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள்.',
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
