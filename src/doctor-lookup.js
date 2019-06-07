export class ProfessionSearch {
  getDoctorProfession(selectedProfession) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let key = process.env.exports.apiKey;
      let url = 'https://api.betterdoctor.com/2016-03-01/specialties?skip=0&limit=20&user_key=' + key;
      console.log(key);
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