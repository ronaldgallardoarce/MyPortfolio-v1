import { FC, ReactNode } from "react";
import { GralProps } from "../../shared/types";

interface Props extends GralProps {
    children?: ReactNode,
}
const SectionContainer: FC<Props> = ({ children, className, id }) => {
    return (
        <section id={id} className={`max-w-4xl mx-auto py-2 ${className}`}>
            {children}
        </section>
    );
}

export default SectionContainer;