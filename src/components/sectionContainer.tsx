import { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    className: string,
    id: string
}
const SectionContainer = ({ children, className, id }: Props) => {
    return (
        <section className={`max-w-4xl mx-auto py-2`}>
            {children}
        </section>
    );
}

export default SectionContainer;