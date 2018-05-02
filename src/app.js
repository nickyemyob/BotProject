import * as builder from 'botbuilder';

let connector = new builder.ConsoleConnector().listen();
let bot = new builder.UniversalBot(connector, ((session) => {
  session.send('You said: %s', session.message.text);
}));
