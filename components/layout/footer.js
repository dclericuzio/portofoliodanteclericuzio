import Link from "next/link";
import { iconSvg } from "@/app/constants";

export default function Footer() {

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] py-24 px-[16px]">
            <div className="flex items-center dc-container justify-center gap-5">
                {iconSvg.map((item, i)=> (
                    <Link
                        key={i} 
                        href={item.href}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <item.name
                            className="text-[#1C1C1C] hover:text-[#FF5733] dark:text-[#E4E4E4] dark:hover:text-[#68CC93] text-[35px] animation-effect"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}