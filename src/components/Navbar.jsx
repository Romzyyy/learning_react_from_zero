/* eslint-disable react/prop-types */
const Navbar = (props) => {
    return (
        <div className='text-white'>
            <ul className='flex-col'>
                <li>
                    <a href='#'>home</a>
                </li>
                <li>
                    <a href='#'>about</a>
                </li>
                <li>
                    <a href='#'>contact</a>
                </li>
                <li>
                    <a href='#'>{props.navText}</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
