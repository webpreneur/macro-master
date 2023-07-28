export const searchFood = (
  { params, response }: { params: { query: string }; response: any },
) => {
  return response.body = { message: params.query };
};
