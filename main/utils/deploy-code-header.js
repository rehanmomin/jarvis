import { RequestHook } from 'testcafe';

export class DeployCodeHeader extends RequestHook {
    constructor (requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }

    async onRequest (event) {
        if(process.env.DEPLOY > 0){
            var code = process.env.DEPLOY
            event.requestOptions.headers['deploy'] = '' + code.toString()
        }
        
    }

    async onResponse(event){

    }
}
