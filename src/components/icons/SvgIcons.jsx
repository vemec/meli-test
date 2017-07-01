// Module dependencies
import React from 'react';

/**
 * SvgIcons
 */
class SvgIcons extends React.Component {
    render() {
        return (
            <svg className="svg-hide" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <symbol viewBox="0 0 18 18" id="breadcrumb-icon" xmlns="http://www.w3.org/2000/svg">
                    <g fillRule="evenodd">
                        <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z"></path>
                        <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z"></path>
                    </g>
                </symbol>
            </svg>
        )
    }
}

export default SvgIcons;
