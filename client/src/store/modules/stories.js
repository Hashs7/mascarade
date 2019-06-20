const state = {
    allStories: []
};

const storyExample = {
    src: "https://picsum.photos/350/600",
    name: "Le monde",
    description: "Une future explosion ?",
    delay: 1500
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