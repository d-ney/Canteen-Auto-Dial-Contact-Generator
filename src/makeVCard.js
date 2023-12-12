
const makeVCardVersion = () => `VERSION:3.0`;
const makeVCardInfo = (name) => `N:;${name};;;`;
const makeVCardName = (name) => `FN:${name}`;
const makeVCardOrg = (org) => `ORG:${org}`;
const makeVCardTitle = () => `TITLE:`;
const makeVCardPhoto = () => `PHOTO;TYPE=JPEG;ENCODING=b:[]`;
const makeVCardTel = (phone) => `TEL;CELL;VOICE:${phone}`;
const makeVCardAdr = () => `ADR:`;
const makeVCardEmail = () => `EMAIL:`;
const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;


function makeVCard(name, choice) {
    let vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardInfo(name)}
${makeVCardName(name)}
${makeVCardTel("1 (877) 441-9760\,\," + idEl.value + "0#\,\,1\," + choice +"\,1")}
END:VCARD`;
    downloadToFile(vcard, name + '.vcf', 'text/vcard');
  }