import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      boxSizing: 'border-box',
      zIndex: 20,
      color: '#00ffd5',
      fontWeight: '900',
      fontSize: '26px',
      letterSpacing: '3px',
      userSelect: 'none'
    }}>
      <div>DSRT</div>
      <Link href="/login">
        <a style={{
          border: '2px solid #00ffd5',
          padding: '8px 22px',
          borderRadius: '30px',
          color: '#00ffd5',
          fontWeight: '700',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00ffd5'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Login
        </a>
      </Link>
    </header>
  );
}
