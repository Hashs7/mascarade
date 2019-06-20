export const initMsgHacker = (name) => ({
    convId: 1,
    stranger: [{
        content: `Bonjour ${name}, pour la prochaine séance tu dois télécharger et lire ce document`,
        delay: 500,
        type: 'stranger'
    },{
        content: "Lien...",
        delay: 1500,
        type: 'stranger'
    }],
    responses: [{
        content: "Télécharger",
        repIndex: 0,
        type: 'student'
    },{
        content: "Répondre autre chose...",
        repIndex: 1,
        type: 'student'
    }]
});

const repIndex0 = {
    convId: 1,
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
    convId: 1,
    stranger: [{
        content: 'Tu dois le télécharger sur ton ordinateur pour pouvoir le lire et connaître son contenu',
        delay: 800,
        type: 'stranger'
    }],
    responses: [{
        content: "Le téléchargement de ce document est-il sécurisé ?",
        repIndex: 3,
        type: 'student'
    },{
        content: "Ok je télécharge",
        repIndex: 0,
        type: 'student'
    }]
};

const repIndex2 = {
    convId: 1,
    stranger: [{
        content: `Très bon choix maintenant pour confirmer ta participation le système te demander un code reçu gratuitement par téléphone`,
        delay: 800,
        type: 'stranger'
    },{
        content: "Voilà appelle ce numéro 08 99 63 28 26 il y a un mec qui va te dire le code d’accès et tu me le dis après. Les prix qu’ils vont te dire c’est 3 euros à chaque appel mais c’est pas vrai, t’inquiètes c’est gratuit ok ?",
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

export const dialogResHacker = [
    repIndex0,
    repIndex1,
    repIndex2
];