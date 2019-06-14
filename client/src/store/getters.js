export default {
    charityAnswered: (state) => {
        if(!state.tabIndex) return;
        const index = state.tabIndex.replace('tab-', '');
        const studentAnswered = state.sessions[index].students.filter(el => el.charity.type);
        return studentAnswered.length;
    }
}