import Link from 'next/link';


export default function Page() {
  return (
  <>
  <h1>Welcome to Home Screen!....Im using next.js linking</h1>
  <Link href="/name" replace>Name</Link><br/>
  </>
  );
}