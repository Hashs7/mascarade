export const initMsgCelebrity = (name) => ({
    convId: 0,
    stranger: [{
        content: `Coucou ${name} !`,
        delay: 500,
        type: 'stranger'
    },{
        content: "Tu veux participer pour gagner un iphone 8 gratuitement ?",
        delay: 1500,
        type: 'stranger'
    },{
        content: "C’est un concours pour mes fans !",
        delay: 2500,
        type: 'stranger'
    }],
    responses: [{
        content: "Oh oui j’aimerais trop",
        repIndex: 0,
        type: 'student'
    },{
        content: "Comment je peux savoir que c’est vraiment McFly ?",
        repIndex: 1,
        type: 'student'
    }]
});

const repIndex0 = {
    convId: 0,
    stranger: [{
        content: `D’accord tu vas devoir me suivre étape par étape pour que tu puisses recevoir ton iphone 48h après ta participation`,
        delay: 500,
        type: 'stranger'
    },{
        content: "Tu es intéressé par quel couleur ?",
        delay: 1500,
        type: 'stranger'
    }],
    responses: [{
        content: "Noir",
        repIndex: 2,
        type: 'student'
    },{
        content: "Argent",
        repIndex: 2,
        type: 'student'
    }]
};

const repIndex1 = {
    convId: 0,
    stranger: [{
        content: `C’est mon deuxième compte je l’ai créé spécialement pour les cadeaux pour mes fans et c’est moi qui ai choisi les participants`,
        delay: 800,
        type: 'stranger'
    }],
    responses: [{
        content: "Je ne suis pas convaincu, pourquoi tu ne le fais pas sur ton compte principal ?",
        repIndex: 3,
        type: 'student'
    },{
        content: "Oh d’accord je comprends oui je veux gagner un iphone",
        repIndex: 0,
        type: 'student'
    }]
};

const repIndex2 = {
    convId: 0,
    stranger: [{
        content: `Très bon choix maintenant pour confirmer ta participation le système va te demander un code reçu gratuitement par téléphone`,
        delay: 800,
        type: 'stranger'
    },{
        content: "Voilà appelle ce numéro 08 99 63 28 26 il y a un mec qui va te dire le code d’accès et tu me le dis après. Les prix qu’ils vont te dire c’est 3 euros à chaque appel mais ce n’est pas vrai, t’inquiètes c’est gratuit ok ?",
        delay: 2000,
        type: 'stranger'
    }],
    responses: [{
        content: "Appeler le numéro et dire les codes",
        repIndex: 'stop',
        type: 'student'
    },{
        content: "Non je ne veux pas appeler tant pis j'arrête de jouer",
        repIndex: 'stop',
        type: 'student'
    }]
};

const repIndex3 = {
    convId: 0,
    stranger: [{
        content: `Parce qu’il y a beaucoup de fans qui participent`,
        delay: 800,
        type: 'stranger'
    }],
    responses: [{
        content: "Prouves moi que c’est toi envoie-moi une photo",
        repIndex: 4,
        type: 'student'
    }]
};

const repIndex4 = {
    convId: 0,
    stranger: [{
        content: `photo floue`,
        delay: 800,
        type: 'stranger'
    }],
    responses: [{
        content: "C’est pas toi, on voit pas ton visage…",
        repIndex: 'stop',
        type: 'student'
    },{
        content: "Signaler le compte",
        repIndex: 'report',
        type: 'student'
    }]
};

export const dialogResCelebrity = [
    repIndex0,
    repIndex1,
    repIndex2,
    repIndex3,
    repIndex4,
];