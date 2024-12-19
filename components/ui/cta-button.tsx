import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
    label: string;
    href: string;
    theme: string;
    icon?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label = "Click Here", href = "#", theme = "light" }) => {
    return (
        <button className="px-4 py-2 bg-primaryAccent rounded-lg hover:bg-primaryDark">
            <Link className="text-primaryLight" href={href}>{label}</Link>
        </button>
    );
};

export default CTAButton;