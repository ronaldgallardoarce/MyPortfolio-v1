import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode,
    class: string,
    id: string
}
const SectionContainer = ({ children }: SectionContainerProps) => {
    return (
        <section>
            {children}
        </section>
    );
}

export default SectionContainer;