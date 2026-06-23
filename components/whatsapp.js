import { FaWhatsapp } from "react-icons/fa"

export default function Toggle() {
    return(
        <a 
            href='https://wa.me/62818589669?text=Hi%20Dante,%20I%20want%20to%20know%20more%20about%20websites.' 
            target="_blank" rel="noopener noreferrer" 
            className='fixed rounded-full right-[40px] bottom-[40px] w-[50px] h-[50px] bg-[#25D366] backdrop-blur-md border border-[#25D366]/50 shadow-lg flex justify-center items-center hover:bg-[#25D366]/90 animation-effect'
        >
            <FaWhatsapp className='w-[30px] h-[30px] text-[#FFFFFF]'/>
        </a>
    )
}
