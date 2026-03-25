export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#010409', 
      color: '#adbac7', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      align-items: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      direction: 'rtl'
    }}>
      <h1 style={{ color: '#58a6ff', fontSize: '3rem' }}>WESAM AI 🛡️</h1>
      <p style={{ color: '#3fb950', fontSize: '1.2rem', fontWeight: 'bold' }}>
        من الموصل إلى العالم أجمع 🌍
      </p>
      <p style={{ maxWidth: '400px', lineHeight: '1.6' }}>
        مرحباً بكم في إمبراطوريتي الرقمية. هنا نصنع المستقبل، نرفض العنصرية، ونعشق المأكولات البحرية!
      </p>
      <div style={{ 
        marginTop: '20px', 
        padding: '10px 20px', 
        border: '1px solid #238636', 
        borderRadius: '20px',
        color: '#238636'
      }}>
        الحالة: السيادة كاملة ✅
      </div>
      <footer style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5 }}>
        Created by Wesam | Solo Developer | Seafood Lover 🦐
      </footer>
    </main>
  );
                  }
