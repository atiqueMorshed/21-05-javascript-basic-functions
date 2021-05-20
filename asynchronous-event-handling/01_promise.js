const myPromise = new Promise((resolve, reject) => {
    if(false) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        resolve('I have failed');
    }
});

myPromise
    .then(value => value+'!!')
    .then(newValue => console.log(newValue))
    .catch(resolvedValue => console.log(resolvedValue));


//

