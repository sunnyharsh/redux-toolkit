import {useSelector, useDispatch} from 'react-redux'
import { FETCH_DATA_SAGA} from "../sagas/sagaActions";

const Person = () => {
    const dispatch = useDispatch();
    const personData = useSelector((state) => state.personData.personArr)
    console.log(personData, "personData")

    const getData = () => {
        dispatch({ type: FETCH_DATA_SAGA })
    }
    return (
        <div>
            <div>
                <p>person details</p>
                <button onClick={getData}>getData</button>
            </div>
            {
                personData?.map((obj, index) => (
                    <p key={index}>{ obj.name}</p>
                ))
            }
        </div>
    )
} 
export default Person;