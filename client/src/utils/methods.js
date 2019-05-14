import store from "../store";

export const isNull = (testedVar) => {
    return testedVar === undefined || testedVar === null;
};

export const getTokenState = () => {
    return new Promise((resolve, reject) => {
        if (store.state.token === undefined) {
            const unwatch = store.watch(
                () => store.state.token,
                (value) => {
                    unwatch();
                    resolve(value);
                }
            )
        } else {
            resolve(store.state.token)
        }
    })
};