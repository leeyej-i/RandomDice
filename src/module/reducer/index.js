import { combineReducers } from "redux";
import counter from './counter';

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드
// 여기서는 주사위 클래스를 표기할 리듀서만 존재
const rootReducer = combineReducers({
    counter
});

export default rootReducer;
