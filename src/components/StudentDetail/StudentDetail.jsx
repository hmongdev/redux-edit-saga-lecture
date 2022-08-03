import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleEditClick = () => {
        //! 2. dispatch student info to redux store
        dispatch({
            type: 'SET_EDIT_STUDENT',
            payload: props.student,
        });
        //! 3. route user to edit form
        history.push('/edit');
    };

    return (
        <tr>
            <td>{props.student.github_name}</td>
            <td>
                <button onClick={handleEditClick}>Edit!</button>
            </td>
        </tr>
    );
}

export default StudentDetail;
