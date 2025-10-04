function checkInternet() {
    return new Promise((resolve, reject) => {
        let internetConnected = true; 

        setTimeout(() => {
            if (internetConnected) {
                resolve(" Internet is connected!");
            } else {
                reject(" No internet connection!");
            }
        },1500);
    });
}

checkInternet()
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log(" Internet check complete"));
