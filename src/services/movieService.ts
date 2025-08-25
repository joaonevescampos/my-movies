import { httpClient } from "../api/axiosConfig";

export class MovieService {
  async getPopularMovies() {
    try {
      const response = await httpClient.get(
        "/movie/popular?language=pt-BR&page=1"
      );
      return response.data;
    } catch (error:any) {
      throw new Error("Erro interno do servidor", error);
    }
  }

  async getNowPlayingMovies() {
    try {
      const response = await httpClient.get(
        "/movie/now_playing?language=pt-BR&page=1"
      );
      return response.data;
    } catch (error:any) {
      throw new Error("Erro interno do servidor", error);
    }
  }

  async getTopRatedMovies() {
    try {
      const response = await httpClient.get(
        "/movie/top_rated?language=pt-BR&page=1"
      );
      return response.data;
    } catch (error:any) {
      throw new Error("Erro interno do servidor", error);
    }
  }

    async getUpComingMovies() {
    try {
      const response = await httpClient.get(
        "/movie/upcoming?language=pt-BR&page=1"
      );
      return response.data;
    } catch (error:any) {
      throw new Error("Erro interno do servidor", error);
    }
  }
}
