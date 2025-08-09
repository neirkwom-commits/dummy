import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Fungsi login belum tersedia');
  };

  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px', maxWidth: '400px', margin: '100px auto', color: '#00ffd5' }}>
        <h2>Login ke DSRT</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="masukkan email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="masukkan password" required />
          
          <button type="submit" style={{
            backgroundColor: '#ffcb05',
            color: '#000',
            padding: '14px 0',
            fontWeight: '700',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Login
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
