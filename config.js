module.exports = {
    app: {
        token: 'ODkzMjAzNDAyOTU0MjQ4MjM0.Gg_SE0.vurVH5rC61iJnvg18vsWJKBJ03qTziuds1TtYM',
        playing: ' ',
        global: true,
        guild: '1204485189091328010',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
