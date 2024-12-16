import axios, { AxiosResponse } from 'axios';

export const onErrorResponse = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response as AxiosResponse;
    const code = response.data.code;
    let errorMessage;

    switch (response.status) {
      case 400:
        errorMessage = '요청이 유효하지 않습니다. 요청 본문을 확인해주세요.';
        break;
      case 401:
        errorMessage = '인증 토큰이 없습니다. 로그인이 필요합니다.';
        break;
      case 403:
        errorMessage =
          code === '00'
            ? '유효하지 않은 토큰입니다.'
            : '잘못된 비밀번호입니다. 다시 시도해주세요.';
        break;
      case 404:
        errorMessage =
          code === '00'
            ? '유효하지 않은 경로입니다. 경로를 확인해 주세요.'
            : '존재하지 않는 사용자 번호입니다.';
        break;
      case 409:
        errorMessage =
          '이미 존재하는 아이디입니다. 다른 아이디를 사용해 주세요.';
        break;
      default:
        errorMessage = '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.';
    }

    return errorMessage;
  }

  return '알 수 없는 오류가 발생했습니다.';
};
