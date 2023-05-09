/* eslint-disable react/prop-types */
const Button = (props) => {
    return (
        <button
            {...props}
            className='bg-blue-600 rounded-md flex items-center gap-x-2 text-white px-4 py-2'
        >
            {props.children}
        </button>
    );
};

export default Button;
