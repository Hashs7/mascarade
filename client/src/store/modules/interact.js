const state = {
    stories: [{
        img: '',
        isActive: false
    },{
        img: '',
        isActive: false
    },{
        img: '',
        isActive: false
    }],
    messages: [{
        info: 'Message 1 : Faux compte qui souhaite arnaquer les élèves',
        isActive: false
    },{
        info: 'Message 2 : Virus via un fichier à télécharger',
        isActive: false
    }]
};

const mutations = {
    addStory(state, story) {
        state.allStories.push(story);
    }
};

export default {
    state,
    mutations
}