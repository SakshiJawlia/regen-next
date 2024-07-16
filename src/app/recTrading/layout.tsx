import Navbar from "@/components/Navbar/Navbar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <Navbar/>
        {children}
        </section>
  }