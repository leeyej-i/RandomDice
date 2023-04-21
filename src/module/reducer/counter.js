
export const INCREASE = "COUNTER/INCREASE";
export const DECREASE = "COUNTER/DECREASE";
export const CHANGE = "COUNTER/CHANGE";

export const increaseCount = (index) => ({
    type: INCREASE,
    index
});

export const decreaseCount = (index) => ({
    type: DECREASE,
    index
});

export const changeNum = ({ index, num }) => ({
    type: CHANGE,
    index,
    num
});

const initalState = {
    counters: [
        {
            num: 4,
            count: 10
        },
        {
            num: 4,
            count: 10
        },
        {
            num: 4,
            count: 10
        },
        {
            num: 4,
            count: 10
        },
        {
            num: 4,
            count: 10
        }
    ]
};

const counter = (state = initalState, action) => {
    const { counters } = state

    switch (action.type) {
        case INCREASE:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        count: counters[action.index].count + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        case DECREASE:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        count: counters[action.index].count - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        case CHANGE:
            console.log(action.num)
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        num: action.num,
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        default:
            return state;
    }
};

export default counter;
