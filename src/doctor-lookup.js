export class NameLookUp {
  getDoctorProfession(name) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      console.log(name);
      let key = process.env.exports.apiKey;
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5155%2C-122.6793%2C10&limit=10&user_key=` + key;
      console.log(url);

      request.onload = function () {
        if(this.status === 200) {
          resolve(request.response);
        }else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
