export const initMsg = (name) => {
    return {
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
            repIndex: 1,
            type: 'student'
        },{
            content: "Comment je peux savoir que c’est vraiment Cyprien ?",
            repIndex: 2,
            type: 'student'
        }]
    };
};

export const dialogRes = (name) => {
    return {
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
            repIndex: 1,
            type: 'student'
        },{
            content: "Comment je peux savoir que c’est vraiment Cyprien ?",
            repIndex: 2,
            type: 'student'
        }]
    };
};