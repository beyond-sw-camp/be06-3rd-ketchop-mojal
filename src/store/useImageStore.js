import { defineStore } from "pinia";
import axios from "axios";

export const useImageStore = defineStore('image', {
    state: () => ({
        images:[]
    }),
    actions:{
        async uploadImages(postType, files){
            let url = `/proxy/api/upload/image`;

            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }
            formData.append('postType', postType);

            try {
                const response = await axios.post(url, formData, {
                    withCredentials:true,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  });

                  console.log(response);
                  this.images=response.data.result;
                  console.log(this.images);

            } catch (error) {
                console.log(error);
            }
        }
    }
})