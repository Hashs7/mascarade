const getSessionIndex = (state) => {
    return state.tabIndex.replace('tab-', '');
}

export default {
    charityAnswered: (state) => {
        if(!state.tabIndex) return;
        const index = getSessionIndex(state);
        const studentAnswered = state.sessions[index].students.filter(el => {
            if(!el.charity) return;
            return el.charity.type;
        });
        return studentAnswered.length;
    },
    currentSessions: (state) => {
        const index = getSessionIndex(state);

        return state.sessions[index];
    },
    trapCharity: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.charity.type);

        return {
            number: studentsDone.length,
            name: 'Étape : Cause'
        };
    },
    trapFakeNews: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.fakeNews.action !== null);

        return {
            number: studentsDone.length,
            name: 'Étape : Fake News'
        }
    },
    trapHarassment: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.harassment.action);

        return {
            number: studentsDone.length,
            name: 'Étape : Harcèlement'
        }
    },
    trapSlider: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.slider > 0);

        return {
            number: studentsDone.length,
            name: 'Étape : Slider'
        }
    },
    trapQuizz: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.quizz.length);

        return {
            number: studentsDone.length,
            name: 'Étape : Quizz'
        }
    },
    trapDialogCelebrity: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.dialog.celebrity.conversation.length);

        return {
            number: studentsDone.length,
            name: 'Étape : Messages célébrité'
        }
    },
    trapDialogHacker: (state) => {
        const index = getSessionIndex(state);
        const studentsDone = state.sessions[index].students.filter(el => el.dialog.hacker.conversation.length);

        return {
            number: studentsDone.length,
            name: 'Étape : Messages hacker'
        }
    }
}