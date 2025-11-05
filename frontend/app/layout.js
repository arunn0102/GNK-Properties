import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Providers from "./Providers";

export const metadata = {
title: 'GNK Associates',
description: 'Independent real estate & asset advisory for hotels, land, industrial and renewable energy transactions in India.'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-white text-slate-800">
<Header />
<Providers>
          <main className="min-h-[70vh]">{children}</main>
        </Providers>
<Footer />
</body>
</html>
)
}
