import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;
        // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() =>{
            const formValue = {
                searchTerm: value,
            };
            onSubmit(formValue);
        }
        ,300);
        
    }
    return (
        <form>
            <input type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            >   
            </input>
        </form>
    );
}

export default PostFiltersForm;