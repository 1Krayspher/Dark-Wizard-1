let Tempo = 1440 * 60000; //24 horas
const suportediana = "802289502563205140";
module.exports = {
  async execute(client, message, args, database, mdk) {
    var { body } = await require("snekfetch").get(
      require("../firebase.json").databaseURL +
        "/SlowGlobal/" +
        message.author.id +
        ".json"
    );

    if (body === null) body = "undefined";
    if (body === "undefined") body = 0;

    var Bonus;
    if (!body) {
      Bonus = 0;
    } else {
      Bonus = Number(body.slowbonus);
    }

    var Ducketss;
    if (!body) {
      Ducketss = 0;
    } else {
      Ducketss = Number(body.slowduckets);
    }

    database.ref("SlowGlobal/" + message.author.id).set({
      slowbonus: Bonus,
      slowduckets: Ducketss
    });

    const time = require("parse-ms")(Tempo - (Date.now() - Ducketss));
    if (Ducketss !== null && Tempo - (Date.now() - Ducketss) > 0)
      return message.channel.send({
        embed: {
          color: 3447003,
          title: message.author.tag,
          description:
            "⏰ | Aguarde **" +
            `${time.hours}h ${time.minutes}m ${time.seconds}s` +
            " ** para coletar suas poções novamente"
        }
      });

    let grana = Math.round(Math.random() * 1500) + 5000;

    var { body } = await require("snekfetch").get(
      require("../firebase.json").databaseURL +
        "/Duckets/" +
        message.author.id +
        ".json"
    );

    if (body === null) body = "undefined";
    if (body === "undefined") body = 0;

    let Duckets = 2;
    if (message.guild.id === suportediana) Duckets = 4;

    var duckets;
    if (!body) {
      duckets = 0;
    } else {
      duckets = Number(body.duckets);
    }

    database.ref("Duckets/" + message.author.id).set({
      duckets: duckets + Duckets
    });

    var { body } = await require("snekfetch").get(
      require("../firebase.json").databaseURL +
        "/SlowGlobal/" +
        message.author.id +
        ".json"
    );

    if (body === null) body = "undefined";
    if (body === "undefined") body = 0;

    var Bonus;
    if (!body) {
      Bonus = 0;
    } else {
      Bonus = Number(body.slowbonus);
    }

    var Ducketss;
    if (!body) {
      Ducketss = 0;
    } else {
      Ducketss = Number(body.slowduckets);
    }

    database.ref("SlowGlobal/" + message.author.id).set({
      slowbonus: Bonus,
      slowduckets: (Ducketss = Date.now())
    });

    if (message.guild.id !== suportediana)
      return message.channel.send(message.author,{
        embed: {
          color: 80080,
          timestamp: new Date(),
          title: "Poções",
          description:
            "Você coletou **" +
            Duckets +
            "** Poções diária \n\n " +
            " Ganhe o dobro de Poções ao executar o comando no servidor de suporte **[Clique aqui para entrar](https://discord.gg/" +
            require("../config.json").suporte +
            ")**",
          footer: {
            icon_url: message.author.avatarURL,
            text: message.author.tag
          },
          thumbnail: {
            url: "https://media.discordapp.net/attachments/806599163131068487/807075127250255873/pocao_DarkWizard.png?width=575&height=473"
          }
        }
      });

    message.channel.send({
      embed: {
        color: 80080,
        timestamp: new Date(),
        title: "Poções",
        description: "Você coletou **" + Duckets + "** Poções diária",
        footer: {
          icon_url: message.author.avatarURL,
          text: message.author.tag
        },
        thumbnail: {
          url: "https://media.discordapp.net/attachments/806599163131068487/807075127250255873/pocao_DarkWizard.png?width=575&height=473"
        }
      }
    });
  }
};
