import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
title: 'GNK Associates',
description: 'Independent real estate & asset advisory for hotels, land, industrial and renewable energy transactions in India.'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-white text-slate-800">
<Providers>
<Header />
  <main className="min-h-[70vh]">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
<Footer />
</Providers>
</body>
</html>
)
}
