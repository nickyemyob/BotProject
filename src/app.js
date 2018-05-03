import * as builder from 'botbuilder';
import * as restify from 'restify';

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3000, () => {
  console.log('%s listening to %s', server.name, server.url);
});

const connector = new builder.ChatConnector({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
});

server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector, ((session) => {
  session.send('You said: %s', session.message.text);
}));
