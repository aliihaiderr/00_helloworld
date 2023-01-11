'use client';
import { useRouter } from "next/navigation";
export default function Address(){
  const router=useRouter();
  return (
    <>
    <h1>Address</h1>
    <p>Im From sahiwal,punjab,pakistan</p>
    <button type="button" onClick={()=>router.push("/name")}>Back</button>
    </>
    );
}