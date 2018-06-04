'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_PRIVATE_KEY = __dirname +"/../"+ process.env.NEXMO_PRIVATE_KEY;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_PRIVATE_KEY
}, {debug: true});

const TEXT = 'This is some sample text to speech text. It could go on and on and never end.';

nexmo.calls.talk.start(CALL_UUID, { text: TEXT, voiceName: 'Emma', loop: 1 }, (err, res) => {
  if(err) { console.error(err); }
  else {
      console.log(res);
  }
});

function stop_talk (){
    nexmo.calls.talk.stop(CALL_UUID, (err, res) => {
        if(err) { console.error(err); }
        else {
            console.log(res);
        }
    });
}

setTimeout(stop_talk, 2000); // delay 2 seconds



