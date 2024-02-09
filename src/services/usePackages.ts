import axios, { AxiosResponse } from 'axios';

export type PackageInfo = {
  type: string;
  name: string;
  hits: number;
  bandwidth: number;
  prev?: {
    hits: number;
    bandwidth: number;
  };
  links: {
    self: string;
    versions: string;
  };
};

export async function getPackages(): Promise<PackageInfo[]> {
  try {
    const response: AxiosResponse<PackageInfo[]> = await axios.get(
      `https://data.jsdelivr.com/v1/stats/packages`
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса поиска пакетов:', error);
    return [];
  }
}
