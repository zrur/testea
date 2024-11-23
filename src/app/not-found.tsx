import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Error from '../img/error.png'

export default function NotFound() {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={Error} alt='Error' className="w-2/5" />
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="bg-corSecundaria w-56 p-2 text-corTerciaria text-center m-5 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
}