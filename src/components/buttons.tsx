import React, { MouseEvent } from 'react';

interface ButtonProps {
    text: string;
    font?: string;
    fontWeight?: string | number;
    textColor?: string;
    buttonColor?: string;
    border?: string;
    svg?: React.ReactNode;
    fullWidth?: boolean;
    margin?: string;
    style?: object;
    onClick?: (event: MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    font = 'inherit',
    fontWeight = 'normal',
    textColor = 'inherit',
    buttonColor = 'inherit',
    border,
    svg,
    fullWidth,
    margin,
    style,
    onClick,
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            style={{
                fontFamily: font,
                fontWeight: fontWeight,
                color: textColor,
                border: border,
                backgroundColor: buttonColor,
                padding: '0.625rem 1.25rem',
                borderRadius: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: fullWidth ? '100%' : 'auto',
                margin,
                ...style
            }}
            onClick={handleClick}
        >
            {svg && <span className='mr-2'>{svg}</span>}
            {text}
        </button>
    );
};

export default Button;
