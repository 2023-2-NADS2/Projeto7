import Footer from '../src/components/footer'
import Header from '../src/components/header'
import App from '../src/components/homePage/index'
import VLibras from '@djpfs/react-vlibras'

export default function Home() {
  return (
    <div>
      <Header />
      <App />
      <Footer />
      <VLibras />
    </div>
  )
}