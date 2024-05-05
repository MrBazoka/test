const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const { Client } = require('discord.js');
const client = new Client({intents : 32767});

client.on('ready',async () => {
  await console.log(client.user.tag);
})


client.on('messageCreate',async message => {
  if(!message.guild || message.author.bot) return;
  if(message.content === 'ping') {
    await message.reply({content : 'pong.'});
  }
})


client.login(process.env.token).catch(err => console.log('Token Not invite..'));