import http from 'http';

const getResponseData = (url) => new Promise((resolve, reject) => {
    http.get(url, res => {
        const { statusCode } = res;
        //const contentType = res.headers['content-type'];

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => resolve({ statusCode, rawData }));
    }).on('error', e => reject(e));
});

fixture `Test REST API`;

test('Simple Test', async t => {
    const response = await getResponseData('https://www.google.com/');
    console.log(response.statusCode)
    await t
        .expect(response.statusCode).eql(200);
});