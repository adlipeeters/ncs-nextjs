import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi"
import Image from 'next/image';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme()
    console.log(resolvedTheme)

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return '';
    
    return (
        <div className='flex items-center'>
            {
                resolvedTheme === 'dark' ? (
                    <button
                        onClick={() => setTheme('light')}
                        type="button"
                        className="flex flex-col space-y-4 text-sm">
                        <FiMoon />
                    </button>
                ) : (
                    <button
                        onClick={() => setTheme('dark')}
                        type="button"
                        className="flex flex-col space-y-4 text-sm">
                        <FiSun />
                    </button>
                )
            }
        </div>
    )
}

export default ThemeSwitcher