import './styles.css'


export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'white' }}>
      {children}
    </div>
  );
}