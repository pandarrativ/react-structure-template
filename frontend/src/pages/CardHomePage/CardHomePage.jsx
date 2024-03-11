import "./card-homepage.css"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "../../reducers/exampleSlicer";

function CardHomePage() {
    const count = useSelector(state => state.example.value)
    const dispatch = useDispatch();


    return ( 
        <div className="card-homepage">
            <div>{`Current Count ${count}`}</div>
            <button onClick={() => dispatch(increment())}>Add 1</button>
            <button onClick={() => dispatch(decrement())}>De 1</button>
            <button onClick={() => dispatch(incrementByAmount(3))}>Add 3</button>
        </div>
     );
}

export default CardHomePage;