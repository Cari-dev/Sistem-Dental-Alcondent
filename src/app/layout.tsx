import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Alcondent",
  description: "Pagina web de la Clinica Dental Alcondent en La Paz, Bolivia el cual brinda sercicios de odontologia general, ortodoncia, endodoncia, periodoncia, implantologia y cirugia oral.",
  keywords: ["Alcondent", "Clinica Dental", "Odontologia", "Ortodoncia", "Endodoncia", "Periodoncia", "Implantologia", "Cirugia Oral", "La Paz", "Bolivia"],
  icons:{
    icon:"/images/alcondent-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
