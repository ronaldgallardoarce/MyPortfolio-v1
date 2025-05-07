import React, { ComponentType, SVGProps } from 'react';
import LinkedIn from '../icons/linkedin';
import GitHub from '../icons/github';
import MailIcon from '../icons/mailIcon';
import FileCvIcon from '../icons/fileCvIcon';
import SunIcon from '../icons/sunIcon';
import MoonIcon from '../icons/moonIcon';
import ComputerIcon from '../icons/computerIcon';

const NavBar = () => {
    return (
        // <div className="mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a]">
            <div className="mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 bg-[hsla(0,0%,98%,0.2)] bg-blend-luminosity  backdrop-blur-xl dark:ring-[#1a1a1a]">


            {/* Avatar */}
            <button className="relative">
                <a href="/" aria-label="Inicio">
                    <div className="z-30 flex aspect-square w-10 items-center justify-center rounded-full bg-neutral-200/70 dark:bg-neutral-900/70">
                        <div className="group">
                            <img
                                alt="avatar Eduardo Calvo López"
                                className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-full group-hover:hidden"
                                src="https://img.freepik.com/premium-photo/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1029476-294679.jpg"
                            />
                            <img
                                alt="avatar Eduardo Calvo López"
                                className="hidden rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-full group-hover:flex"
                                src="https://img.freepik.com/premium-photo/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1029476-294679.jpg"
                            />
                        </div>
                    </div>
                </a>
                <div className="absolute -bottom-2 left-1/2 h-[0.3rem] w-[0.3rem] -translate-x-1/2 rounded-full bg-amber-600" />
            </button>

            {/* Icon Buttons */}
            <NavButton href="#about" ariaLabel="About" icon={LinkedIn} />
            <NavButton href="#blog" ariaLabel="Blog" icon={GitHub} />
            <NavButton href="#proyectos" ariaLabel="Proyectos" icon={MailIcon} />
            <NavButton href="#stack" ariaLabel="Stack" icon={FileCvIcon} />
            <NavButton href="https://educalvolopez.lemonsqueezy.com/" ariaLabel="Tienda" icon={GitHub} external />

            {/* Divider */}
            <hr className="mt-2.5 h-10 w-[1px] border-none bg-neutral-300 dark:bg-white" />

            {/* Theme Switch */}
            <button className="relative">
                <div className="z-30 flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200/70 dark:bg-neutral-900/70">
                    <SunIcon className="w-6/12 fill-white stroke-neutral-900 transition dark:hidden dark:fill-neutral-600 dark:stroke-neutral-300" />
                    <MoonIcon className="hidden w-6/12 fill-white stroke-neutral-900 transition dark:block dark:fill-neutral-600 dark:stroke-neutral-300" />
                </div>
            </button>

            {/* Sound Button */}
            <button className="relative">
                <div className="z-30 flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-200/70 dark:bg-neutral-900/70">
                    <ComputerIcon className="w-6/12 fill-white stroke-neutral-900 transition dark:fill-neutral-600 dark:stroke-neutral-300" />
                    <div className="sr-only">Sin sonido</div>
                </div>
            </button>
        </div>
    );
};

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
interface NavButtonProps {
    href: string;
    ariaLabel: string;
    icon: IconType;
    external?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ href, ariaLabel, icon: Icon, external = false }) => (
    <button className="relative">
        <a
            href={href}
            aria-label={ariaLabel}
            rel={external ? 'noopener noreferrer' : ''}
            target={external ? '_blank' : '_self'}
        >
            <div className="z-30 flex aspect-square w-10 items-center justify-center rounded-full bg-neutral-200/70 dark:bg-neutral-900/70">
                <Icon className='w-6/12 fill-white stroke-neutral-900 transition dark:fill-neutral-600 dark:stroke-neutral-300' />
            </div>
        </a>
    </button>
);

export default NavBar;
