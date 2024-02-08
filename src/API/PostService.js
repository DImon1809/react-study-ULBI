import axios from "axios";

export default class PostService {
  static async getAll(limit = 4, page = 1) {
    try {
      const response = await axios.get("/all", {
        params: {
          _limits: limit,
          _page: page,
        },
      });

      return response;
    } catch (err) {
      console.error(err);
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get(`/getone/${id}`);

      return response;
    } catch (err) {
      console.error(err);
    }
  }

  static async getComments(id) {
    try {
      const response = await axios.get(`/getcomment/${id}`);

      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
