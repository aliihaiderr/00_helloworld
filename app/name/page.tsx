'use client';
import { useRouter } from "next/navigation";

export default function Name(){
  const router = useRouter();

    return (
      <>
      <h1>My Name is Ali Haider</h1>
      <h3>PIAIC-139654</h3>
      <button type="button" onClick={()=>router.push('/name/address')}>Address</button><br/>
      <button type="button" onClick={()=>router.push('/')}>Home</button>
      </>
      );
}