'use client';
import { useState } from "react";
import { useAuth } from '@/context/AuthContext'
import { useRouter } from "next/navigation";

export default function Home() {
  const { login, token, user,   } = useAuth();
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
    router.push('/products');
  };
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='max-w-xl w-full bg-white rounded-xl shadow-lg p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Giriş Yap</h2>

        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Kullanıcı Adı</label>
            <input 
            type="text"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            placeholder='Kullanıcı Adı'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
              
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Şifre</label>
            <input 
            type="password"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
            placeholder='******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
          type="submit"
          onClick={handleLogin}
          className='cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors'>
            Giriş Yap
          </button>
        </form>
            
      </div>
    </div>
  );
}
