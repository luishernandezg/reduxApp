import {httpClient} from '../../../api/httpClient';
import {ImageEntity} from '../entities/image';

export async function getImageList() {
  try {
    const endpoint = '/albums/1/photos';
    console.log('start petition for: ' + endpoint);
    const response = await httpClient.get<ImageEntity[]>(endpoint);
    console.log('response success: ' + response);
    const result = response.data;
    return result;
  } catch (error) {
    console.log('response error: ' + error);
    throw error;
  }
}
