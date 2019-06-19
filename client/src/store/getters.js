export default {
    charityAnswered: (state) => {
        if(!state.tabIndex) return;
        const index = state.tabIndex.replace('tab-', '');
        const studentAnswered = state.sessions[index].students.filter(el => {
            if(!el.charity) return;
            return el.charity.type;
        });
        return studentAnswered.length;
    },
    currentSessions: (state) => {
        const index = state.tabIndex.replace('tab-', '');
        return state.sessions[index];
    }
}