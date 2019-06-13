const state = {
  allStories : [{
    src: "https://picsum.photos/300/500",
    name: "Le monde",
    description: "Une future explosion ?",
    delay: 1500,
  },{
      src: "https://picsum.photos/300/500",
      name: "Léon Pariom",
      description: "5 personnes viennent de signaler le profil d'Alain",
      delay: 1500,
  },{
      src: "https://picsum.photos/300/500",
      name: "Léo Patata",
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