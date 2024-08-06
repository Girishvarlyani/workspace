// import Image from "next/image";
// import styles from "./page.module.css";
"use client"
import { useState } from "react";

export default function Home() {
  const [result,setResult]=useState('');
  const [no,setNo]=useState('')

  const fnChange=(eve)=>{
    setNo(eve.target.value)
  }

  const fnCheckPrime=(num)=>{
    if (num < 2) { 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
  }
  const fnClick=()=>{
    const isPrime=fnCheckPrime(no);
    setResult(isPrime ? 'Prime':'Not Prime')
  }
  
  return (
    
    <div>
    <p>
     <b>No: </b><input type="number" onChange={fnChange} />
    </p>
    <p>
     <button onClick={fnClick}>Check Prime</button>
    </p>
    <h1>{result}</h1>
 </div>
    
  );
}
