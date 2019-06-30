export const initMsgHacker = (name) => ({
    convId: 1,
    stranger: [{
        content: `Bonjour ${name}, pour la prochaine séance tu dois télécharger et lire ce document`,
        delay: 500,
        type: 'stranger'
    },{
        content: "https://ctVNl9lcxTesVHX4VGVWdCfsts/edit",
        link: true,
        delay: 1500,
        type: 'stranger'
    }],
    responses: [{
        content: "Télécharger",
        repIndex: 'stop',
        convState: 'trap',
        type: 'student'
    },{
        content: "Bonjour, est-ce que je peux le lire directement sans le télécharger",
        repIndex: 0,
        type: 'student'
    }]
});

const repIndex0 = {
    convId: 1,
    stranger: [{
        content: 'Tu dois le télécharger sur ton ordinateur pour pouvoir le lire et connaître son contenu',
        delay: 1200,
        type: 'stranger'
    }],
    responses: [{
        content: "Le téléchargement de ce document est-il sécurisé ?",
        repIndex: 1,
        type: 'student'
    },{
        content: "Ok je télécharge",
        repIndex: 'stop',
        convState: 'trap',
        type: 'student'
    }]
};

const repIndex1 = {
    convId: 1,
    stranger: [{
        content: "Bravo tu as évité un virus !",
        delay: 800,
        type: 'stranger'
    }],
    responses: []
};

const repIndex2 = {
    convId: 1,
    stranger: [{
        content: "Attention virus ! Ton compte vient d'être piraté suite au téléchargement",
        delay: 800,
        type: 'stranger'
    },{
        content: "Certains documents peuvent contenir des virus. Il est important de vérifier la source",
        delay: 1800,
        type: 'stranger'
    },{
        content: "Et également si le compte à qui tu parles n'a pas été piraté",
        delay: 2800,
        type: 'stranger'
    }],
    responses: []
};

export const dialogResHacker = [
    repIndex0,
    repIndex1,
    repIndex2
];