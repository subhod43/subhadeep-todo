import { twMerge } from 'tailwind-merge';
import className from "classnames";

function Button ({
    children,
    primary,
    secondary,
    warning,
    danger,
    success,
    ...rest
}) {
    const classes = twMerge(
        className(rest.className, 'flex items-center px-3 py-1.5 border rounded-lg', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-600 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
    })
);
    return <button {...rest} className={classes}> {children} </button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)

        if(count > 1) {
            throw new Error('only one button variation allowed!!');
        }
    }
}


export default Button;