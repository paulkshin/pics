import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID oTsqkxCCS0LlqHLbPIhrcS5mQlg_kpr4Tti_HiHLPY8",
  },
});
