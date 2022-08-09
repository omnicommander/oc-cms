import axios from 'axios';

class PagesAPI {
  static async getAllPages() {
    console.log('Called?')
    return axios.get('http://localhost:5000/pages')
      .then(({ data }) => {
        return data
      }, (error) => {
        console.log(error);
    })
  }

  static async addNewPage(newPage) {
    console.log(newPage)
    return axios.post('http://localhost:5000/pages/create/', newPage)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
    })
  } 
}
export default  PagesAPI;