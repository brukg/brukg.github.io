import './globals.css'

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
      <body className="bg-grid min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-[#00d4aa10] via-transparent to-[#1a003010] pointer-events-none" />
        {children}
      </body>
    </html>
  )
}
