import { FC, ReactNode } from "react";
import { GralProps } from "../../shared/types";

interface Props extends GralProps {
    children?: ReactNode;
}
const SectionTitle: FC<Props> = ({ className, children }) => {
    return (
        <h2 className={`text-4xl font-bold mt-4 ${className}`}>
            {children}
        </h2>
    );
}

export default SectionTitle;