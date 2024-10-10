import React, { CSSProperties, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const list: string[] = ['New', 'Women', 'Underwear', 'Kids', 'Home', 'Sale']

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [exit, setExit] = useState<boolean>(false)
    const handleClick = () => {
        setExit(!exit)
    }
    return (
        <header className='bg-home-bg py-7'>
            <div onClick={() => handleClick()} className={`${exit ? 'block' : 'hidden'} border border-black h-screen w-screen absolute top-0 left-0`}></div>
            <div className='w-[95%] mx-auto flex items-center justify-between'>
                <ul className='text-home-text lg:flex hidden gap-2 text-sm w-1/3 font-semibold'>
                    {list.map((item, i) => <li style={{ '--underline-color': '#4E2526' } as CSSProperties} key={i} className='px-2 cursor-pointer text'>{item}</li>)}
                </ul>
                <div className='lg:w-1/3 flex justify-center'>
                    <img onClick={() => navigate('/')} className='select-none cursor-pointer' src="assets/img/logo.svg" alt="Logo" />
                </div>
                <div className='lg:w-1/3 flex justify-end'>
                    <div className='flex items-center'>
                        <IoSearch className='text-home-text w-6 h-6 mx-2 cursor-pointer' />
                        <div className='relative z-10'>
                            <svg onClick={() => setExit(!exit)} className='relative ml-3.5 mr-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20" stroke="#4E2526" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2" stroke="#4E2526" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <ul className={`${exit ? 'flex' : 'hidden'} bg-black absolute flex-col top-9 -left-24 p-6 text-white w-[200px] text-[13px]`}>
                                <li style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[52px] text cursor-pointer'>Sign In</li>
                                <li style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[108px] text cursor-pointer'>Create Account</li>
                                <li style={{ '--underline-color': '#fff' } as CSSProperties} className='pl-1 py-1 w-[84px] text cursor-pointer'>Track Order</li>
                            </ul>
                        </div>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M17.84 21H6.16C4.995 21 4.077 20.008 4.166 18.847L4.929 8.924C4.969 8.402 5.403 8 5.926 8H18.074C18.597 8 19.031 8.402 19.071 8.923L19.834 18.846C19.924 20.008 19.005 21 17.84 21V21Z" stroke="#4e2526" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 8V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V8" stroke="#4e2526" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header