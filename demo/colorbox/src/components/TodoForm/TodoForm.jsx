import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    return (
        <form>
            <input type="text" value={value}></input>
        </form>
    );
}

export default TodoForm;