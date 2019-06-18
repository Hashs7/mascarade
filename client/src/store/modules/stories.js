const state = {
    allStories: [{
        src: "https://picsum.photos/300/500",
        name: "Le monde",
        description: "Une future explosion ?",
        delay: 1500,
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