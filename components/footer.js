"use client"
import { useEffect, useState } from "react";

export default function Footer() {

    const [iconsState, setIconsState] = useState({
        linkedin: true,
        github: true,
        ig: true,
        mail: true,
        wa: true,
    });

    useEffect(() => {
        const handleMouseEnter = (icon) => {
            setIconsState((prevState) => ({ ...prevState, [icon]: true }));
        };

        const handleMouseLeave = (icon) => {
            setIconsState((prevState) => ({ ...prevState, [icon]: false }));
        };

        const icons = ["linkedin", "github", "ig", "mail", "wa"];
        icons.forEach((icon) => {
            const iconImg = document.getElementById(icon);
            iconImg.addEventListener("mouseenter", () => handleMouseEnter(icon));
            iconImg.addEventListener("mouseleave", () => handleMouseLeave(icon));
            iconImg.addEventListener("touchstart", () => handleMouseEnter(icon));
            iconImg.addEventListener("touchend", () => handleMouseLeave(icon));
        });

        return () => {
            icons.forEach((icon) => {
                const iconImg = document.getElementById(icon);
                iconImg.removeEventListener("mouseenter", () => handleMouseEnter(icon));
                iconImg.removeEventListener("mouseleave", () => handleMouseLeave(icon));
                iconImg.removeEventListener("touchstart", () => handleMouseEnter(icon));
                iconImg.removeEventListener("touchend", () => handleMouseLeave(icon));
            });
        };
    }, []);

    const iconHrefMap = {
        linkedin: "https://www.linkedin.com/in/dante-clericuzio-1b9345241/",
        github: "https://github.com/dclericuzio",
        ig: "https://www.instagram.com/danteclericuzioo",
        mail: "mailto:danteclericuzio1999@gmail.com",
        wa: "https://wa.me/0818589669?text=I'm%20interested%20in%20working%20with%20you",
    };

    return (
        <div className="bg-[#1C1C1C] py-24 px-[16px]">
            <div className="flex items-center dc-container justify-center gap-5">
                {Object.keys(iconsState).map((icon) => (
                    <a key={icon} href={iconHrefMap[icon]} target="_blank" rel="noopener noreferrer">
                        <img
                            key={icon}
                            id={icon}
                            src={iconsState[icon] ? `./${icon}orange.png` : `./${icon}black.png`}
                            alt={icon}
                            className="w-[35px] h-[35px]"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}