export default interface IUserGetResponse {
  header: {},
  data: {
    id: number;
    email: string;
    role: {
      id: number;
      title: string;
      description: string;
    };
  }

}