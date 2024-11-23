"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, LogOut, Settings, Home as HomeIcon } from 'lucide-react';

export default function LoggedHeader() {
    const router = useRouter();
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    const handleLogout = () => {
        // Implement logout logic
        router.push("/");
    };

    const handleEditProfile = () => {
        const userNickname = "Arthur.Murilo"; // Replace with actual user nickname
        router.push(`/Home/User/${userNickname}`);
        setUserMenuOpen(false);
    };

    return (
        <header className="bg-blue-600 w-full h-20 flex justify-between items-center px-4 shadow-md relative">
            <div 
                onClick={() => router.push("/")} 
                className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition"
            >
                <HomeIcon className="text-white w-8 h-8" />
            </div>

            <div className="relative">
                <div 
                    onClick={toggleUserMenu} 
                    className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition"
                >
                    <User className="text-white w-8 h-8" />
                </div>

                {userMenuOpen && (
                    <div className="absolute top-16 right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-4 border-b flex items-center space-x-3">
                            <User className="text-gray-600 w-10 h-10" />
                            <div>
                                <p className="font-semibold text-gray-800">Arthur Murilo</p>
                                <p className="text-sm text-gray-500">arthur@email.com</p>
                            </div>
                        </div>
                        <div className="py-1">
                            <button 
                                onClick={handleEditProfile}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Settings className="mr-3 w-5 h-5 text-gray-500" />
                                Editar Perfil
                            </button>
                            
                            <button 
                                onClick={handleLogout}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                                <LogOut className="mr-3 w-5 h-5 text-red-500" />
                                Sair
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}