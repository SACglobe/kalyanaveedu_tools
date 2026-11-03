import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Social preview card. Latin text only: the default OG font has no Tamil glyphs, so Tamil titles use their English names.
export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #8B1A1A 0%, #C2410C 60%, #F59E0B 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: 2, opacity: 0.9 }}>KALYANA VEEDU</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
          <div style={{ display: 'flex', fontSize: 38, marginTop: 24, opacity: 0.92 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, opacity: 0.85 }}>www.kalyanaveedu.in</div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
