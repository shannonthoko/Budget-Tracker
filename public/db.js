//let db;
// create a new db request for a "budget" database.
const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("budget", {
        keyPath: "listID"
    });
    //objectStore.createIndex("transactionIndex", "transaction");
  };

  

request.onsuccess = event => {
console.log(request.result);
//objectStore.add({listID: "1",transaction: "100"});


};

request.onerror = event => {
    // log error here
};

saveRecord = () => {

    
}




