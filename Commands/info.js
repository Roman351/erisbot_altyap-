const { RichEmbed } = require("discord.js"); //modülü ayarladık  

module.exports = class info {
    constructor() {
        this.name = "yardım",//komutun İsmi
        this.alias = [],//Diğer Kullanım Şekilleri
        this.usage = ""//kullanım
    }

    async run(client, message, args) {
        try{
        //kod buraya
        }catch(e) {
            throw e;
        }
    }
}