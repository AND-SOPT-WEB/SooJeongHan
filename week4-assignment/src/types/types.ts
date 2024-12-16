export interface SignupData {
  username: string;
  password: string;
  hobby: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  result: {
    token: string;
  };
}

export interface MyHobbyResponse {
  result: {
    hobby: string;
  };
}

export interface OtherHobbyResponse {
  result: {
    hobby: string;
  };
}

export interface UpdateRequestData {
  hobby?: string;
  password?: string;
}

export interface InfoResponse {
  result: {
    hobby?: string;
    password?: string;
  };
}
