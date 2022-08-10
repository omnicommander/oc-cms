import axios from 'axios';

class FoldersAPI {
  static async getAllFolders() {
    return axios.get('http://localhost:5000/api/v1/folders')
      .then(({ data }) => {
        return data
      }, (error) => {
        console.log(error);
    })
  }

  static async addNewFolder(newFolder) {
    console.log(newFolder)
    return axios.post('http://localhost:5000/api/v1/folders/', newFolder)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
    })
  } 
}
export default  FoldersAPI;
