import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=>{
  it('should say hello', (done)=>{
    // provide html file to jsdom
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      //we have virtual dom in memory
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hi There?');
      done();//we say here that tell me the result after done
      window.close();
    });
  });
});
