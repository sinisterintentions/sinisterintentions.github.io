document.write('<link rel="stylesheet" type="text/css" href="/css/redirect.css"><link rel="stylesheet" type="text/css" href="/css/'+campaign+'.css"><img alt="'+campaign+'" src="/images/campaigns/'+campaign+'.svg"></img><h3 id="loading">Redirecting</h3>');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function progress(target) {
    e = document.getElementById('loading');
    i = 0;
    while (i < 5) {
        await sleep(500);
        e.innerHTML += ".";
        document.write('<meta http-equiv = "refresh" content = "0; url = '+target+'" />');
        i++;
    }
    e.innerHTML = 'Failed to redirect, click <a href="'+target+'">here</a>.</p>';
}

progress(target);
