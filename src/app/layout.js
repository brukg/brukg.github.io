import './globals.css'
import { THEME, themes } from '../data/themes'

const themeVars = themes[THEME] || themes.teal;
const themeStyle = `:root { ${Object.entries(themeVars).map(([k, v]) => `${k}: ${v}`).join('; ')}; }`;

export const metadata = {
  title: 'Bruk Gebregziabher | Robotics & AI Engineer',
  description: 'Robotics Engineer specializing in autonomous navigation, SLAM, and Vision-Language-Action models for humanoid and mobile robots.',
  keywords: ['robotics', 'AI', 'SLAM', 'ROS2', 'autonomous navigation', 'VLA', 'humanoid robots'],
  authors: [{ name: 'Bruk Gebregziabher' }],
  openGraph: {
    title: 'Bruk Gebregziabher | Robotics & AI Engineer',
    description: 'Robotics Engineer specializing in autonomous navigation, SLAM, and Vision-Language-Action models.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStyle }} />
      </head>
      <body className="bg-grid min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-[var(--accent-dim)] via-transparent to-transparent pointer-events-none" />
        {children}
      </body>
    </html>
  )
}
