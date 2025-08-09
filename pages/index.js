import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px', textAlign: 'center', color: '#00ffd5' }}>
        <h1>Digital Smart Revise Technology (DSRT)</h1>
        <p>Menghadirkan solusi digital pintar untuk transformasi bisnis yang efisien dan inovatif.</p>
        <Link href="/login">
          <a style={{
            backgroundColor: '#ffcb05',
            color: '#000',
            padding: '16px 36px',
            borderRadius: '40px',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px',
          }}>
            Coba Sekarang
          </a>
        </Link>
      </main>
      <Footer />
    </>
  );
}
