import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Techtools.global</h1>p
      <p>Smarter Tools for Smarter Tradies</p>
      <nav>
        <ul>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}
