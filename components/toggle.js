import { FaWhatsapp } from "react-icons/fa"

export default function Toggle() {
    return(
        <a 
            href='https://wa.me/62818589669?text=Hi%20Dante,%20I%20want%20to%20know%20more%20about%20websites.' 
            target="_blank" rel="noopener noreferrer" 
            className='fixed rounded-full right-[40px] bottom-[40px] w-[50px] h-[50px] bg-[#68CC93] flex justify-center items-center'
        >
            <FaWhatsapp className='w-[30px] h-[30px] text-[#E4E4E4]'/>
        </a>
    )
}
