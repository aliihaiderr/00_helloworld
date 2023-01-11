import Link from 'next/link';


export default function Page() {
  return (
  <>
  <h1>Hello!....Im using next.js linking</h1>
  <Link href="/name">Name</Link><br/>
  <Link href="/name/address">Address</Link>
  </>
  );
}