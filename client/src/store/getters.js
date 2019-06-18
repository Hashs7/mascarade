export default {
    charityAnswered: (state) => {
        if(!state.tabIndex) return;
        const index = state.tabIndex.replace('tab-', '');
        console.log(state.sessions[index].students, 'type');
        const studentAnswered = state.sessions[index].students.filter(el => {
            if(!el.charity) return;
            return el.charity.type;
        });
        return studentAnswered.length;
    }
}