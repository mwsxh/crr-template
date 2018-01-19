Page({
    state: {
        "title": "hello",
        "body": "world!",
        "isFetching": false
    },
    reducers: {
        "request_data": function (state) {
            state.isFetching = true;
            return Object.assign({}, state);
        },
        "received_data": function (state) {
            state.isFetching = false;
            return Object.assign({}, state);
        }
    },
    methods: {
        "getData": function () {
            dispatch("request_data");
            setTimeout(() => {
                dispatch("received_data");
            }, 1000);
        }
    }
});
