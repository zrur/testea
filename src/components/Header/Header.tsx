"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import Home from "../../img/home.png";
import MenuIcon from "../../img/menu.png";
import Logo from "../../img/logo.png";
import CloseIcon from "../../img/close.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-corSecundaria w-full h-24 flex justify-between items-center shadow-xl relative">
            <Link href="/">
                <Image
                    src={Home}
                    alt="home"
                    className="w-8 h-8 ml-2"
                />
            </Link>
            <Image
                src={Logo}
                alt="logo"
                className="w-12"
            />
            <div id="menu" onClick={toggleMenu} className="cursor-pointer">
                <Image
                    src={menuOpen ? CloseIcon : MenuIcon}
                    alt="menu"
                    className="w-8 h-8 mr-2"
                />
            </div>
            {menuOpen && (
                <nav className="absolute top-20 right-0 w-80 bg-corSecundaria p-10 flex flex-col space-y-4 text-white shadow-lg">
                    <Link href="/Login" onClick={toggleMenu}>
                        <button className="bg-corPrimaria w-60 p-2 flex items-center justify-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"> Entrar</button>
                    </Link>
                    <hr />
                    <Link href="/" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Home
                    </Link>
                    <hr />
                    <Link href="/About" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Sobre Nós
                    </Link>
                    <hr />
                    <Link href="/Biomassa" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Biomassa
                    </Link>
                    <hr />
                    <Link href="/Eolica" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Eólica
                    </Link>
                    <hr />
                    <Link href="/Geotermica" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Geotérmica
                    </Link>
                    <hr />
                    <Link href="/Hidrica" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Hidrica
                    </Link>
                    <hr />
                    <Link href="/Oceanica" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Oceanica
                    </Link>
                    <hr />
                    <Link href="/Solar" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Energia Solar
                    </Link>
                    <hr />
                    <Link href="/Saiba" className="text-white font-sans font-normal hover:text-corPrimaria transition" onClick={toggleMenu}>
                        Saiba mais
                    </Link>
                    <hr />
                    <Link href="/Quiz" className="text-white font-sans font-normal hover:text-corPrimaria transition pb-5" onClick={toggleMenu}>
                        Quiz
                    </Link>
                </nav>
            )}
        </header>
    );
}

