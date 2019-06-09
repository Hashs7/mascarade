const state = {
  allStories : [{
    src: "https://picsum.photos/300/400",
    name: "Boudon",
    description: "test",
    delay: 1500,
  },{
      src: "https://picsum.photos/500/300",
      name: "Barbie",
      description: "test2",
      delay: 1500,
  },{
      src: "https://picsum.photos/200/400",
      name: "Pourto",
      description: "test3",
      delay: 1500,
  }]
  };

const mutations = {
  addStory(state, story){
    state.allStories.push(story);
  }
}

export default {
  state,
  mutations
}