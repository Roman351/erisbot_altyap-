# RomanBot

## **Botun Tokeni'ni Nereye Koyacağız?**

**Discord.js Deki Gibi** ` ayarlar.json` **'a Koyuyoduk Burada** `config.json`**'a koyuyoruz.**

## Komut Nereye Koyuyoruz?

`Commands/<komutismi>` **Diye Dosya Açıyoruz. Ve ardından Yazmaya Başlıyoruz!**

## Nasıl Yazıyoruz?

**İlk Önce** 
``` const { RichEmbed } = require("discord.js");```  **Satırını Başa Ekliyoruz.**

**Daha Sonra İse En Sona Koyduğumuz Komut ismini bu sefer başa ekliyoruz** 
```module.exports = class info {
    constructor() {
        this.name = "yardım",//komutun İsmi
        this.alias = [],//Diğer Kullanım Şekilleri
        this.usage = "x!rixnux"//kullanım
    }
```
**Daha Sonra İse** ``` async run(client, message, args) {``` **Kodunu Ekliyoruz Bi Altına** ```try{``` **Kodunu Ekliyoruz.**

# Artık Kodunuzu Ekleyin!

**Örnek Kod**
```
let infoEmbed = new RichEmbed()
   .setTitle("Bu Bir Embed Örneği")
.addField("Tıpkı Discord.js gibi embed")
            message.channel.send(infoEmbed)//mesaj
```

# Kod Bittikten Sonra

**Kod Bittikten Sonra**

```
}catch(e) {
            throw e;
        }
    }
}
```
**Kodunu Ekleyin Veee Bitti Artı Kod Kullanılabilir.**

# RomanBot