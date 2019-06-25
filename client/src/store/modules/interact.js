import StoryMoon from '@/assets/img/story_moon.jpg';
import StoryIphone from '@/assets/img/story_iphone.png';

const state = {
    stories: [{
        img: StoryMoon,
        isActive: false
    },{
        img: StoryIphone,
        isActive: false
    }],
    messages: [{
        info: 'Message 1 : Faux compte qui souhaite arnaquer les élèves',
        isActive: false,
        type: 'celebrity'
    },{
        info: 'Message 2 : Virus via un fichier à télécharger',
        isActive: false,
        type: 'hacker'
    }]
};

const mutations = {
};

export default {
    state,
    mutations
}